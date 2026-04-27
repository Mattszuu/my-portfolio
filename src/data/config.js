const CONFIG = {
  name: "Christian Matthew Untalan",
  title: "Frontend Developer & QA Analyst",
  tagline: "Frontend developer and QA analyst from Manila",
  email: "Mattuntalan2@gmail.com",
  phone: "09199928818",
  location: "Manila, Philippines",
  description:
    "Information Systems graduate with experience building UpKyp — a property management SaaS for Filipino landlords. Background in React, Next.js, manual testing, and UI/UX design.",
  about:
    "I'm an Information Systems graduate from De La Salle-College of Saint Benilde. I led the frontend development of UpKyp, a property management SaaS for Filipino landlords, using React, Next.js, TypeScript, and Tailwind CSS — taking the product from a school thesis to an SEC-registered startup. My background also includes a QA Analyst and UI/UX Designer internship at Chimes Consulting, where I gained hands-on experience in manual testing, bug documentation, and Figma-based design.",
  socials: {
    github: "https://github.com/Mattszuu",
    linkedin: "https://www.linkedin.com/in/christianmatthewuntalan/",
    Instagram: "https://www.instagram.com/mattszuu/",
  },

  resumes: [
    {
      label: "Generic Resume",
      description: "Frontend & full-stack focus",
      file: "Christian_Untalan_Resume.pdf",
    },
    {
      label: "QA Resume",
      description: "Quality Assurance focus",
      file: "Christian_Untalan_QA_Resume.pdf",
    },
  ],

  workExperience: [
    {
      title: "Quality Assurance Analyst (Internship)",
      company: "Chimes Consulting",
      location: "Manila, Philippines",
      period: "Jan 2024 — Apr 2024",
      responsibilities: [
        "Performed manual functional and UI testing on web applications, identifying and documenting bugs and inconsistencies to support development teams",
        "Designed and executed test cases covering functional and regression scenarios, ensuring product quality prior to release",
        "Maintained website content and UI through WordPress CMS, and reported findings directly to developers in team meetings",
      ],
    },
    {
      title: "UI/UX Designer (Internship)",
      company: "Chimes Consulting",
      location: "Manila, Philippines",
      period: "Jan 2024 — Apr 2024",
      responsibilities: [
        "Designed high-fidelity wireframes and interactive prototypes in Figma for web and mobile apps, ensuring intuitive user flows and developer handoff readiness",
        "Led a team of interns on a UI/UX project, presenting design work to stakeholders and collaborating with developers during implementation",
      ],
    },
  ],

  education: [
    {
      school: "De La Salle-College of Saint Benilde",
      degree: "Bachelor of Science in Information Systems",
      period: "Sep 2020 — Apr 2025",
      gpa: "3.1",
      awards: [
        "Specialized in Information Security",
        "Dean's List for 3 Consecutive Terms",
        "Plaque of Recognition",
      ],
    },
    {
      school: "La Marea Academy",
      degree: "Elementary — Senior High",
      period: "Jan 2007 — Jan 2020",
    },
  ],

  certificates: [
    {
      title: "Cypress UI Automation Testing for Absolute Beginners",
      issuer: "Coursera",
      date: "Nov 2025",
    },
    {
      title: "Foundations of Software Testing and Validation",
      issuer: "University of Leeds",
      date: "Nov 2025",
    },
    {
      title: "Introduction to Software Development",
      issuer: "Amazon",
      date: "Nov 2025",
    },
    {
      title: "Capture The Flag — Training and Hackathon",
      issuer: "De La Salle-College of Saint Benilde",
      date: "Jul 2023",
    },
    {
      title: "Strategic Marketing",
      issuer: "Chimes Consulting",
      date: "Mar 2023",
    },
  ],

  projects: {
    dev: [
      {
        id: 1,
        title: "UpKyp",
        subtitle: "Property Management SaaS",
        description:
          "A full-featured property management platform built for Filipino landlords. Includes landlord and tenant portals, billing with Xendit integration, maintenance kanban, booking calendar, and tenant screening.",
        images: [
          "projects/splashscreen.png",
          "projects/units.png",
          "projects/unitsMap.png",
          "projects/dashboard.png",
          "projects/manage.png",
          "projects/tenantProfile.png",
          "projects/payment.png",
        ],
        contribution:
          "Built the entire frontend independently using React, Next.js, TypeScript, and Tailwind CSS. Developed CRUD functionality via Next.js API routes, implemented a guided onboarding system across 80+ steps with Driver.js, and handled all UI/UX design. Took the project from a school thesis to an SEC-registered startup.",
        tools:
          "React, Next.js, TypeScript, Tailwind CSS, Node.js, Framer Motion",
        year: "2025",
      },
      {
        id: 2,
        title: "Portfolio",
        subtitle: "Personal Website",
        description:
          "My personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
        images: ["projects/my-Portfolio.png"],
        github: "https://github.com/Mattszuu/my-portfolio",
        link: "https://mattszuu.github.io/my-portfolio/",
        contribution:
          "Designed and developed the entire portfolio website with responsive layout, dark mode support, and smooth animations. Implemented modern UI/UX principles and deployed to GitHub Pages.",
        tools: "React, Tailwind CSS, Vite, GitHub Pages",
        year: "2025",
      },
      {
        id: 3,
        title: "TicTacToe",
        subtitle: "Mobile Game",
        description:
          "A simple mobile game developed as a school project using Kotlin for Android development.",
        github: "https://github.com/leocabibihan-school-account/TicTacToe",
        contribution:
          "Built the core game logic including win/draw detection and turn switching, designed the basic UI, and added interactivity for a smooth player experience.",
        tools: "Kotlin, Android Studio",
        year: "2023",
      },
    ],
    qa: [
      {
        id: 11,
        title: "Flower Shop Website",
        subtitle: "Internship Project",
        description:
          "A subscription-based flower shop website that delivers fresh flowers weekly. Features include product browsing, subscription management, and free delivery.",
        images: [
          "projects/flower-1.png",
          "projects/flower-2.png",
          "projects/flower-3.png",
        ],
        contribution:
          "Performed thorough manual testing across the website, including functional flows, usability, and UI/UX checks. Created detailed test cases, identified bugs, and documented findings to ensure a smooth user experience.",
        tools: "Manual Testing, Test Case Documentation, UI/UX Review",
        year: "2024",
      },
      {
        id: 12,
        title: "Vet System",
        subtitle: "Internship Project",
        description:
          "A veterinary management system that automates business operations such as appointment booking, payment tracking, scheduling, inventory, and customer records.",
        images: ["projects/pet-1.png", "projects/pet-2.png"],
        contribution:
          "Conducted comprehensive manual testing for all system features, ensuring functionality, usability, and identifying UI/UX improvements. Documented test results and collaborated with developers to resolve issues.",
        tools: "Manual Testing, Functional Testing, Bug Reporting",
        year: "2024",
      },
    ],
  },

  skills: {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: ["Node.js", "REST APIs", "C# (Intermediate)"],
    Mobile: ["Kotlin (Basic)", "Java (Basic)", "Android Studio (Basic)"],
    Databases: ["MySQL", "Microsoft SQL Server"],
    "Testing & QA": [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Usability Testing",
      "Performance Testing",
      "Test Case Documentation",
      "Bug Reporting",
      "UAT",
      "Cypress",
      "Selenium",
      "JMeter",
    ],
    Tools: ["Git", "GitHub", "Figma", "Postman", "VS Code", "WordPress"],
  },

  languages: [
    { name: "English", level: "Professional" },
    { name: "Tagalog", level: "Native" },
  ],
};

export default CONFIG;
