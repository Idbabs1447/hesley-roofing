# Helsley Roofing

Next.js App Router website with PostgreSQL-backed inspection requests.

## Local development

Use Node.js 22 LTS and npm:

```sh
npm ci
cp .env.example .env.local
# Replace DATABASE_URL in .env.local with your PostgreSQL connection string.
npm run db:push
npm run dev
```

`db:push` applies `src/db/schema.ts` to the configured database, including the
`inspection_requests` table. Review any proposed changes before confirming,
especially against an existing database. Never commit `.env.local` or credentials.

## Deploy on Vercel

1. Import the repository and select the **Next.js** framework preset.
2. Use the repository root as the Root Directory, **Node.js 22.x**, `npm ci`
   as the Install Command, and `npm run build` as the Build Command. Leave
   the Output Directory at the Next.js default, `.next` (not `dist` or `out`).
   The checked-in `vercel.json` explicitly sets these framework/build settings
   so the project cannot accidentally use the Vite preset.
3. Provision a hosted PostgreSQL database (for example, through a Vercel
   Marketplace provider). In **Settings → Environment Variables**, add
   `DATABASE_URL` using the provider's connection string and SSL settings.
   Enable it for Production and any Preview deployments that need the form;
   preferably use a separate database for previews. Do not use a localhost URL.
4. From a trusted terminal, configure `.env.local` with the intended database
   connection string and run `npm run db:push` once to initialize its schema.
   Database schema changes are intentionally not part of the Vercel build.
5. Deploy the updated code. If environment variables change after deployment,
   redeploy for the changes to take effect.
6. Check `/api/health`: HTTP 200 with `{"ok":true}` means the database is
   reachable. Submit a test inspection request and verify it appears in the
   `inspection_requests` table. The health check alone does not verify the table.

The website builds without `DATABASE_URL`: the database initializes lazily
inside API request handlers. Without a working database, `/api/health` returns
HTTP 500 and inspection submissions return a friendly error rather than being
silently discarded. A successful build alone does not mean the form is ready.
Requests are stored in PostgreSQL; the current code does not send email notifications.

Fonts are bundled through pinned Fontsource packages and `next/font/local`,
so production builds do not need to contact Google Fonts.

## Verification

```sh
npm run build
npm run typecheck
npm run lint
```

Lint currently reports non-blocking recommendations to replace HTML `img`
elements with Next.js `Image` components.
