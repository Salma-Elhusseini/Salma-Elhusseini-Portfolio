/* =======================================================
   data.js — Salma El-Husseini Portfolio
   -------------------------------------------------------
   This file contains ALL editable content for the site.
   Simply edit the values below — no HTML or JS knowledge needed.

   Sections:
   1. PROFILE    — name, bio, stats, info table, resume
   2. CONTACT    — contact details, social links
   3. SKILLS     — skill bars, tools, certifications
   4. PROJECTS   — project cards and modal content
   ======================================================= */


/* -------------------------------------------------------
   1. PROFILE
   ------------------------------------------------------- */
// BUG FIX 8: Updated all "Alex Morgan" placeholder values to match
// Salma's actual info already used throughout index.html.
const PROFILE = {
  /*My Logo*/
  logo: "SALMA DEV",
  /* Your full display name */
  name: "Salma El-Husseini",

  /* Short name used in the nav logo */
  nameShort: "Salma",

  /* Hero headline (HTML allowed) */
  heroTitle: "Front-end Developer &<br><em>Creative</em><br>Thinker",

  /* Tagline under the hero title */
  heroBio: "Crafting responsive and modern web experiences with clean code and creative design. I turn ideas into interactive interfaces using HTML, CSS, JavaScript, Bootstrap, and React.",

  /* Small label above the hero title */
  heroAvailability: "Available for Freelance",

  /* Stats shown in the hero section */
  stats: [
    { number: "3+", label: "Years Exp." },
    { number: "24", label: "Projects Done" }
  ],

  /* Longer bio paragraphs for the About page (HTML allowed) */
  aboutBio: `Hi, I'm <strong>Salma El-Husseini</strong> — a Front-End Developer passionate about building clean, responsive, and user-friendly websites. I enjoy turning ideas into interactive digital experiences using modern web technologies and creative design thinking.

I work with HTML, CSS, JavaScript, Bootstrap, React and responsive design principles to create interfaces that look great across all devices. I focus on writing organised code and delivering smooth user experiences with attention to detail.

Currently, I'm expanding my skills in modern front-end development and continuously working on projects that help me grow creatively and technically.`,

  /* Key-value rows in the About info table */
  infoTable: [
    { key: "Name", value: "Salma El-Husseini" },
    { key: "Location", value: "Minya, Egypt" },
    { key: "Email", value: "salmaelhussani@gmail.com" },
    { key: "Phone", value: "+20 100 829 5914" },
    { key: "Availability", value: "Open to Work", highlight: true },
    { key: "Languages", value: "Arabic, English" },
  ],

  /* Resume download card */
  resume: {
    label: "Download Resume",
    file: "assets/Salma_Elhusseini_CV.pdf",
    meta: "Salma_Elhusseini_CV.pdf",
  },

  /* Specialty tags shown under the About photo */
  aboutTags: [
    "Web Development",
    "Front-end",
    "UI Design",
    "JavaScript",
    "React",
    "Responsive Design",
  ],

  /* Footer location string */
  footerLocation: "Front-end Developer · Based in Egypt",

  /* Footer copyright line */
  footerCopy: "© {year} Salma El-Husseini. All rights reserved.",
};


/* -------------------------------------------------------
   2. CONTACT
   ------------------------------------------------------- */
const CONTACT = {
  /* Used by the form's mailto fallback */
  email: "salmaelhussani@gmail.com",

  /* OPTIONAL: paste a Formspree / Getform endpoint (e.g. "https://formspree.io/f/xxxx")
     to receive form messages directly. Leave empty to open the visitor's email app instead. */
  formEndpoint: "https://script.google.com/macros/s/AKfycbz6i-Ox6uQvN0DuEA35m93tLk1MxfIsrsmssZ7p25cVCqKdePQApn-N8P2CWkLrbToCzA/exec",

  /* Contact detail items (add href to make an item clickable) */
  items: [
    { icon: "✉", label: "Email", value: "salmaelhussani@gmail.com", href: "mailto:salmaelhussani@gmail.com" },
    { icon: "📞", label: "Phone", value: "+20 100 829 5914", href: "tel:+201008295914" },
    { icon: "📍", label: "Location", value: "Minya, Egypt" },
    { icon: "🕐", label: "Response Time", value: "Usually within 24 hours" },
  ],

  /* Social media links — update the url values with your real profiles */
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/salma-el-husseini-335742368",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    },
    {
      name: "GitHub",
      url: "https://github.com/Salma-Elhusseini",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    },
  ],
};


/* -------------------------------------------------------
   3. SKILLS
   ------------------------------------------------------- */
