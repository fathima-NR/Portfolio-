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
  nationality: "Indian",
  summary:
    "Full stack developer with over three years of experience building web applications end to end, from responsive interfaces to REST APIs and databases. Designed and delivered two production platforms — a multi-role telehealth operations system and an internal HR portal — using Next.js, React, Node.js, Express and MongoDB, with additional work across .NET/C#, SQL Server and Angular. Combines product development with hands-on IT operations.",
  headline:
    "I design and ship production platforms — from patient workflows to HR operations.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const facts = [
  { label: "Based in", value: "Dubai, UAE" },
  { label: "Availability", value: "Immediate joining" },
  { label: "Visa", value: "UAE employment visa" },
  { label: "Languages", value: "EN · HI · ML · TA" },
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
  },
  {
    id: "company-sites",
    number: "03",
    title: "Company Websites",
    kicker: "WordPress, live in production",
    company: "Medcare",
    description:
      "Built and maintained corporate sites including theme customisation, responsive layouts, plugin configuration and ongoing content updates.",
    points: [
      "medcare.org — Medicare-covered telehealth access for seniors, service pages, provider profiles and content.",
      "careconnex.com — companion corporate presence, maintained alongside the Medcare site.",
    ],
    stack: ["WordPress", "PHP", "Responsive design"],
    links: [
      { label: "medcare.org", href: "https://medcare.org" },
      { label: "careconnex.com", href: "https://careconnex.com" },
    ],
    mock: "sites",
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
    title: "The Arch Beauty",
    url: "https://thearchbeauty.com",
    summary:
      "Product showcase built with React components, SEO-friendly structure and WhatsApp contact.",
    stack: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Sahara Homes TS",
    url: "https://saharahomests.com",
    summary:
      "Corporate real-estate site with custom JavaScript and WhatsApp lead collection.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Al Tayseer Pharma",
    url: "https://altayseerpharma.com",
    summary:
      "Medical corporate site for a UAE pharmaceutical distributor — pixel-perfect UI and enquiry forms.",
    stack: ["React.js", "HTML", "CSS", "Google Sheets"],
  },
];

export const extraClientWork = ["NanoWay Security", "Shams Al Sahara", "WX3 Trade"];

export const experience = [
  {
    role: "Full Stack Developer and IT Specialist",
    company: "Medcare Telehealth",
    detail: "US-based healthcare company, Dubai, UAE",
    dates: "January 2026 – Present",
    current: true,
    bullets: [
      "Designed and built an internal HR and employee management portal in Next.js covering attendance, shifts, biometric punch records, leave, public holidays, expense approvals, departments, inventory and equipment assignment.",
      "Developed multi-role portals for the Uber Health telehealth platform serving nurses, call centre agents, case workers and administrators.",
      "Implemented real-time call requests with Socket.io and secure JWT authentication with role-based access control across all portals.",
      "Built REST APIs in Node.js and Express against MongoDB, and responsive front ends in Next.js, React and Tailwind CSS.",
      "Built and maintained medcare.org and careconnex.com on WordPress.",
      "Handled day-to-day IT operations: device setup, user accounts and email, network troubleshooting, asset management and vendor coordination.",
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
    title: "Front-end",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Redux",
      "Tailwind CSS",
      "SCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Back-end",
    items: [
      "Node.js",
      "Express.js",
      "C# / .NET",
      "ASP.NET Core",
      "PHP",
      "REST APIs",
      "Socket.io",
      "JWT / RBAC",
    ],
  },
  {
    title: "Data",
    items: ["MongoDB", "SQL Server", "MySQL", "T-SQL", "Entity Framework", "Dapper"],
  },
  {
    title: "Quality & security",
    items: ["Jest", "Swagger", "OWASP", "XSS / SQLi prevention", "Code review"],
  },
  {
    title: "Tools & CMS",
    items: [
      "Git",
      "Azure DevOps",
      "WordPress",
      "WooCommerce",
      "Figma",
      "Postman",
      "Vercel",
      "IIS",
    ],
  },
  {
    title: "IT operations",
    items: [
      "Windows setup",
      "Microsoft 365",
      "User & email admin",
      "Network support",
      "Asset management",
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
  school: "Live Wire Institute",
  dates: "December 2023 – July 2024",
};

export const languages = ["English", "Hindi", "Malayalam", "Tamil"];
