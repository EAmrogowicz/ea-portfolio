export const marvelData = {
  overview: {
    title: "Marval Hero Search",
    subheader: "JavaScript, CSS, API, 2022",
    img: "https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    alt: "marvel - spider web with morning dew",
    text: "A marvel hero search application that allows a user to search for a marvel character. Page features dynamically updated HTML and CSS.",
    gitHub: "https://github.com/ExxtremeBattler/fantastic-four-marvel-search",
    preview: "https://exxtremebattler.github.io/fantastic-four-marvel-search/",
  },

  summary: {
    heading: "EXPLORE THE APP",
    text: [
      "Application uses the Marvel API to retrieve comic and creator data for characters. Application also uses the Superhero API to work fetch nickname, full name, alignment, first appearance, and group affiliation.",
      "Upon opening the website, random comic and character information will be displayed by default.",
    ],
  },

  role: {
    role: "In my position, I took charge of supervising the visual design of the product, and the existing visual style is a direct result of the foundational work I laid down. My duties included:",
    roleList: [
      "Strategising UX activities and promoting UX best practices within the team;",
      "Creating a unified visual language and design system;",
      "Leading the team to ensure a unified design approach and on-time delivery, which involved reviewing and approving team code and addressing any bugs.",
    ],
    challenges:
      "Prioritizing the most crucial aspect of the app, which was the search bar, was imperative to maintain an uncompromised user experience. Efficient time and team management played a pivotal role in ensuring its timely delivery. Additionally, I had to navigate the complexities of various APIs, which involved registering for an API key with a limit of 3000 calls per day. Nonetheless, working with a three-person team enabled us to establish a more efficient process, resulting in significant improvements in the end product.",
    challengesList: [],
    learnings:
      "Based on my role and upon reflecting on all the challenges, three key takeaways have emerged: ",
    learningsList: [
      "Establishing a robust design style right from the start proved to be a time-saving gem. It not only streamlined our development process but also ensured consistency and efficiency in our work;",
      "The team task sheet emerged as a critical tool in maintaining accountability among team members. It ensured that everyone knew their responsibilities, which was instrumental in meeting project milestones;",
      "Daily code reviews were a game-changer. They not only improved the usability of our product but also allowed us to address errors promptly, preventing them from snowballing into larger issues. This practice enhanced the overall quality of our work and made for a smoother development experience.",
    ],
  },

  process: {
    heading: "PROCESS",
    text: [
      "As a team of three, our journey began with delineating the fundamental app requirements, sketching an initial wireframe, and crafting a unified ecosystem vision. These foundational elements served as our guiding principles, and my role encompassed overseeing the concept design throughout the web application development process.",
    ],
  },

  imageList: [
    {
      img: process.env.PUBLIC_URL + "/projectMarvel/initialSketches.jpg",
      title: "initial sketches",
      rows: 2,
      cols: 2,
    },
    {
      img: process.env.PUBLIC_URL + "/projectMarvel/Moodboard.png",
      title: "Minimal colour pallete",
    },
    {
      img: process.env.PUBLIC_URL + "/projectMarvel/websiteinspo.png",
      title: "Inspiration - Look & Feel",
    },

    {
      img: process.env.PUBLIC_URL + "/projectNichi/stylesGrid.png",
      title: "Figma - Design Styles Grid & Spacing",
    },
  ],

  result: {
    heading: "RESULT",
    img: process.env.PUBLIC_URL + "/projectMarvel/screenshot.png",
    alt: "app dashboard screenshot ",
    text: [
      "Concluding our website design and development journey, we've embraced a minimalist aesthetic with a sleek dark mode. Placing the search bar at the forefront was a deliberate choice to enhance user experience. Throughout our journey, we conquered proxy and APIs limitations.",
      "As our processes matured and unfolded, our core objective remained unwavering: simplifying the end-to-end user experience. We executed multiple rounds of user testing, meticulously mapping various components to optimize daily app functionality and usability.",
    ],
  },
};
