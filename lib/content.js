export const profile = {
  name: "Fathima NR",
  role: "Full Stack Developer / IT Specialist",
  location: "Dubai, United Arab Emirates",
  phone: "+971 50 592 4872",
  phoneHref: "tel:+971505924872",
  email: "fathimanr27@gmail.com",
  linkedin: "https://www.linkedin.com/in/fathimanr",
  resumeHref: "/Fathima-NR-Resume.pdf",
  photo: "/fathima-nr.jpg",
  availability: "Immediate joining",
  visa: "UAE employment visa",
  summary:
    "Full stack developer with over three years of experience building web applications end to end, from responsive interfaces to REST APIs and databases. Designed and delivered two production platforms — a multi-role telehealth operations system and an internal HR and employee management portal — using Next.js, React, Node.js, Express and MongoDB, with additional work across .NET/C#, SQL Server and Angular. Combines development with hands-on IT operations covering system administration, user and email management and network support. Comfortable owning a feature from requirements gathering through deployment and user support. Seeking a full stack development or IT operations role in Dubai.",
  headline:
    "Building web platforms that solve real business problems.",
  intro:
    "I build and maintain production web applications across the full stack — from responsive frontends and REST APIs to databases, authentication, integrations and deployment. My recent work includes telehealth platforms, internal business systems and client-facing websites.",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "5+", label: "Production platforms" },
  { value: "50+", label: "Live websites" },
  { value: "UAE", label: "Employment visa" },
];

export const expertise = [
  {
    title: "Full-stack development",
    body: "React, Next.js and Node.js applications with authentication, role-based access, REST APIs, database integration and real-time workflows.",
    art: "stack",
    href: "#work",
    cta: "View projects",
  },
  {
    title: "Telehealth platforms",
    body: "Multi-role healthcare platforms for nurses, agents, case workers and admins, including scheduling, patient workflows, session management and video calls.",
    art: "health",
    note: "Internal product · screenshots only",
  },
  {
    title: "Internal business systems",
    body: "HR and operations platforms covering attendance, employee management, tasks, calendars, payments, training and administrative workflows.",
    art: "hr",
    note: "Internal product · screenshots only",
  },
  {
    title: "Web & CMS development",
    body: "Responsive websites and business platforms built with React and WordPress, including reusable components, forms, integrations and deployment.",
    art: "web",
    href: "#company-sites",
    cta: "View websites",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Understand",
    body: "Work with stakeholders to understand requirements, users and the business workflow.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define the architecture, roles, APIs, database structure and technical approach.",
  },
  {
    num: "03",
    title: "Build",
    body: "Develop responsive interfaces, backend APIs, authentication, integrations and real-time features.",
  },
  {
    num: "04",
    title: "Deploy & support",
    body: "Test, deploy and maintain the application, troubleshoot issues and improve the product based on real usage.",
  },
];

export const toolTiles = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "Angular",
  ".NET",
  "SQL Server",
  "WordPress",
  "Git",
  "Figma",
];

