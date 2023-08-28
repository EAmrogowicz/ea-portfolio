export const portfolioData = {
  overview: {
    title: "UX/UI Portfolio",
    subheader: "React, 2023",
    img: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "my portfolio - old typing maschine on wooden table",
    text: "Shaping my React portfolio, I harnessed minor tweaks for major impact, showcasing the potential of subtle changes.",
    gitHub: "https://github.com/EAmrogowicz/ea-portfolio",
    preview: "https://eamrogowicz.github.io/ea-portfolio/",
  },

  summary: {
    heading: "EXPLORE THE APP",
    text: [
      "A portfolio of work has been meticulously designed to showcase my skills and talents to potential employers. Employing advanced technologies like React, implementing seamless navigation with React Router, and adopting Material UI, an open-source React component library inspired by Google's Material Design, the portfolio presents a sleek and modern appearance.",
      "Discover how I've translated design principles into a functional, visually appealing experience that showcases my skills and talents.",
      "Portfolio contains a PDF version of my resume with up-to-date projects and professional experience.",
      "Each project has a link to the deployed version of the application and GitHub repository.",
    ],
  },

  role: {
    role: "At the heart of my role was design, and this project became a canvas for me to artistically express myself. Every pixel was meticulously crafted to embody my design abilities, resulting in an engaging user experience that undeniably sets itself apart.",
    roleList: [],
    challenges:
      "Creating the portfolio app presented the challenge of striking the right visual balance without complicating the underlying code unnecessarily. While the iterative prototyping process could be repetitive at times, it ultimately became a valuable tool in refining the code and enhancing the user experience, providing immense satisfaction in bringing my ideas to life.",
    challengesList: [],
    learnings:
      "Writing the portfolio application brought valuable insights of:",
    learningsList: [
      "Importance of seeking reference images and sketching out the desired outcomes on paper, a process that laid a solid foundation for visual design;",
      "Power of maximizing component functionality for efficient reuse, streamlining the development process;",
      "The iterative restructuring of the folder tree and the significance of maintaining a logical and straightforward project organization to enhance overall efficiency and clarity.",
    ],
  },

  process: {
    heading: "PROCESS",
    text: [
      "The development of the portfolio web app was rooted in a primary focus on the end-user experience. Throughout this journey, I realized that enhancing narrative elements was pivotal in communicating the story behind each design decision. This not only defined the design's purpose but also played a crucial role in defending the choices made, creating a richer and more engaging experience.",
    ],
  },

  imageList: [
    {
      img: process.env.PUBLIC_URL + "/projectPortfolio/sketch-wireframe.jpg",
      title: "Hand sketch of portfolio structure",
      rows: 4,
      cols: 2,
    },
    {
      img: process.env.PUBLIC_URL + "/projectPortfolio/sketch-card.jpg",
      title: "Hand sketch of project card structure",
      rows: 4,
      cols: 2,
    },
    // {
    //   img: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    //   title: "Photo of the phone to review the design principles",
    //   rows: 2,
    //   cols: 2,
    // },
  ],

  result: {
    heading: "RESULT",
    img: process.env.PUBLIC_URL + "/projectPortfolio/screenshot.png",
    alt: "app dashboard screenshot ",
    text: [
      "The final web portfolio achieves a perfect balance: fewer steps, controls, and options simplify the user experience, avoiding overwhelm, all while retaining all the essential features and capabilities for a seamless and enjoyable journey.",
      "Building and maintaining this cohesive experience, akin to a well-structured book, allows users to seamlessly move from one element to the next, with every visual cue reinforcing the sense of being in the same story. The consistent use of colors, fonts, and alignment keeps the audience focused on the plot, enhancing their overall experience.",
    ],
  },
};
