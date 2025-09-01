const CONFIG = {
  name: "Christian Matthew Untalan",
  title: "Full-Stack Web Developer & QA Tester",
  description:
    "Experienced in building responsive web applications with React, Next.js, and MySQL. Skilled in software testing from hands-on internship experience, and UI/UX design using Figma.",
  about:
    "I’m a passionate software developer with experience in React, Next.js, and software testing. I’ve also worked on real Figma design projects during my internship, and I enjoy turning ideas into practical solutions. I’m always eager to learn and take on new challenges.",
  socials: {
    github: "https://github.com/Mattszuu",
    linkedin: "https://www.linkedin.com/in/christianmatthewuntalan/",
    Instagram: "https://www.instagram.com/mattszuu/",
  },
  projects: {
    dev: [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio built with React and Tailwind.",
        images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
        github: "https://github.com/yourusername/portfolio",
        link: "https://yourdomain.com",
        contribution: "UI + responsive layout, dark mode, deployment",
        tools: "React, Tailwind, Vite",
      },
      // ...
    ],
    qa: [
      {
        id: 11,
        title: "E-commerce QA (OJT)",
        description: "Functional and regression testing on payment flows.",
        images: ["/projects/qa-1.png"],
        github: "https://github.com/yourusername/qa-reports", // optional (e.g., anonymized reports)
        link: "#",
        contribution: "Created testcases, reported and tracked bugs in Jira",
        tools: "Jira, Selenium, TestRail",
      },
    ],
  },
  skills: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
};

export default CONFIG;
