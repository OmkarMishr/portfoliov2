export const portfolioData = {
  // Personal info
  name: "Omkar Mishra",
  title: "Full-Stack Web Engineer",
  bio: "I develop full-stack projects, polished user interfaces, and reliable web applications — focused on scalable systems, performance, and clean engineering.",
  email: "omkarmishra591@gmail.com",
  location: "Raipur, India",
  phone: "",

  // Social links
  social: {
    github: "https://github.com/OmkarMishr",
    linkedin: "https://www.linkedin.com/in/omkarmishradev",
    portfolio: "https://omkarmishradev.vercel.app",
  },

  // Nav links (map to section ids on the page)
  navLinks: ["About", "Skills", "Projects", "FAQ", "Contact"],

  // About section
  about: {
    heading: "Who I Am",
    description:
      "I'm a full-stack web engineer who enjoys turning complex problems into clean, reliable products. I work across the stack — from database and APIs to polished, performant interfaces — and care about scalable systems and great user experience.",
    highlights: [
      "1.5+ years building production-grade web applications",
      "Comfortable across React, Next.js, Node.js and databases",
      "2 internships shipping real full-stack & backend features",
      "Strong DSA, problem-solving and 7.8 academic CPI",
    ],
  },

  // Work experience (ordered oldest first — the stacking deck reveals
  // newer roles on top as you scroll).
  experience: [
    {
      role: "Full Stack Developer",
      company: "Bharat Intern",
      logo: "/company/orbitor.png",
      type: "Internship",
      location: "Remote",
      period: "Aug 2024 – Sep 2024",
      points: [
        "Designed and documented UML diagrams for system architecture and process flows.",
        "Built responsive, cross-browser interfaces with a focus on clean, secure DOM manipulation.",
        "Improved on-page SEO and ensured accessible, standards-compliant markup.",
      ],
    },
    {
      role: "Python Trainee",
      company: "Techionet Pvt Ltd",
      logo: "/company/techonet.png",
      type: "Internship",
      location: "Remote",
      period: "Jun 2025 – Jul 2025",
      points: [
        "Strengthened foundations in Python, machine learning and core AI workflows — data preprocessing, model training and evaluation.",
        "Worked in a structured environment emphasising deadlines, documentation and professional coding standards.",
        "Built an emotion-based recommendation web app that tailors content and suggestions to the user's current mood.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Finvision",
      logo: "/company/finvision.png",
      type: "Full-time",
      location: "Raipur",
      period: "Feb 2025 – Present",
      points: [
        "Built a complete student-management CRM from scratch on the MERN stack — enrollment, attendance tracking, fee collection and course-progress monitoring.",
        "Engineered a live tracking platform with real-time market data, trade-execution workflows and user portfolio management.",
        "Deployed both platforms on a Hostinger Ubuntu VPS with Nginx reverse proxy and PM2 process management for zero-downtime hosting.",
        "Set up GitHub Actions CI/CD pipelines to automate builds and deployments on every push to main.",
      ],
    },
  ],

  // Hero
  hero: {
    headingLine1: "Building Digital",
    headingLine2: "Products That",
    headingLine3: "Companies Want",
    ctaText: "View My Work",
    ctaSecondaryText: "Download Resume",
    stats: [
      { value: "1.5+", label: "Years Experience" },
      { value: "5+", label: "Projects Built" },
      { value: "2", label: "Internships" },
      { value: "7.8", label: "Academic CPI" },
    ],
  },
};
