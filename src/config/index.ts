import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Enes Demir — Machine Learning Engineer",
  author: "Enes Demir Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/enes-demir.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/enes-demir-051546292/" },
    { text: "Github", href: "https://github.com/EnesDemir143" },
  ],
  socialImage: "/enes-demir.png",
  canonicalURL: "enesdemir.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Enes Demir",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in Turkey I specialize in machine learning, data science and deep learning.",
    email: "enesdemirdev@gmail.com",
  },
  experience: [
  ],
  projects: [

  ],
  about: {
    description: `
      Hi, I’m Enes Demir — a machine learning and deep learning engineer with a strong focus on data science, computer vision, and research-driven development.

      I specialize in building intelligent, scalable systems powered by modern AI techniques such as Vision Transformers, Mamba-based architectures, supervised domain generalization, and graph neural networks. My work often involves solving real-world problems in medical imaging, scientific computing, and high-dimensional data modeling.

      With hands-on experience in end-to-end ML pipelines — from data preprocessing and exploratory analysis to model training, evaluation, and deployment — I enjoy turning complex datasets into meaningful, actionable insights. I’ve also designed and implemented production-ready applications using Python, PyTorch, and cloud-based technologies.

      I love exploring cutting-edge research, experimenting with new architectures, and building innovative solutions that bridge the gap between theoretical machine learning and practical engineering.
    `,
    image: "/enes-demir.png",
  },
};

// #5755ff
