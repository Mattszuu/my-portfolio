const CONFIG = {
  name: "Christian Matthew Untalan",
  title: "Software Developer | Software Tester",
  description:
    "Experienced in building responsive web applications with React, Next.js, and MySQL. Skilled in software testing from hands-on internship experience, and UI/UX design using Figma.",
  about:
    "I’m a passionate software developer with hands-on experience in React, Next.js, and software testing. During my internship, I contributed to real-world projects, performing both functional testing and design implementation using Figma. I enjoy transforming ideas into practical, user-friendly solutions and I’m always eager to learn, improve, and take on new challenges.",
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
        description: "My personal portfolio built with React and TailwindCSS.",
        images: ["projects/my-Portfolio.png"],
        github: "https://github.com/Mattszuu/my-portfolio",
        contribution: "UI + responsive layout, dark mode, deployment",
        tools: "React, Tailwind, Vite",
      },
      {
        id: 2,
        title: "Rent Management System",
        description:
          "A real estate web application with landlord–tenant features, property management, and an integrated billing system.",
        images: [
          "projects/rent-1.png",
          "projects/rent-2.png",
          "projects/rent-3.png",
          "projects/rent-4.png",
        ],
        github: "https://github.com/BryLim-AI/rentAlley_web",
        contribution:
          "Designed and developed UI/UX with a responsive layout, implemented selected APIs, integrated SHA-256 hashing for secure data handling, and applied strong debugging skills. Learned extensively about full-stack development through this thesis project.",
        tools: "React, Tailwind, Next.js, JavaScript, Node.js",
      },
      {
        id: 3,
        title: "TicTacToe Mobile Game",
        description:
          "A simple mobile game developed as a school project using Kotlin.",
        github: "https://github.com/leocabibihan-school-account/TicTacToe",
        contribution:
          "Built the core game logic (win/draw detection, turn switching), designed the basic UI, and added interactivity for a smooth player experience.",
        tools: "Kotlin",
      },
    ],
    qa: [
      {
        id: 11,
        title: "Flower Shop Website (OJT)",
        description:
          "A subscription-based flower shop website that delivers fresh flowers weekly to customers. Features include product browsing, subscription management, and free delivery.",
        images: [
          "projects/flower-1.png",
          "projects/flower-2.png",
          "projects/flower-3.png",
        ],
        contribution:
          "Performed thorough manual testing across the website, including functional flows, usability, and UI/UX checks.",
        tools: "Manual Testing, UI/UX Review",
      },
      {
        id: 12,
        title: "Vet System (OJT)",
        description:
          "A veterinary management system that automates business operations such as appointment booking, payment tracking, scheduling, inventory management, and customer records.",
        images: ["projects/pet-1.png", "projects/pet-2.png"],
        contribution:
          "Conducted manual testing for all system features, ensuring functionality, usability, and identifying UI/UX improvements.",
        tools: "Manual Testing",
      },
    ],
  },
  skills: [
  // Frontend
  "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Kotlin",
  
  // Backend
  "Node.js", "Express.js", "MySQL", "C#", "REST APIs",
  
  // Testing & QA
  "Manual Testing", "Functional Testing", "Regression Testing", "Bug Reporting", "UI/UX Review",
  
  // Tools & Design
  "Git", "GitHub", "Figma", "Postman", "VS Code"
],
};

export default CONFIG;
