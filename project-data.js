const ARCHIVES = [
  {
    img: "https://i.ibb.co/bM6tRd9x/steliiaai-mockup.png",
    title: "StelliaAI",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    tag: "Graphic * Branding",
    category: "graphic",
    href: "https://www.behance.net/gallery/244059833/Brand-Identity-Landing-Page-StelliaAI?oid=9XyJIiVeEWFC8YUHs8Dafg",
    target: "_blank"
  },
  {
    img: "https://i.ibb.co/4w5yS17L/pantip-banner.png",
    title: "Pantip Redesign",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    tag: "UX/UI Design",
    category: "uxui",
    href: "https://www.behance.net/gallery/181536945/UXUI-Design-Pantip-Redesign?oid=bRcqiLXXA4yqGfj1pvJSDA",
    target: "_blank"
  },
  {
    img: "https://i.ibb.co/Z62XMxHF/activestate-banner.png",
    title: "Active State",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    tag: "UX/UI Design",
    category: "uxui",
    href: "https://www.behance.net/gallery/180667007/Thesis-UXUI-Design-Active-State?oid=V3DQRRs2ykWGnXZ8Eqhn4w",
    target: "_blank"
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/096/330/454/large/smolmeiji-fa-mello-r1999-03.webp?1770995011",
    title: "Reverse: 1999 Valentine",
    desc: "Promotional Illustration for Reverse:1999 Valentine 2026",
    tag: "Illustration",
    category: "illustration",
    href: "https://www.artstation.com/artwork/eRkalX",
    target: "_blank"
  },
];

