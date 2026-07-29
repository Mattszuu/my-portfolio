const CONFIG = {
  name: "Christian Matthew Untalan",
  title: "Junior Systems Engineer",
  tagline:
    "Junior Systems Engineer at Solvento Philippines — cloud infrastructure, Linux, and monitoring — with a frontend developer's eye for how systems should feel.",
  email: "Mattuntalan2@gmail.com",
  phone: "09199928818",
  location: "Manila, Philippines",
  company: "Solvento Philippines, Inc.",
  startDate: "2026-07-20",
  description:
    "Junior Systems Engineer at Solvento Philippines, Inc. working across AWS, Linux (RHEL), Windows Server, and ITRS Geneos monitoring. Formerly a frontend developer who built and shipped UpKyp, a property management SaaS for Filipino landlords.",
  about: [
    "I'm a Junior Systems Engineer at Solvento Philippines, Inc., where I work on cloud and on-prem infrastructure — provisioning Linux (RHEL) environments, configuring ITRS Geneos monitoring, and supporting systems across AWS, Windows Server, and Active Directory.",
    "I got here by an unusual route. I studied Information Systems at De La Salle-College of Saint Benilde, then spent two years in frontend: I built the entire frontend of UpKyp, a property management SaaS for Filipino landlords, and took it from a school thesis to an SEC-registered startup. In 2026 I completed Solvento's Technology Infrastructure Bootcamp — an intensive program covering servers and virtualization, networking, databases (Oracle 19c, SQL Server), cloud (AWS/Azure), and Linux systems administration — and was hired at the end of it.",
    "That mix is the point. I understand infrastructure from the inside, and I understand the products that run on it — how an unmonitored server becomes a broken checkout page. I bring both halves to the work.",
  ],
  socials: {
    github: "https://github.com/Mattszuu",
    linkedin: "https://www.linkedin.com/in/christianmatthewuntalan/",
    instagram: "https://www.instagram.com/mattszuu/",
  },

  resumes: [
    {
      label: "Resume",
      description: "Systems engineering & full-stack",
      file: "Christian_Untalan_Resume.pdf",
    },
    {
      label: "QA Resume",
      description: "Quality assurance focus",
      file: "Christian_Untalan_QA_Resume.pdf",
    },
  ],

  workExperience: [
    {
      title: "Junior Systems Engineer",
      company: "Solvento Philippines, Inc.",
      location: "Manila, Philippines",
      period: "Jul 2026 — Present",
      current: true,
      responsibilities: [
        "Provision and administer Linux (RHEL/CentOS) virtual machines, including networking, user management, and firewall configuration",
        "Install and configure ITRS Geneos monitoring components (Gateway and Netprobe) on Linux environments, working from and improving internal runbooks",
        "Support infrastructure operations across AWS, Windows Server, and Active Directory environments",
      ],
    },
    {
      title: "System Engineer Trainee — Technology Infrastructure Bootcamp",
      company: "Solvento Philippines, Inc.",
      location: "Manila, Philippines",
      period: "May 2026 — Jul 2026",
      responsibilities: [
        "Completed an intensive hands-on program covering servers and virtualization, networking, databases, cloud, and Linux systems administration (RHEL)",
        "Hands-on labs: RHEL administration, Windows Server 2019 + Active Directory, Oracle Database 19c, SQL Server backup/recovery and security, Cisco networking (VLANs, inter-VLAN routing, EtherChannel), AWS (EC2, EBS, VPC, RDS, IAM, S3), and ITRS Geneos",
        "Capstone: designed a full AWS migration architecture for Park Wan Ji Hospitality Group",
        "Hired as Junior Systems Engineer upon completion",
      ],
    },
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
      title: "Technology Infrastructure Bootcamp",
      issuer: "Solvento Philippines, Inc.",
      date: "Jul 2026",
    },
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
    infra: [
      {
        id: 21,
        title: "AWS Migration Architecture",
        subtitle: "Bootcamp Capstone — Park Wan Ji Hospitality Group",
        description:
          "A full cloud migration design for a hospitality group moving from on-premises infrastructure to AWS — covering compute, networking, storage, database, identity, and cost considerations.",
        contribution:
          "Designed the end-to-end target architecture: VPC and subnet layout, EC2 sizing, RDS for the database tier, S3 for storage, IAM roles and policies for least-privilege access, and a phased migration plan. Presented the design as the capstone of Solvento's Technology Infrastructure Bootcamp.",
        tools: "AWS (EC2, VPC, RDS, S3, IAM, EBS), Architecture Design",
        year: "2026",
      },
      {
        id: 22,
        title: "ITRS Geneos Monitoring Setup",
        subtitle: "Linux Monitoring Environment",
        description:
          "An end-to-end Geneos monitoring environment on a Linux VM — Gateway and Netprobe installation, configuration, and connection to the Active Console.",
        images: [
          "ITRS.png"
        ],
          contribution:
          "Provisioned a CentOS/RHEL VM in VirtualBox with bridged networking, installed Geneos Gateway and Netprobe packages via the geneos CLI, configured instances and ports, resolved gaps between the internal runbook and a user-mode installation, and verified the full monitoring pipeline through the Active Console.",
        tools: "ITRS Geneos, RHEL/CentOS, VirtualBox, Linux Administration",
        year: "2026",
      },
    ],
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
          "This site — designed and built from scratch with React, Tailwind CSS, and Framer Motion. Light and dark mode, animated ops console, and a multi-page layout.",
        images: ["projects/my-Portfolio.png"],
        github: "https://github.com/Mattszuu/my-portfolio",
        contribution:
          "Designed and developed the entire site: theming system with persistent light/dark mode, scroll-triggered animations, and responsive layout. Deployed on Vercel.",
        tools: "React, Tailwind CSS, Framer Motion, Vite, Vercel",
        year: "2026",
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
    "Infrastructure & Cloud": [
      "AWS (EC2, VPC, RDS, S3, IAM, EBS)",
      "Microsoft Azure",
      "Linux (RHEL / CentOS)",
      "Windows Server",
      "Active Directory",
      "VirtualBox",
      "Networking (VLANs, Routing)",
    ],
    "Monitoring & Security": [
      "ITRS Geneos",
      "Zero Trust Architecture",
      "CrowdStrike",
      "Kong Gateway",
      "IAM / PAM Concepts",
    ],
    Databases: [
      "Oracle Database 19c",
      "Microsoft SQL Server",
      "MySQL",
    ],
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
    "Testing & QA": [
      "Manual Testing",
      "Functional & Regression Testing",
      "Test Case Documentation",
      "Cypress",
      "Selenium",
      "JMeter",
      "UAT",
    ],
    Tools: ["Git", "GitHub", "Figma", "Postman", "VS Code", "MobaXterm"],
  },

  languages: [
    { name: "English", level: "Professional" },
    { name: "Tagalog", level: "Native" },
  ],
};

export default CONFIG;