const SKILLS = {
  /* Development skill bars — edit name and pct (0–100) */
  devSkills: [
    { name: "HTML / CSS", pct: 95 },
    { name: "Bootstrap", pct: 80 },
    { name: "JavaScript", pct: 85 },
    { name: "Responsive Design", pct: 100 },
    { name: "Git / Version Control", pct: 70 },
    { name: "React", pct: 70 },
  ],

  /* Design skill bars */
  designSkills: [
    { name: "UI / Visual Design", pct: 95 },
    { name: "Figma / Prototyping", pct: 75 },
    { name: "Accessibility (WCAG)", pct: 80 },
  ],

  /* Tool chips grid */
  tools: [
    "HTML5", "CSS3", "JavaScript",
    "Vibe Coding", "VS Code", "Git - GitHub",
    "Problem Solving", "Bootstrap", "React", "Photoshop",
    "Word", "C++", "Power Point",
  ],

  /* Certifications & education */
  certifications: [
    {
      emoji: "🎓",
      issuer: "ITI",
      name: "React JS Development",
      date: "Issued: July 2026",
    },
    {
      emoji: "🎓",
      issuer: "ITI",
      name: "MERN Stack Development",
      date: "Issued: August 2025",
    },
    {
      emoji: "🎓",
      issuer: "Mahara Tech",
      name: "JavaScript Development Course",
      date: "Issued: August 2025",
    },
    {
      emoji: "💻",
      issuer: "freeCodeCamp",
      name: "Responsive Web Design Certification",
      date: "Issued: October 2025 · Credential ID: fccdf8b30ea-339c-434f-8b73-7c8d02be351e-rwd",
    },
    {
      emoji: "📐",
      issuer: "Faculty of Computers & Information",
      name: "B.Sc. Computer Science",
      date: "Expected Graduation: 2028 · Minya University",
    },
  ],
};


/* -------------------------------------------------------
   4. PROJECTS
   -------------------------------------------------------
   To add a project: copy one full object block and paste it.
   To remove a project: delete the entire object block.
   Cards are rendered automatically — no HTML edits needed.
   "caseUrl" is the source-code (GitHub) link.
   ------------------------------------------------------- */
/* Filter buttons on the Projects page. Empty categories are hidden automatically. */
const PROJECT_FILTERS = [
  { key: "all", label: "All Work" },
  { key: "web", label: "Web Design" },
  { key: "app", label: "App Design" },
  { key: "game", label: "Game" },
];

