export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "eMart - eCommerce Platform",
    desc: "eMart is a feature-rich eCommerce platform built with the MERN stack (MongoDB, Express, React, Node.js) and Redux for state management. It offers a seamless shopping experience with features for both customers and administrators.",
    subdesc:
      "eMart combines the latest web technologies to deliver a robust and scalable online shopping platform, ensuring a smooth and enjoyable user experience.",
    href: "https://emart-5vf2.onrender.com/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/express.png",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/node.png",
      },
      {
        id: 5,
        name: "Redux",
        path: "/assets/redux.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "DoNext",
    pos: "Software Engineer Intern",
    duration: "2024 June - 2024 December",
    title: `Revolutionized user engagement for a Learning Management System (LMS) by crafting dynamic interfaces and seamless user experiences using Next.js, Prisma, and NextAuth. Spearheaded the design and functionality of key pages, from the homepage to the admin dashboard, leveraging Tailwind CSS, ShadCN, and Framer Motion to deliver excellence. Introduced a high-impact blog feature, uniting frontend brilliance with backend mastery to elevate platform reach and usability.`,
    icon: "/assets/nextjs.svg",
    animation: "clapping",
  },
  {
    id: 2,
    name: "DoNext",
    pos: "Software Engineer Intern",
    duration: "2024 June - 2024 December",
    title: `Engineered the onboarding journey for "My Universe," a React and Material UI-driven platform, by designing intuitive login, registration, and onboarding pages. Enhanced application security and user experience through implementing protected routes with React Context. Tackled critical bugs to ensure a flawless interface, setting new benchmarks for efficiency and functionality.`,
    icon: "/assets/react.svg",
    animation: "salute",
  },
];
