export type Review = {
  name: string;
  when: string;
  body: string;
  topics: string[];
  featured?: boolean;
};

/**
 * All reviews below are verbatim excerpts published on the current Helsley
 * Roofing reviews page / Google Business Profile. Nothing here is invented.
 */
export const reviews: Review[] = [
  {
    name: "Google reviewer",
    when: "Recent",
    body: "Brad and team were excellent all around. I really appreciate the great repair to my roof. Thanks again!",
    topics: ["Roof Repair"],
    featured: true,
  },
  {
    name: "William Lindquist",
    when: "7 months ago",
    body: "We have used Helsley Roofing for 30 years—from a starter home to our final home. We use Alan because he is local, honest, reasonably priced, and a pleasure to work with. Please ignore those guys who walk the neighborhood after a storm sticking their business cards in your front door. You'll never see or hear from them again after they've charged you a small fortune that insurance may cover after haggling with them. That's not how Helsley Roofing does business. Stay local. Give Alan a call.",
    topics: ["Roof Replacement", "Local"],
    featured: true,
  },
  {
    name: "Bob DeLuca",
    when: "3 months ago",
    body: "Alan and Daniel Helsley are the very best in the business. I have been a very satisfied customer for fifteen years and would never consider calling anyone else. I highly recommend them for any roofing needs!",
    topics: ["Repeat Customer"],
    featured: true,
  },
  {
    name: "Google reviewer",
    when: "4 months ago",
    body: "I have been a customer of Helsley through 2 roof replacements due to hail. Larry Keithley has always come through and taken great care of me. He and the others at Helsley have negotiated with the insurance company and gotten damage covered that the insurance was not going to cover. Also, their work on the roof is quick and professional, with great clean up afterward. I would HIGHLY recommend them to anyone who needs roof repairs or a new roof.",
    topics: ["Storm Damage", "Roof Replacement"],
    featured: true,
  },
  {
    name: "Barry Moore",
    when: "4 months ago",
    body: "Had minor repairs over the past few years from bad work done by other companies, and replaced my roof after a hail storm. Never tried upselling on things I didn't need. Chris has been great to work with. I hope I don't need a new roof anytime soon, but if I do, I'll be giving them a call!",
    topics: ["Roof Repair", "Storm Damage"],
  },
  {
    name: "Gregory Fuller",
    when: "11 months ago",
    body: "I have used Helsley Roofing for several years helping me inspect, maintain, and repair leaks an older roof. Brad Snapp has assisted me during this time and he and his crews have always been trustworthy, prompt and reliable. I recently had to replace the 20 year old roof & gutters. From the estimate, to providing replacement options, shingle samples, and setting expectations, Brad and his team were great from beginning to end. The quality of work exceeded my expectations.",
    topics: ["Roof Replacement", "Gutters"],
    featured: true,
  },
  {
    name: "Stephane Angelot",
    when: "A year ago",
    body: "After the storm we had this winter my roof had some damages like missing a couple of shingles. A couple of roofing companies knocked at my door to tell me that I needed to replace my roof… then I contacted Helsley Roofing as they came recommended, Chris came to check the roof and gave me an estimate to repair that was very acceptable. Repairs were made a couple of weeks later using new shingles perfectly matching my roof, took a couple of hours. Overall an excellent experience dealing with professionals.",
    topics: ["Roof Repair", "Storm Damage"],
  },
  {
    name: "Emily Johnson",
    when: "A year ago",
    body: "I've used Helsley Roofing for several repairs, and recently for a roof replacement. Their crews do excellent work. Alan Helsley is professional, and responds quickly to calls and emails. In the past after a big storm when I thought I might need a new roof, he said that I didn't, so I trust that he's not going to rip me off. Highly recommend.",
    topics: ["Roof Replacement", "Honesty"],
    featured: true,
  },
  {
    name: "Robert Graham",
    when: "A year ago",
    body: "I have used Helsley Roofing ever since 2005 when they replaced my roof. Since then Alan has been out a few times, and I have found him to be reputable, honest, and knowledgeable. I strongly recommend him and his company for any roofing issues.",
    topics: ["Repeat Customer"],
  },
  {
    name: "Cr Davis",
    when: "A year ago",
    body: "I have used Helsley twice. Instant response when I call. Larry and team out the same or next day to estimate the job. Done right the first time. I haven't needed a full roof yet but if I ever do, this is the company.",
    topics: ["Roof Repair"],
  },
  {
    name: "Miguel Angel Gutierrez",
    when: "2 years ago",
    body: "Helsley was recommended by our insurance provider (USAA), so we agreed to give them our business. They handled all the claim/adjuster interaction and paperwork. Damage to our house was repaired and roof replaced. Our assigned project manager, Brad, was in constant contact, walking us through the entire process, and ensuring the roofers, framer, and painter were all briefed on what needed to be done, and made sure we were satisfied with all the work.",
    topics: ["Insurance Claims", "Roof Replacement"],
  },
  {
    name: "Diane Lynch",
    when: "2 years ago",
    body: "I highly recommend Helsley Roofing Company. I had a roof leak… I called Helsley Roofing and Chris Hart came out within a couple of days. He got on the roof and told me where it was leaking and showed me photos. He actually used something to patch it right then and said it might hold, but I said I would rather go ahead and fix it all the way and not worry about it anymore. A few days later they came out and fixed it and that was that. They were extremely professional and very nice and no more leaking.",
    topics: ["Roof Leak Repair"],
  },
  {
    name: "Sarah Blanks",
    when: "3 years ago",
    body: "Helsley Roofing took care of everything after the 5/19/2023 Hailstorm. My roof looks great, they replaced my damaged gutters, and restrained my fence. Everything was explained before the work was done and when I had questions they called back quickly. This was an excellent customer experience, I strongly recommend Helsley Roofing.",
    topics: ["Storm Damage", "Gutters"],
  },
  {
    name: "Steve Meyer",
    when: "3 years ago",
    body: "We have a large and very steep roof. Alan and his team did a great job, protected our gutters and all our landscaping, amazing! Alan also helped work with our insurance company to cover the roof replacement. I referred a friend and he did an excellent job there as well. Highly recommended!",
    topics: ["Roof Replacement", "Referral"],
  },
  {
    name: "Matt Malik",
    when: "3 years ago",
    body: "I cannot say enough good things about Helsley Roofing Company… His crews have been excellent to deal with, on time, and courteous with amazing workmanship with the best materials. He has been prompt to return phone calls or texts and he even took into account my wife's work schedule (as she works from home) to produce as little noise as possible. This entire process has been stress free due to Alan and his crews.",
    topics: ["Storm Damage", "Craftsmanship"],
  },
  {
    name: "Marie Drabek",
    when: "3 years ago",
    body: "Helsley Roofing was so easy to work with. I moved out of Texas a year ago and am renting my house. With the storms that came through I needed some repairs done to my roof. They were extremely responsive and the communication was excellent. My roofing repair was stress free from halfway across the US. Highly recommend!",
    topics: ["Roof Repair"],
  },
  {
    name: "Chris Fetrow",
    when: "5 years ago",
    body: "The team at Helsley Roofing have been great to work with! Over the years we had them perform a minor repair and at another time a complete roof and gutter replacement. They are very professional in their contact, great clean up of the job site, and prompt quick service and installation.",
    topics: ["Gutters", "Roof Replacement"],
  },
  {
    name: "Clark Nethers",
    when: "5 years ago",
    body: "All Helsley personnel were very responsive and worked with us through all phases of the project from ACC approval, install and clean up. I was amazed that if I had not known they had been there there was not a single piece of evidence they had been. The project manager, Chris Hart, gave us exceptional service with regular updates and answered all of our questions.",
    topics: ["Craftsmanship"],
  },
  {
    name: "Kay Serafin",
    when: "5 years ago",
    body: "Helsley Roofing is a wonderful company to be associated with - they are prompt, thorough and not expensive. The owner of the company came to my house, viewed my issue with a gutter downspout that I wanted moved, and within a couple days one of the repairmen came, fixed the problem and it was completed. I have been dealing with this company for two separate roof replacements and I would go nowhere else.",
    topics: ["Gutters"],
  },
  {
    name: "David F",
    when: "6 years ago",
    body: "Very responsive and professional. Top quality work at fair and reasonable prices. Helsley Roofing Co. replaced my roof 10 years ago and it has held up extremely well. I was so satisfied with their work that I have relied on them ever since for additional maintenance and repairs… They always listen carefully, are highly responsive to my needs and stand by the quality of their work.",
    topics: ["Repeat Customer", "Roof Repair"],
  },
  {
    name: "Cyndi Taylor",
    when: "5 years ago",
    body: "We have used Helsley Roofing since 1997. Their work is top quality and I highly recommend this company.",
    topics: ["Repeat Customer"],
  },
  {
    name: "Randy Martin",
    when: "7 years ago",
    body: "Helsley Roofing is the best. We have a flat roof which many companies scratch their head over... Not Alan and his team. They did an amazing job, complete professionals, quality workmanship. We're happy Helsley customers.",
    topics: ["Flat Roofing"],
  },
  {
    name: "Rick Newbern",
    when: "8 years ago",
    body: "Alan, the crews, the supervisors, and the ladies in the office are a \u201cvery well oiled machine\u201d as the saying goes. Alan has great attention to detail, gives the homeowner good suggestions and advice, and is very professional in working with the homeowner… This is our second Helsley roof, and we will be a Helsley customer for our next roof.",
    topics: ["Repeat Customer"],
  },
  {
    name: "Robert Hicks",
    when: "5 years ago",
    body: "Having been a customer of Helsley Roofing for 3 decades or longer I continue to return. Alan Helsley is knowledgeable, fair, honest with integrity to boot. How can you not rate 5 stars. The employees follow the mold of the leader. Excellent work and followup.",
    topics: ["Repeat Customer"],
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);

export const reviewTopics = Array.from(
  new Set(reviews.flatMap((r) => r.topics)),
).sort();
