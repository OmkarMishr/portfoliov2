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
    linkedin: "https://www.linkedin.com/in/omkar-mishra-b3677b246/",
    twitter: "https://x.com/Omkar____Mishra",
    portfolio: "https://omkarmishradev.vercel.app",
  },

  // Contact section
  contact: {
    heading: "Contact.",
    label: "Get in touch",
    ctaText: "Send",
  },

  // Footer
  footer: {
    tagline:
      "Always open to interesting conversations and collaboration opportunities.",
    copyright: "Built with care and intent by Omkar • © 2026 All rights reserved",
  },

  // Nav links (map to section ids on the page)
  navLinks: ["About", "Skills", "Projects", "Contact"],

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

  // Projects — set each project's own GitHub repo + live URL.
  projects: [
    {
      title: "Nalmifx - Forex Trading Platform",
      blurb:
        " A forex/crypto trading platform with features include live trading, copy trading, prop trading, an IB(Introducing Broker) affiliate system, and a multi-tenant admin panel.",
      tags: ["React", "Node.js", "MongoDB", "CI/CD", "Redux Toolkit","Nginx", "PM2"],
      image: "/projects/nalmifx.png",
      github: "https://github.com/DevTechi-ux/nalmifx",
      live: "https://nalmifx.com",
      featured: true,
    },
    {
      title: "AchievR ",
      blurb:
        "A centralized platform for students to record, verify, and showcase academic, co-curricular, and extracurricular achievements in one secure digital portfolio.",
      tags: ["React", "Express", "Node.js", "JWT", "MongoDB", "Tailwind"],
      image: "/projects/achievr.png",
      github: "https://github.com/OmkarMishr/HackTitans-AchievR",
      live: "https://dnvba07nlq4dm.cloudfront.net/",
    },
    {
      title: "E-Tunes",
      blurb:
        "Emotion-Based Music Recommender, a Python and Streamlit-based web application that detects a user’s real-time emotion from facial expressions and text sentiment using computer vision and ML models, then recommends mood-aligned songs by mapping emotions to curated playlists via YouTube APIs.",
      tags: ["Python", "Streamlit", "OpenCV", "Machine Learning"],
      image: "/projects/e-tunes.png",
      github: "https://github.com/kunal1618/Emotion-based-music-recommendation",
      live: "https://e-tunes.vercel.app",
    },
    {
      title: "Hotel Management with CMS",
      blurb:
        "A comprehensive hotel management system with a content management interface for easy updates and maintenance.",
      tags: ["Next.js", "sanity", "MongoDB", "Tailwind"],
      image: "/projects/hotel.png",
      github: "https://github.com/OmkarMishr/hotel-management",
      live: "https://hotel-management-hd3zfaaqa-omkarmishrs-projects.vercel.app/",
    },
    {
      title: "Customer Relationship Management",
      blurb:
        "A full-stack CRM for managing leads, customers and communication — with integrated WhatsApp messaging via the Meta Developer API and transactional email over SMTP.",
      tags: ["React", "Node.js", "MongoDB", "Meta Developer", "SMTP"],
      image: "/projects/crm.png",
      github: "https://github.com/OmkarMishr/Finvision-CRM",
      live: "https://www.crm.myfinvision.com/",
    },
    {
      title: "Developer Portfolio & Blog",
      blurb:
        "Content-driven site with MDX, animated transitions, and a fully static, SEO-optimized build.",
      tags: ["Next.js", "Scroll-Trigger", "GSAP", "Tailwind"],
      image: "/projects/portfolio.png",
      github: "https://github.com/OmkarMishr/portfoliov2",
      live: "https://omkarmishradev.vercel.app",
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