const PROJECTS = [
  {
    title: "Personal Portfolio",
    cat: "web",
    catLabel: "Web Design",
    cardDesc: "My own portfolio website: a multi-page single-page app with a dark/light theme, project filters and modal, and a Bootstrap-based responsive layout. All content is driven from one data file.",
    modalDesc: `This portfolio is the site you're looking at — designed and built from scratch to present my work, skills, and experience in one place.
 
It's a single-page experience with five sections (Home, About, Skills, Projects, Contact) and hash-based navigation, so the browser's back button and direct links work. A dark/light theme switch remembers the visitor's choice, skill bars animate on scroll, and projects can be filtered by category and opened in a detail modal.
 
The layout is fully responsive using Bootstrap 5 (grid, offcanvas mobile menu, modal) on top of a custom design system built with CSS variables. All text, projects, skills, and links live in a single data.js file, so updating the site never requires touching the HTML. The contact form validates input and can send messages through a form endpoint or fall back to the visitor's email app. I also focused on accessibility: keyboard-friendly cards, visible focus states, readable contrast in both themes, and reduced-motion support.`,
    thumbBg: "linear-gradient(135deg, #2a2418, #1a1710)",
    tags: ["HTML/CSS/JS", "Bootstrap", "Responsive"],
    client: "Personal Project",
    year: "2026",
    role: "Designer & Front-end Developer",
    duration: "3 weeks",
    liveUrl: "https://salma-elhusseini.github.io/Salma-Elhusseini-Portfolio/",
    caseUrl: "https://github.com/Salma-Elhusseini/Salma-Elhusseini-Portfolio",
  },
  {
    /* Project display name */
    title: "Rosella — Flower Shop",

    /* Category key — must match a filter-btn data-filter value:
       "web" | "app" | "game" */
    cat: "web",

    /* Human-readable category shown in the modal header */
    catLabel: "Web Design",

    /* Short description shown on the project card */
    cardDesc: "A full e-commerce site for an online flower shop, with product browsing, search, a shopping cart, and a smooth, romantic shopping experience.",

    /* Full description shown inside the modal (line breaks are preserved) */
    modalDesc: `Rosella is a complete front-end e-commerce experience for an online flower shop. The site includes a home page with featured flowers and bouquets, a searchable flower catalog, a dedicated bouquets page, a working shopping cart, and a contact page with an embedded map.

I built the full multi-page structure from scratch — handling layout, search/filter logic, cart state, and a soft, romantic visual style with warm imagery that fits a flower brand. The project focuses on clean navigation and a consistent shopping flow across every page.`,

    /* CSS gradient used as the thumbnail background and modal preview */
    thumbBg: "linear-gradient(135deg, #3e1a2e, #2e1622)",

    /* Tag chips at the bottom of the card */
    tags: ["HTML/CSS/JS", "E-Commerce"],

    /* Modal detail fields */
    client: "Personal Project",
    year: "2025",
    role: "Front-end Developer",
    duration: "3 weeks",

    /* External links */
    liveUrl: "https://salma-elhusseini.github.io/Rose-Shop/",
    caseUrl: "https://github.com/Salma-Elhusseini/Rose-Shop",
  },

  {
    title: "The Creative Library",
    cat: "web",
    catLabel: "Web Design",
    cardDesc: "An online library platform with account sign-up, login, a browsable book catalog, and an about/contact section with embedded location.",
    modalDesc: `The Creative Library is a multi-page front-end project for an online book library. It includes a home page with featured titles, a full books catalog, an about page, and a contact page with an embedded Google Map and social links.

I implemented sign-up and login modals, a responsive book grid, and a consistent navigation system across all pages, focusing on a clean reading-friendly layout and an inviting, content-first design.`,
    thumbBg: "linear-gradient(135deg, #1a2436, #16203a)",
    tags: ["HTML/CSS/JS", "Multi-page"],
    client: "Personal Project",
    year: "2025",
    role: "Front-end Developer",
    duration: "2 weeks",
    liveUrl: "https://salma-elhusseini.github.io/Creative-Library/",
    caseUrl: "https://github.com/Salma-Elhusseini/Creative-Library",
  },

  {
    title: "Lumine Parfum — Landing Page",
    cat: "web",
    catLabel: "Web Design",
    cardDesc: "A luxury landing page for a perfume brand, with a fragrance collection grid, a shopping cart, and an elegant dark/light theme toggle.",
    modalDesc: `Lumine Parfum is a single-page landing site for a fictional luxury perfume house. The design leans into an elegant, editorial feel — a hero section, a filterable fragrance collection (Floral / Woody / Amber), a "fragrance pyramid" section breaking down top, heart, and base notes, a testimonials slider, and a working cart with checkout flow.

I focused on smooth section-to-section storytelling, a light/dark theme switch, and interactive product cards (view & add-to-cart) that make the page feel like a real product site rather than a static mockup.`,
    thumbBg: "linear-gradient(135deg, #2e2418, #241c12)",
    tags: ["Landing Page", "JS Interactivity"],
    client: "Personal Project",
    year: "2026",
    role: "Front-end Developer",
    duration: "2 weeks",
    liveUrl: "https://salma-elhusseini.github.io/Landing-Page/",
    caseUrl: "https://github.com/Salma-Elhusseini/Landing-Page",
  },

  {
    title: "Task Manager — To-Do App",
    cat: "app",
    catLabel: "Web App",
    cardDesc: "A React-based task management app with user authentication, form validation, and interactive task management features.",
    modalDesc: `Task Manager is a React-based web application that combines user authentication with a simple and interactive to-do list. Users can register, log in, and manage their daily tasks through a clean and user-friendly interface.

The app includes form validation for user credentials and passwords, along with essential task management features such as adding, completing, and deleting tasks. Users can also log out of their accounts, making the experience more structured and personalized.

The project focuses on React fundamentals, component-based development, state management, form handling, and creating interactive user experiences.`,
    thumbBg: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
    tags: ["React", "JavaScript", "Form Validation", "Authentication"],
    client: "Personal Project",
    year: "2026",
    role: "Front-end Developer",
    duration: "1 week",
    liveUrl: "https://to-do-dun-one.vercel.app/",
    caseUrl: "https://github.com/Salma-Elhusseini/To-Do",
  },

  {
    title: "Calculator",
    cat: "app",
    catLabel: "App Design",
    cardDesc: "A fully functional calculator app with a clean grid layout, handling chained operations and edge cases through pure JavaScript logic.",
    modalDesc: `A web-based calculator built with vanilla JavaScript, focused on getting the operation logic right: chaining multiple operators, handling decimals, and clearing/resetting state correctly.

The button grid is built with semantic markup and event delegation, with the calculation engine written as a small, self-contained JS module that evaluates expressions step by step rather than relying on eval().`,
    thumbBg: "linear-gradient(135deg, #1a1a2e, #2a1a3e)",
    tags: ["JavaScript", "Event Handling"],
    client: "Personal Project",
    year: "2025",
    role: "Front-end Developer",
    duration: "1 week",
    liveUrl: "https://salma-elhusseini.github.io/Calculator/",
    caseUrl: "https://github.com/Salma-Elhusseini/Calculator",
  },

  {
    title: "Products — CRUD App",
    cat: "app",
    catLabel: "App Design",
    cardDesc: "A product management app with full Create, Read, Update, and Delete functionality, plus a live search to quickly filter products by name.",
    modalDesc: `Products is a CRUD (Create, Read, Update, Delete) application for managing a product catalog. Users can add new products, view the full list, edit existing entries, remove items, and use a live search bar to instantly filter products by name — all handled through structured JavaScript logic without a page reload.

The project focuses on getting the data flow right: keeping the product list in sync with the UI after every operation, validating input before saving, and organizing the code so each CRUD operation — including search/filter — is isolated and easy to maintain.`,
    thumbBg: "linear-gradient(135deg, #1a2e2a, #16241e)",
    tags: ["JavaScript", "CRUD", "Search"],
    client: "Personal Project",
    year: "2026",
    role: "Front-end Developer",
    duration: "2 weeks",
    liveUrl: "https://salma-elhusseini.github.io/CRUD-Project/",
    caseUrl: "https://github.com/Salma-Elhusseini/CRUD-Project",
  },
];