const PROJECTS = [
  {
    slug: "unitmeet",
    title: "UnitMeet",
    desc: "a meeting room booking and management web application for tech consultant company's employees to easily reserve rooms for themselves or on behalf of clients.",
    tags: ["booking system", "dashboard"],
    hook: `The system should become part of <span style="color:#7962EA">employees' routine</span> instead of interrupting it.`,
    img: "https://i.ibb.co/WW5jfWdt/unitmeet-banner.png",

    featured: true,
    showcase: true,
    showcaseTags: ["booking system", "dashboard"],
    hasDetailPage: true,

    role: "UX/UI Designer",
    team: ["UX/UI Designer", "Frontend Developer"], // TODO: confirm — team wasn't in the old meta row, please edit
    industry: "Internal Enterprise Tools", // TODO: confirm — replaces the old "Context: Internal Project" field
    tools: "Figma",

    background: `
      <p>In a consulting company, meeting rooms are used daily for both internal discussions and client meetings across different teams. Because these spaces are shared by everyone, an efficient room booking system and clear navigation are essential to ensure smooth collaboration. The entire booking process is managed by the administrative team.</p><br>
      <p>However, the current system results in <span class="highlight">resource waste and frequent room conflicts.</span> Employees often reserve a meeting room for an hour but leave after only 30 minutes without updating their booking, causing the room to remain unavailable despite being empty. On the other hand, when meetings overrun their scheduled time, the next group is forced to find an alternative room at the last minute, creating unnecessary pressure for the admin team to coordinate replacements.</p><br>
      <p>This project redesigns the internal meeting room booking system to address these pain points. The goal is to <span class="highlight">improve room utilization,</span> reduce scheduling conflicts, and create a <span class="highlight">more seamless experience</span> for both employees and clients throughout their daily workflow.</p>
    `,

    concept: `
      <p>The core design concept is to integrate the booking system naturally <span class="highlight">blend into users daily workflow.</span> Instead of requiring additional effort or attention, the system should function as a seamless workplace tool, supporting the idea that "good design is obvious. great design is transparent."</p><br>
      <p>To support everyday meeting management, the redesign introduces features that accommodate real working behaviors, including extending an ongoing booking, canceling reservations, and scheduling recurring or multi-day bookings in advance. These features reduce repetitive administrative tasks while allowing users to adapt to changing schedules with minimal effort.
      A physical limitation of the workplace: meeting rooms do not have door locks or clear occupancy indicators, making it easy for employees to enter the wrong room and unintentionally interrupt ongoing meetings. To address this, the redesign includes a visual representation of the meeting area, helping users locate the correct room and improving spatial navigation within the office.</p>
    `,

    toggles: [
  {
    section: "concept",
    title: "User flow",
    content: [
      { tag: "h4", text: "Change or cancel subscription plan"},
      { tag: "p", text: "Users can select an existing subscription and either cancel it or change their plan. Both paths lead to a confirmation step before completing the action."},
      { tag: "img-grid", images: ["https://i.ibb.co/cSZZvHp0/unitmeet-book.png","https://i.ibb.co/HTLZGHS0/unitmeet-extend.png","https://i.ibb.co/BHq8H5LZ/unitmeet-admin.png"] }
      ]
  },
  {
    section: "concept",
    title: "Low fidelity Wireframe",
    content: [
      { tag: "h4", text: "Employee view & Admin view sketches"},
      { tag: "p", text: "A collection of early wireframe sketches and feature ideas explored during the initial concept phase of UnitMeet, including visuals of room floorplan, booking, navigation, and meeting management."},
      { tag: "img-grid", images: ["https://i.ibb.co/m5qbzP6z/unitmeet-wireframe.png"] }
      ]
  }
],

    audiences: [
      { title: "Employees", desc: "Book a room for themselves in a few taps, without needing to check with an admin first." },
      { title: "Team Admins", desc: "Manage room availability, resolve scheduling conflicts, and set booking rules for their department." },
      { title: "Clients &amp; Guests", desc: "Get hosted in a reserved room without needing an account, invited directly by the employee meeting them." }
    ],

    keyFeatures: [
      { h3: "Employee View", 
        h4: "Room Navigation Visualizer", 
        desc: "The home screen displays a floor plan of the meeting area with room numbers and real-time availability, allowing users to quickly identify vacant meeting rooms. Below the floor plan, today's bookings are displayed as a list with meeting title, date, time, and room number. Users can filter bookings by room to view its schedule and identify available time slots throughout the day.", 
        img: "img/unitmeet-mobile-home.gif", 
        imgClass: "img-9-16" },
      { h3: "Employee View", 
        h4: "Book a Meeting",
        desc: "Employees can start a new reservation from the floating action button. The booking flow guides users through selecting the meeting date, time, number of attendees, available room, and meeting details. Time selection is limited to consecutive hourly slots to prevent invalid booking durations and simplify scheduling.", 
        img: "img/unitmeet-mobile-book.gif", 
        imgClass: "img-9-16" },
      { h3: "Employee View", 
        h4: "Meeting Self-Extension Notification", 
        desc: "Fifteen minutes before a meeting ends, users will receive a reminder asking whether they would like to extend their reservation. If the room remains available, the booking can be extended by one hour, with a maximum of two extensions per meeting. This reduces interruptions while preventing indefinite room occupancy.", 
        img: "img/unitmeet-mobile-extend.gif", 
        imgClass: "img-9-16" },
      { h3: "Administrative View", 
        h4: "Admin Booking (Perfect Case)", 
        desc: "Administrators can create recurring reservations for meeting, similarly to employee view.", 
        img: "img/unitmeet-admin-perfect.gif", 
        imgClass: "" },
      { h3: "Administrative View", 
        h4: "Advance Admin Booking", 
        desc: "Administrators can create recurring or multi-day reservations for events that span multiple sessions. When error occurs, such as one of their selections being unavailable, the system will suggest alternative options.", 
        img: "img/unitmeet-admin-advance.gif", 
        imgClass: "" },
      { h3: "Client Monitor View", 
        h4: "Meeting Room Display", 
        desc: "A dedicated monitor displays the meeting area layout, room numbers, meeting information, and current availability.", 
        img: "img/unitmeet-monitor.gif", 
        imgClass: "" }
    ],

    reflection: [
      `This project taught me that designing a better interface alone does not solve workflow problems. Initially, I focused on improving the booking experience with features such as room visualization, booking extensions, and cancellation. However, reflecting on user behavior helped me realize that <span class="highlight">the real challenge wasn't booking a meeting room, it was helping employees navigate an unpredictable work environment.</span>`,
      `Meetings rarely end exactly on schedule, especially when clients are involved. Employees cannot simply follow rigid booking rules, and admins often become the middle person responsible for resolving conflicts manually. This shifted my perspective from designing around ideal user behavior to designing around real workplace conditions. Instead of expecting users to adapt to the system, the system should adapt to changing schedules while minimizing interruptions.`,
      `The research also reminded me to question my own assumptions. I <span class="highlight">expected</span> the <span class="highlight">floor plan to significantly improve navigation</span> for both employees and clients, but usability testing revealed that employees already knew the office layout, while many <span class="highlight">clients overlooked room labels altogether</span>. This reinforced the importance of validating design decisions with users rather than relying solely on intuition.`,
      `If I were to continue this project, I would further explore ways to reduce decision-making during the booking process, such as recommending available rooms and time slots instead of asking users to search manually. I would also investigate opportunities to automate conflict resolution and room availability updates, allowing the system to proactively support users instead of relying on manual coordination.`,
      `Overall, this project strengthened my understanding that good UX is not about adding more features, it is about reducing friction, supporting real user behavior, and creating tools that integrate naturally into everyday work.`
    ]
  },

  {
    slug: "collectr",
    title: "Collectr",
    desc: "A marketplace and cataloging tool for collectors to track, value, and trade items within a trusted community.",
    tags: ["web3 art curation" ,"payment"],
    img: "https://i.ibb.co/BHnSC3Zs/collectr-banner.png",

    featured: true,
    showcase: true,
    showcaseTags: ["web3 art curation", "payment"],
    hasDetailPage: true,

    role: "UX/UI Designer",
    team: ["UX/UI Designer", "Frontend Developer"], // TODO: confirm — team wasn't in the old meta row, please edit
    industry: "Internal Enterprise Tools", // TODO: confirm — replaces the old "Context: Internal Project" field
    tools: "Figma",

    background: `
    <p>In the fast-paced Web3 ecosystem, NFT markets have long been driven by speculative behaviors such as quick buying and reselling, commonly known as flipping. Alongside this trend, however, a growing community of "collector", people who value discovering digital art, supporting artists, and building meaningful collections rather than chasing short-term profits.</p>
    <p>As both an artist and an active participant in the Web3 art community, I witnessed this shift firsthand. While speculation often dominated the conversation, many collectors were looking for something different: a slower, more intentional way to discover artists and support their creative journey.</p>
    `,

    concept: `
    <p>The core design philosophy is to transform NFT collecting from a short-term, profit-driven activity into a thoughtful and sustainable collecting journey. Rather than encouraging users to react to market trends, the platform helps collectors discover artists they genuinely connect with, appreciate their creative work, and build meaningful collections over time.</p>
    <p>The experience is designed for collectors who value aesthetics, creativity, and supporting artists over chasing financial returns. By aligning with their motivations and collecting behaviors, the design aims to reduce pressure, improve artist discovery, and foster lasting relationships between artists and collectors.</p>
    `,

    toggles: [
  {
    section: "concept",
    title: "User Flows",
    content: [
      { tag: "h4", text: "payment checkout"},
      { tag: "p", text: "this flow outlines the payment process and key interactions required to communicate with the backend, ensuring secure transactions and real-time confirmation." },
      { tag: "img-grid", images: ["https://i.ibb.co/0y0B4Tm4/collectr-flow-checkout.png"]}
    ]
  }
],

    audiences: [
      { title: "Web3 Art Collectors", desc: "Individuals who enjoy discovering digital artists, collecting artwork they genuinely appreciate, and supporting creators through intentional, long-term collecting rather than short-term speculation." },
      { title: "Web3 Artists", desc: "Featured creators who release curated monthly collections. Their goal is to reach collectors who value their creative work, build lasting relationships with supporters, and gain consistent exposure within the community." },    ],

    keyFeatures: [
      { h4: "Monthly Curated Editions", 
        desc: "A dedicated page for each monthly featured artist, showcasing the artwork, artist profile, artwork and collaboration details, number of collected editions, and a streamlined Collect flow. This creates a focused space for collectors to discover and support artists without the pressure of limited-time drops.", 
        img: "img/collectr-edition-page.gif", 
        imgClass: "" },
      { h4: "Flexible Payment Options",
        desc: "Support both cryptocurrency and credit card payments, allowing experienced Web3 users and newcomers alike to purchase artwork through a familiar and accessible checkout experience.", 
        img: "img/collectr-payment-flow.gif", 
        imgClass: "" },
      { h4: "Edition Archive", 
        desc: "An edition gallery of all previously featured monthly editions, enabling collectors to revisit past artists, explore their stories, and view collection statistics. Extending artist discovery beyond the current released one.", 
        img: "img/collectr-gallery-page.gif", 
        imgClass: "" }
    ],

    reflection: [`
      <p>Working on Collectr changed the way I think about product design in emerging technologies. At first, I saw the project as designing an NFT platform, but through research and conversations with artists and collectors, I realized the real challenge wasn't the technology—it was the experience surrounding it.</p>
      <p>As an active member of the Web3 art community, I observed that alongside a large culture of speculative trading, there was also a growing group of collectors who were motivated by discovering artists, appreciating digital art, and supporting creators rather than pursuing financial returns. However, market speculation often overshadowed these motivations, making collecting feel rushed and stressful instead of intentional and enjoyable.</p>
      <p>This project taught me that product design is not always about encouraging more transactions. Sometimes, it is about creating an environment where users feel comfortable making thoughtful decisions. Although my contribution focused on the monthly edition showcase, payment flow, and edition archive, the project reinforced the importance of designing for long-term relationships rather than short-term engagement.</p>
      <p>Looking back, I would further explore features that strengthen the relationship between artists and collectors, such as allowing collectors to recommend artists for future curation, planning future collections, or reward for participations. I believe these ideas would further support intentional collecting while fostering a healthier and more sustainable creator ecosystem.</p>`
    ]
  },

  {
    slug: "subster",
    title: "Subster",
    desc: "An app that helps users manage and track their online subscriptions — supporting buying, pausing, canceling, renewing, and changing plans, plus notifications when subscription terms or conditions change.",
    tags: ["subscription management", "casestudy"],
    img: "https://i.ibb.co/v480wCPh/subster-banner.png",

    featured: true,
    showcase: true,
    showcaseTags: ["subscription management", "casestudy"],
    hasDetailPage: true,

    role: "UX/UI Designer",
    team: ["solo"],
    industry: "Finance Tool",
    tools: "Figma",

    background:`
        <p>Managing multiple online subscriptions has become a quiet financial burden for many users. People often forget to cancel services they no longer use, get hit by unannounced auto-renewals, and struggle with cancellation flows that are deliberately made complex.</p>
        <p>From user insights, one study found 46% of people underestimate their subscription spend by more than $200/month, and a survey found 42% of consumers forgot they were still paying for a subscription they no longer used, often after being lured in by a free trial.</p>
        <p>This project set out to design a single place where users could see, control, and adjust every subscription they hold — without the friction currently built into most cancellation processes.</p>
        `,

    concept:`
        <p>The core design concept centers on <span class="highlight">making cancellation and plan changes as easy as subscribing in the first place.</span> Many services intentionally make it hard to leave — burying the cancel button, requiring a support call, or hiding it behind multiple settings screens. Subster flips that relationship, treating "easy to leave" as a core feature rather than a risk.</p><br>
        <p>Research showed that forgetfulness, rather than dissatisfaction, was the main reason users wasted money on subscriptions. To address this, the app reduces the need for users to remember billing dates or regularly check their subscriptions. It automatically organizes all subscriptions in one place, provides reminders before payments, and notifies users when their plan terms change. This makes it easier to keep track of subscriptions and avoid unnecessary spending.</p>
  `,

    toggles: [
  {
    section: "background",
    title: "Quantitative & Quanlitative Research",
    content: [
      { tag: "h4", text: "Data Analysis" },
      { tag: "p", text: "People do not fully aware of how much they spend on subscriptions. A study found that 46% of respondents underestimating their subscription costs by more than $200 per month. A survey found that 42% of consumers forgot they are still paying for a subscription they no longer use. It often happens after get enticed by a free trial of monthly subscription which leads them to forget about it. Certain businesses use strategy to maintain the continuous generation of revenue from customer by create obstacles when customers attempt to cancel their subscriptions."},
      { tag: "h4", text: "User Survey" },
      { tag: "p", text: "Conducted an online survey among 11 subscription users aged from 16 - 26 years old to learn about their usage of subscription. The interviews explored participants' current subscription services, their motivations and usage patterns, perceptions of pricing and value, available alternatives, pain points, and attitudes toward automatic renewals, including whether they found renewal notifications helpful or problematic. The result is that 5 of them states thatt they use their subscriptions services everyday. All participants had at least one subscription service in the entertainment category. 7 of them mentioned experience with unexpected auto renewal and wanted a way to prevent unexpected renewals or receive reminders in advance."},
      { tag: "img-grid", images: ["https://i.ibb.co/Swt2m5Pn/subster-finding1.png", "https://i.ibb.co/x8XskvzH/subster-finding2.png"]}
    ]
  },
  {
    section: "concept",
    title: "User Journey & User flow",
    content: [
      { tag: "h4", text: "As is & To be"},
      { tag: "p", text: "The challenge is to help users stay on top of their subscriptions and important actions, such as upcoming renewals, without adding complexity to the management process. To understand the impact of the redesign, I mapped the As-Is and To-Be journeys for changing a subscription plan. The comparison highlights where users experience friction in the current process where the service may guide users to multiple step of subscription cancellation and how the redesigned flow reduces unnecessary steps while keeping users informed and in control throughout the process." },
      { tag: "h4", text: "Change or cancel subscription plan"},
      { tag: "p", text: "Users can select an existing subscription and either cancel it or change their plan. Both paths lead to a confirmation step before completing the action."},
      { tag: "img-grid", images: ["https://i.ibb.co/xS911tNR/subster-uj1.png","https://i.ibb.co/5WNbMVvn/subster-uj2.png","https://i.ibb.co/wZybprXL/subster-flow-managesub.png"] }
      ]
  },
  {
    section: "concept",
    title: "Sitemap",
    content: [
      { tag: "h4", text: "overview"},
      { tag: "p", text: "A structured overview of Subster's key pages, sections, and primary actions, showing how the app's content and navigation are organized."},
      { tag: "img-grid", images: ["https://i.ibb.co/8LzqrhnR/subster-sitemap.png"]}
    ]
  }
],

    audiences: [
        { title: "Individual Subscribers", desc: "People who pay for multiple recurring services and want to see their subscriptions, billing dates, and spending in one place."},
        { title: "Budget-conscious Users", desc: "People who want to understand how much they spend on subscriptions and avoid unnecessary or forgotten recurring payments."},
        { title: "Subscription-heavy Users", desc: "People managing many services across entertainment, software, shopping, fitness, or other categories who need a centralized overview."},
    ],

    keyFeatures: [
        { h3: "Change Subscription Plan",
          desc:"Users can view all their subscriptions in one place, including the service, price, next billing date, status, and current plan details. From there, they can manage their subscription by switching plans, pausing, or unsubscribing. When changing plans, users can compare available options, review prices and plan details, select their preferred plan, and confirm the payment method before completing the change. A confirmation message is shown once the new plan has been successfully applied.",
          img: "img/subster-changeplan.gif",
          imgClass: "img-9-16",
        },
    ],

  designSystem: [
  { img: "https://i.ibb.co/C31fymtL/subster-ds.png" },
  ],

    reflection: [
        `This project taught me that the real problem behind subscription overspending wasn't a lack of willpower, it was <span class="highlight">a lack of visibility.</span> Going in, I assumed users needed better cancellation tools. However, the research pointed to an earlier problem: people weren't intentionally choosing to keep paying for services they no longer used. They simply forgot those subscriptions existed until the next payment was taken.`,
        `After completing the design, I let some of my previous interviewees try the prototype. They responded positively to the cancellation feature, but some also asked about managing shared subscriptions with family or friends. This highlighted an area I had not explored deeply during the project. If I were to continue the project, I would investigate how people currently manage shared subscriptions and whether this could be incorporated into the experience.`
    ],
  }
];