export const featuredProjects = [
  {
    id: "uber-health",
    number: "01",
    title: "Uber Health",
    kicker: "Telehealth operations platform",
    company: "Medcare",
    description:
      "Full stack telehealth platform that helps Medicare patients check Annual Wellness Visit eligibility and connects them with agents, nurses and case workers for scheduling, care coordination and follow-ups.",
    points: [
      "Role-based portals for patient intake, lead management, nurse visits, CHI and SDOH assessments, task workflows, training, payouts, and admin analytics.",
      "Real-time call requests and notifications with Socket.io, plus JWT authentication and role-based access across agent, nurse, case worker and admin apps.",
      "REST APIs in Node.js and Express against MongoDB, with responsive front ends in Next.js, React and Tailwind CSS.",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    mock: "telehealth",
    image: "/uber-health-portals.jpg",
    imageAlt:
      "Uber Health agent, nurse, case worker and admin portals for patient operations, scheduling, coordination and analytics.",
  },
  {
    id: "hr-portal",
    number: "02",
    title: "Employee / HR Portal",
    kicker: "Internal operations console",
    company: "Medcare",
    description:
      "Admin console for creating and managing portal users, departments, roles, shift schedules and working days — built for day-to-day HR and IT operations.",
    points: [
      "Attendance tracking with biometric fingerprint punch records, live user reporting, public holiday management and expense request approvals.",
      "Inventory and equipment module for recording company assets and assigning them to employees.",
      "Gathered requirements from HR and operations teams, then iterated on the product from user feedback.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    mock: "hr",
    image: "/hr-portal-screens.jpg",
    imageAlt:
      "HR portal admin dashboard, user details, attendance calendar and assigned inventory screens.",
  },
  {
    id: "company-sites",
    number: "03",
    title: "Company Websites",
    kicker: "WordPress, live in production",
    company: "Medcare",
    description:
      "Built and maintained two live healthcare WordPress sites — a senior telehealth presence and a practice-operations brand — covering theme customisation, responsive layouts, plugin setup and ongoing content updates.",
    points: [
      "medcare.org — Medicare-covered telehealth access for seniors. Service pages, Annual Wellness Visit and Community Health Integration (CHI) content, provider and case-worker profiles, bilingual English/Spanish, click-to-call and live chat.",
      "careconnexhealth.com — operations site for launching, running and scaling healthcare practices: credentialing, billing, patient access, workflow optimisation and consultation funnels.",
      "WordPress theme customisation, reusable layouts, plugin configuration, forms and content publishing for both brands.",
      "Also delivered client sites at Techcybe including VedaLink, Hadi Trade & Services, Al Tayseer Pharma, WX3, Arvee Furniture and Global Edge Career.",
    ],
    stack: ["WordPress", "React.js", "JavaScript", "REST API"],
    links: [
      { label: "medcare.org", href: "https://medcare.org/" },
      { label: "careconnexhealth.com", href: "https://careconnexhealth.com/" },
    ],
    mock: "sites",
    images: [
      {
        src: "/medcare-org.jpg",
        alt: "medcare.org homepage for Medicare-covered telehealth access",
        href: "https://medcare.org/",
      },
      {
        src: "/careconnex-health.jpg",
        alt: "CareConnex Health homepage for healthcare practice operations",
        href: "https://careconnexhealth.com/",
      },
    ],
  },
];

export const clientProjects = [
  {
    title: "VedaLink",
    url: "https://vedalink.techcybe.com",
    summary: "Commercial broker website with a clean corporate presence and enquiry flow.",
    stack: ["React.js", "JavaScript", "REST API"],
  },
  {
    title: "Hadi Trade & Services",
    url: "https://hadi.techcybe.com",
    summary:
      "FMCG trading site for an Ajman Free Zone company — products, services and partner enquiry.",
    stack: ["React.js", "JavaScript", "REST API"],
  },
  {
    title: "Al Tayseer Pharma",
    url: "https://altayseerpharma.com",
    summary:
      "Medical corporate site for a UAE pharmaceutical distributor — pixel-perfect UI and enquiry forms.",
    stack: ["React.js", "HTML", "CSS", "Google Sheets"],
  },
  {
    title: "WX3",
    url: "https://trade.thewx3.com",
    summary:
      "Sustainable mobility site for electric vehicles and fast charging stations.",
    stack: ["React.js", "JavaScript"],
  },
  {
    title: "Arvee Furniture",
    url: "https://arveefurniture.com/",
    summary: "WordPress furniture catalogue and enquiry site.",
    stack: ["WordPress"],
  },
  {
    title: "Global Edge Career",
    url: "https://globaledgecareer.com/",
    summary: "WordPress careers and recruitment site.",
    stack: ["WordPress"],
  },
];

export const extraClientWork = ["NanoWay Security", "Shams Al Sahara"];

export const experience = [
  {
    role: "Full Stack Developer and IT Specialist",
    company: "Medcare Telehealth",
    detail: "US-based healthcare company, Dubai, UAE",
    dates: "January 2026 – Present",
    current: true,
    bullets: [
      "Designed and built an internal HR and employee management portal in Next.js covering attendance and shift schedules, biometric punch records, leave and public holidays, expense approvals, departments, inventory and equipment assignment.",
      "Developed multi-role portals for the Uber Health telehealth platform serving nurses, call centre agents, case workers and administrators, managing patient records, scheduling and care coordination workflows.",
      "Implemented real-time call requests and notifications with Socket.io, and secure authentication and role-based access control with JWT across all portals.",
      "Built REST APIs in Node.js and Express against MongoDB, and responsive front ends in Next.js, React and Tailwind CSS.",
      "Built and maintained the corporate websites medcare.org and careconnexhealth.com on WordPress, covering theme customisation, page builds, plugin setup and content updates.",
      "Gathered requirements from HR, operations and clinical teams, then delivered and iterated on both platforms based on user feedback.",
      "Handled day-to-day IT operations including device setup, user account and email administration, network troubleshooting, IT asset management and vendor coordination.",
    ],
  },
  {
    role: "Web Developer",
    company: "Techcybe IT Solution",
    detail: "Dubai, UAE",
    dates: "August 2023 – December 2025",
    current: false,
    bullets: [
      "Developed responsive client websites using HTML, CSS, JavaScript and React.js, ensuring cross-device compatibility.",
      "Built reusable components and maintained state logic using React Hooks, Redux and Context API.",
      "Integrated REST APIs, managed data flow and updated the UI based on API responses.",
      "Converted Figma and Adobe XD designs into pixel-perfect pages in collaboration with design teams.",
      "Debugged UI issues and improved page performance through clean, optimised code.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "RxJS",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "React Hooks",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "SCSS/SASS",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "Responsive design",
      "Atomic Design",
      "Accessibility / WCAG",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "C#",
      ".NET",
      ".NET 8",
      "ASP.NET Core",
      ".NET Framework",
      "PHP",
      "REST API design",
      "Worker Services",
      "Webhooks",
      "Socket.io",
      "JWT",
      "RBAC",
    ],
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "SQL Server",
      "T-SQL",
      "MySQL",
      "Dapper",
      "Entity Framework Core",
      "Stored procedures",
      "Query optimization",
    ],
  },
  {
    title: "Architecture & engineering",
    items: [
      "REST API Design",
      "Role-Based Access Control (RBAC)",
      "Authentication & JWT",
      "Modular Development",
      "Reusable Components",
      "Database Design",
      "API Integrations",
      "Real-Time Communication",
    ],
  },
  {
    title: "Security & quality",
    items: [
      "Authentication & Authorization",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "API Security",
      "Input Validation",
      "XSS Prevention",
      "API Testing",
      "Jest & Unit Testing",
      "Error Handling",
      "Code Review",
    ],
  },
  {
    title: "DevOps & tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "NPM",
      "Yarn",
      "Vite",
      "Postman",
      "Vercel",
      "VS Code",
    ],
  },
  {
    title: "WordPress, SEO & design",
    items: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Divi",
      "Webflow",
      "Technical SEO",
      "Core Web Vitals",
      "Lighthouse",
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Mobile-First Design",
    ],
  },
  {
    title: "IT operations",
    items: [
      "Windows setup",
      "Microsoft 365",
      "User & email admin",
      "Network troubleshooting",
      "IT asset management",
      "Vendor coordination",
      "End-user support",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.), Computer Science Engineering",
  school: "JP College of Engineering, India",
  dates: "June 2017 – April 2021",
  extra: "CGPA 7.9 / 10",
};

export const certification = {
  title: "MERN Stack Development",
  detail: "MongoDB, Express.js, React.js, Node.js",
  school: "Live Wire Institute",
  dates: "December 2023 – July 2024",
};

export const languages = ["English", "Hindi", "Malayalam", "Tamil"];
