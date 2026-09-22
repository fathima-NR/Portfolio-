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
  { label: "Home", href: "/#top" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
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
    href: "/projects/uber-health",
    description:
      "A multi-role healthcare operations platform (Medcare Telehealth) that connects patients, agents, nurses and case workers for eligibility checks, visits, care coordination and payouts.",
    points: [
      "Role-based portals for patient intake, lead management, nurse visits, CHI assessments, task workflows, training, payouts and admin analytics.",
      "Real-time call requests and notifications with Socket.io, plus JWT authentication and role-based access across agent, nurse, case worker and admin apps.",
      "REST APIs in Node.js and Express against MongoDB, with a React (Vite) front end, Tailwind CSS, and integrations for insurance eligibility and video meetings.",
    ],
    stack: [
      "React",
      "Vite",
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
    href: "/projects/hr-portal",
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
  {
    id: "brain-tumor-detection",
    number: "04",
    title: "Brain Tumor Detection & Classification Using Machine Learning",
    kicker: "Final year academic project · JP College of Engineering",
    projectType: "Final Year Academic Project / Machine Learning / Medical Image Processing",
    domain: "Healthcare / Medical Imaging / Machine Learning",
    href: "/projects/brain-tumor-detection",
    description:
      "Final-year BE Computer Science project for automated detection and classification of brain hemorrhage from CT brain images, using traditional medical image processing and a Decision Tree classifier.",
    points: [
      "Processed CT brain images through preprocessing, morphological operations, watershed segmentation, feature extraction and machine-learning classification.",
      "Built an end-to-end academic workflow from raw CT input to a classification result — without deep learning or modern LLM tooling.",
      "Focused on medical imaging, image segmentation and traditional machine-learning classification for a healthcare use case.",
    ],
    stack: [
      "Machine Learning",
      "Medical Image Processing",
      "CT Imaging",
      "Sobel Operator",
      "Morphological Operations",
      "Watershed Segmentation",
      "Feature Extraction",
      "Decision Tree",
    ],
    images: [
      {
        src: "/brain-ml-01-pipeline.png",
        alt: "CT image processing pipeline stages from input to edge sharpening",
        caption: "CT Image Processing Pipeline",
      },
      {
        src: "/brain-ml-02-preprocess-gui.png",
        alt: "Application interface showing preprocessing and morphological operations on a CT scan",
        caption: "Preprocessing and Morphological Operations",
      },
      {
        src: "/brain-ml-03-segmentation.jpg",
        alt: "Sobel edge, thresholding and clustering stages used for brain image segmentation",
        caption: "Brain Image Segmentation",
      },
      {
        src: "/brain-ml-05-results.jpg",
        alt: "Medical image processing results after preprocess and morphology stages",
        caption: "Medical Image Processing Results",
      },
    ],
  },
];

export const uberHealthProject = {
  id: "uber-health",
  title: "Uber Health",
  kicker: "Telehealth operations platform · Medcare",
  company: "Medcare Telehealth",
  projectType: "Production platform / Full stack / Healthcare operations",
  domain: "Healthcare / Telehealth / Care coordination",
  overview:
    "Uber Health is branded in the product as Medcare Telehealth — a healthcare operations platform used to manage patients, leads, nurses, agents, case workers and admins. It supports intake, insurance eligibility checks, visits, care coordination, training, payouts and real-time call workflows in one system.",
  problem:
    "Care teams were juggling patient intake, eligibility, scheduling, nurse visits, community health assessments and payouts across disconnected tools. Admins needed visibility into agents, nurses and case workers, while clinical staff needed clear queues, notifications and documentation for every patient touchpoint.",
  solution:
    "Built multi-role web portals on a React SPA with a Node.js / Express API, MongoDB and Socket.IO. Agents manage leads and eligibility, nurses run visits and reviews, case workers handle coordination and clocked sessions, and admins oversee monitoring, analytics, training and payouts — with JWT-based role access throughout.",
  architecture: [
    "Browser (React SPA)",
    "REST API (/api) + WebSocket (Socket.IO)",
    "Node.js Express server",
    "Routes → Controllers → Models → MongoDB",
  ],
  workflow: [
    "Lead / patient intake",
    "Insurance eligibility check",
    "Agent claims & schedules care",
    "Nurse visit & CHI review",
    "Case worker follow-up & tasks",
    "Admin monitoring & payouts",
  ],
  portals: [
    {
      title: "Agent portal",
      items: [
        "Lead intake, claimed leads and patient management.",
        "Insurance eligibility checks and task queues.",
        "Calendar, resources, call history and notifications.",
      ],
    },
    {
      title: "Nurse portal",
      items: [
        "Patient visits, onboarding and document review.",
        "CHI form review, call requests and payouts.",
        "Real-time alerts for incoming call requests.",
      ],
    },
    {
      title: "Case worker portal",
      items: [
        "Patient care coordination and CHI encounter forms.",
        "Clock-in / clock-out work sessions and training.",
        "Task creation and payout tracking.",
      ],
    },
    {
      title: "Admin portal",
      items: [
        "User management for patients, leads, agents, nurses and case workers.",
        "Live monitoring, analytics, chat, notifications and QR tracking.",
        "Payment schedules, nurse and case-worker payouts, settings and audit logs.",
      ],
    },
  ],
  businessWorkflows: [
    {
      title: "Lead → Patient",
      items: [
        "Lead is created from public intake or admin tooling.",
        "Agents receive a real-time alert and claim the lead.",
        "Eligibility is checked via pVerify (primary) or Inovalon (fallback).",
        "Eligible leads are converted into patient records for ongoing care.",
      ],
    },
    {
      title: "Task workflow",
      items: [
        "Case workers create patient tasks that enter the agent open-task pool.",
        "Agents claim tasks, work them in progress, and resolve or escalate them.",
        "Background check-in sweeps help monitor stuck or overdue work.",
      ],
    },
    {
      title: "CHI form workflow",
      items: [
        "Case workers complete CHI encounter forms for patients.",
        "Forms are assigned to nurses for review and approval.",
        "Approved documentation supports billing and care follow-up.",
      ],
    },
    {
      title: "Nurse call requests",
      items: [
        "Admins or agents send a call request to a nurse.",
        "Nurses receive a Socket.IO alert in real time.",
        "Nurses accept or decline; status updates across the care team.",
      ],
    },
    {
      title: "Payouts & clock-in",
      items: [
        "Admins create payment schedules and run weekly nurse or case-worker payouts.",
        "Case workers clock in before accessing work pages; sessions are tracked for operations.",
        "Transactional emails notify staff when payouts are generated.",
      ],
    },
  ],
  technicalHighlights: [
    {
      title: "Authentication & access",
      items: [
        "JWT authentication with role checks across admin, agent, nurse and case-worker portals.",
        "Separate auth contexts and private routes so each role only reaches its own screens.",
      ],
    },
    {
      title: "Real-time operations",
      items: [
        "Socket.IO for live call requests, lead alerts and in-app notifications.",
        "Background jobs for check-ins and operational sweeps alongside the API server.",
      ],
    },
    {
      title: "APIs & data",
      items: [
        "REST APIs in Node.js and Express with Mongoose models on MongoDB.",
        "Shared patient, lead, task, CHI, payout and session data across portals.",
      ],
    },
    {
      title: "Front end",
      items: [
        "React SPA built with Vite, React Router and Tailwind CSS.",
        "Operational UIs for queues, forms, monitoring, analytics charts and document review.",
      ],
    },
  ],
  integrations: [
    "pVerify — primary insurance eligibility checks",
    "Inovalon — fallback insurance eligibility",
    "Gmail API — transactional emails (payouts and notifications)",
    "meet.medcare.org — video meeting creation",
    "Public eligibility page for Annual Wellness Visit checks",
  ],
  features: [
    "Multi-role portals for agents, nurses, case workers and admins",
    "Lead intake and lead-to-patient conversion",
    "Insurance eligibility via pVerify / Inovalon",
    "Real-time nurse call requests and notifications",
    "CHI encounter forms and nurse review",
    "Task management with claim, progress and check-in monitoring",
    "Case-worker clock-in sessions and training",
    "Nurse and case-worker payout schedules",
    "Admin analytics, live monitoring and QR tracking",
  ],
  stack: [
    "React",
    "Vite",
    "React Router",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Chart.js",
  ],
  role:
    "As a full stack developer at Medcare, I built and iterated on the Uber Health portals end to end — front-end workflows, REST APIs, authentication, real-time notifications and admin tooling — based on requirements from operations and clinical teams.",
  learned: [
    "Designing multi-role products with clear permission boundaries",
    "Building real-time healthcare operations with Socket.IO",
    "Integrating external eligibility and messaging services into production workflows",
    "Turning clinical and ops requirements into production features",
    "Shipping and supporting an internal platform used by care teams daily",
  ],
  gallery: [
    {
      src: "/uber-health-portals.jpg",
      alt: "Uber Health agent, nurse, case worker and admin portals for patient operations, scheduling, coordination and analytics.",
      caption: "Multi-role portals",
    },
  ],
  note: "Internal product — screenshots only; not a public customer-facing marketing site.",
};

export const hrPortalProject = {
  id: "hr-portal",
  title: "Employee / HR Portal",
  kicker: "Internal operations console · Medcare",
  company: "Medcare Telehealth",
  projectType: "Production platform / Full stack / Internal HR & IT ops",
  domain: "HR / Employee operations / Internal tools",
  overview:
    "An internal HR and employee management portal built for day-to-day operations at Medcare. Admins create and manage users, departments, roles, shift schedules and working days, while attendance, expenses, holidays and inventory stay in one operational console.",
  problem:
    "HR and IT teams needed a single place to manage employees, attendance from biometric punches, leave and public holidays, expense approvals, and company equipment assignment — instead of tracking the same work across spreadsheets and disconnected tools.",
  solution:
    "Designed and built an admin console in Next.js with a Node.js / Express API and MongoDB. The portal covers user and department management, biometric attendance, holiday and expense workflows, and an inventory module for assigning company assets to employees.",
  workflow: [
    "Create users, departments & roles",
    "Define shifts & working days",
    "Track biometric attendance",
    "Manage holidays & expenses",
    "Assign inventory & equipment",
  ],
  modules: [
    {
      title: "People & access",
      items: [
        "Create and manage portal users, departments and roles.",
        "Configure shift schedules and working days for operations.",
      ],
    },
    {
      title: "Attendance & time",
      items: [
        "Attendance tracking with biometric fingerprint punch records.",
        "Live user reporting for day-to-day HR visibility.",
      ],
    },
    {
      title: "Approvals & calendar",
      items: [
        "Public holiday management for the organisation calendar.",
        "Expense request submissions and approval workflows.",
      ],
    },
    {
      title: "Inventory & assets",
      items: [
        "Record company equipment and IT assets.",
        "Assign inventory items to employees and track ownership.",
      ],
    },
  ],
  technicalHighlights: [
    {
      title: "Full stack delivery",
      items: [
        "Next.js front end with Tailwind CSS for the admin console.",
        "REST APIs in Node.js and Express against MongoDB.",
      ],
    },
    {
      title: "Operational workflows",
      items: [
        "Attendance, holiday and expense flows built around real HR processes.",
        "Inventory assignment tied to employee records for IT asset tracking.",
      ],
    },
    {
      title: "Requirements & iteration",
      items: [
        "Gathered requirements from HR and operations teams.",
        "Iterated on screens and workflows from user feedback after release.",
      ],
    },
  ],
  features: [
    "User, department and role management",
    "Shift schedules and working days",
    "Biometric attendance and live reporting",
    "Public holiday management",
    "Expense request approvals",
    "Inventory and equipment assignment",
  ],
  stack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  role:
    "I designed and built the HR portal end to end at Medcare — gathering requirements from HR and operations, implementing the admin console and APIs, and iterating on attendance, expense and inventory workflows from real usage.",
  learned: [
    "Turning HR and IT operations needs into a practical internal product",
    "Building attendance and approval workflows that match real office processes",
    "Owning an internal tool from requirements through deployment and feedback",
    "Balancing full-stack delivery with day-to-day IT support responsibilities",
  ],
  gallery: [
    {
      src: "/hr-portal-screens.jpg",
      alt: "HR portal admin dashboard, user details, attendance calendar and assigned inventory screens.",
      caption: "Admin console screens",
    },
  ],
  note: "Internal product — screenshots only; not a public customer-facing site.",
};

export const brainTumorProject = {
  id: "brain-tumor-detection",
  title: "Brain Tumor Detection & Classification Using Machine Learning",
  kicker: "Final year BE · Computer Science Engineering",
  school: "JP College of Engineering",
  projectType: "Final Year Academic Project / Machine Learning / Medical Image Processing",
  domain: "Healthcare / Medical Imaging / Machine Learning",
  overview:
    "This final-year academic project focused on automated detection and classification of brain hemorrhage from CT brain images. The system processed CT images through multiple traditional image-processing and machine-learning stages to identify the relevant hemorrhage region and generate a classification result.",
  problem:
    "Manual review of CT brain scans is time-consuming and depends heavily on clinical expertise. The project explored whether a structured image-processing and machine-learning pipeline could help highlight the suspected hemorrhage region and support classification from CT brain images.",
  solution:
    "The system followed a classical medical imaging pipeline: preprocess the CT image, apply morphological operations, segment the region of interest with watershed segmentation, extract features from that region, and classify the result with a Decision Tree model trained on prepared data.",
  workflow: [
    "CT Brain Image",
    "Image Preprocessing",
    "Morphological Operations",
    "Watershed Segmentation",
    "Feature Extraction",
    "Decision Tree Classification",
    "Result",
  ],
  technicalWorkflow: [
    {
      title: "Image Preprocessing",
      items: [
        "CT brain images were used as input.",
        "Images were converted to grayscale.",
        "Images were resized to 256 × 256 pixels.",
        "Edge detection was performed.",
        "Edge highlighting was used to make relevant boundaries more visible.",
      ],
    },
    {
      title: "Morphological Image Processing",
      items: [
        "Sobel operator was used for gradient/elevation information.",
        "Closing reconstruction was performed.",
        "Binary thresholding was applied.",
        "Markers were generated by combining the Sobel and threshold information.",
      ],
    },
    {
      title: "Image Segmentation",
      items: [
        "Watershed segmentation was used to separate the suspected hemorrhage region from the surrounding image.",
        "The segmentation stage helped identify the region of interest.",
      ],
    },
    {
      title: "Feature Extraction",
      items: [
        "Relevant features were extracted from the processed/segmented hemorrhage region.",
      ],
    },
    {
      title: "Machine Learning Classification",
      items: [
        "The extracted features were passed to a machine-learning classifier.",
        "A Decision Tree classifier was used for the classification stage.",
      ],
    },
    {
      title: "Training & Testing",
      items: [
        "Training data was used to generate the model.",
        "Test images were processed through the same preprocessing, segmentation, feature extraction and classification workflow.",
        "The system then generated the classification result.",
      ],
    },
  ],
  imagePipeline: [
    "CT Brain Image",
    "Grayscale conversion",
    "Resize to 256 × 256",
    "Edge detection & highlighting",
    "Sobel operator",
    "Morphological closing",
    "Binary thresholding",
    "Watershed segmentation",
  ],
  machineLearning: [
    "Feature vectors were derived from the segmented region of interest.",
    "A Decision Tree classifier mapped extracted features to the classification result.",
    "This was a traditional supervised machine-learning approach, not a deep-learning or neural-network pipeline.",
  ],
  trainingTesting: [
    "The model was trained on prepared training samples.",
    "Unseen test CT images followed the same processing pipeline before classification.",
    "The output of the system was the classification result for the processed scan.",
  ],
  techniques: [
    "Machine Learning",
    "Medical Image Processing",
    "CT Imaging",
    "Sobel Operator",
    "Morphological Operations",
    "Watershed Segmentation",
    "Feature Extraction",
    "Decision Tree",
  ],
  role: "I developed and implemented the project workflow and gained hands-on exposure to medical image processing, machine learning, image segmentation and classification.",
  learned: [
    "Understanding of an end-to-end machine-learning pipeline",
    "Medical image preprocessing",
    "Image segmentation",
    "Feature extraction",
    "Traditional machine-learning classification",
    "Training and testing concepts",
    "Applying AI/ML techniques to a healthcare use case",
  ],
  gallery: [
    {
      src: "/brain-ml-01-pipeline.png",
      alt: "CT image processing pipeline stages from input to edge sharpening",
      caption: "CT Image Processing Pipeline",
    },
    {
      src: "/brain-ml-02-preprocess-gui.png",
      alt: "Application interface showing preprocessing and morphological operations on a CT scan",
      caption: "Preprocessing and Morphological Operations",
    },
    {
      src: "/brain-ml-03-segmentation.jpg",
      alt: "Sobel edge, thresholding and clustering stages used for brain image segmentation",
      caption: "Brain Image Segmentation",
    },
    {
      src: "/brain-ml-05-results.jpg",
      alt: "Medical image processing results after preprocess and morphology stages",
      caption: "Medical Image Processing Results",
    },
  ],
};

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

export const uiDemoProjects = [
  {
    title: "Arabian Palace",
    url: "https://arabicpalace.netlify.app",
    summary:
      "Restaurant UI concept — dark, hospitality-focused landing page with menu and booking CTAs.",
    label: "UI/UX demo",
    image: "/demo-arabian-palace.jpg",
    imageAlt: "Arabian Palace restaurant landing page hero with reserve and menu CTAs",
  },
  {
    title: "Titan Fitness",
    url: "https://tittanfitness.netlify.app",
    summary:
      "Fitness brand UI concept — gym landing page with classes, trainers and membership sections.",
    label: "UI/UX demo",
    image: "/demo-titan-fitness.jpg",
    imageAlt: "Titan Fitness gym landing page with unleash your strength hero",
  },
  {
    title: "Iron Blades",
    url: "https://iron-blades.netlify.app",
    summary:
      "Barbershop UI concept — traditional craftsmanship theme with a bold, dark visual identity.",
    label: "UI/UX demo",
    image: "/demo-iron-blades.jpg",
    imageAlt: "Iron Blades barbershop landing page with traditional craftsmanship hero",
  },
];

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
