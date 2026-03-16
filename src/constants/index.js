export const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable, production-ready web applications from front to back. I design responsive UIs with React.js and Next.js while engineering robust backend services with Node.js and Express.js.",
    items: [
      { title: "React.js & Next.js App Router" },
      { title: "Node.js & Express.js Backend" },
      { title: "TypeScript for Type-Safe Development" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Designing and training deep learning models for real-world applications. From graph neural networks for drug interaction prediction to reinforcement learning agents, I bring AI into production.",
    items: [
      { title: "PyTorch & TensorFlow Model Training" },
      { title: "Graph Neural Networks & Deep Learning" },
      { title: "Reinforcement Learning & Q-Learning" },
    ],
  },
  {
    title: "Computer Vision",
    description:
      "Building real-time vision systems for autonomous applications. Experienced in object detection pipelines achieving 96%+ accuracy for mission-critical drone navigation systems.",
    items: [
      { title: "YOLOv8 Object Detection" },
      { title: "OpenCV Real-time Processing" },
      { title: "Autonomous Navigation Integration" },
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Architecting reliable, data-driven backends with clean REST API design. Integrating databases, third-party services, and state management for seamless full-stack experiences.",
    items: [
      { title: "RESTful API Design & Integration" },
      { title: "MongoDB & Database Architecture" },
      { title: "React Query & State Management" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Drug-Drug Interaction Prediction",
    description:
      "Deep learning graduation project using SMILES strings and graph neural networks to predict drug-drug interactions. Implemented advanced AI techniques for pharmaceutical safety analysis with high-accuracy predictions.",
    href: "https://khemical.productvalidation.live/login",
    image: "/assets/projects/ddi.webp",
    bgImage: "/assets/projects/ddi.webp",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "PyTorch" },
      { id: 3, name: "Graph Neural Networks" },
      { id: 4, name: "Deep Learning" },
    ],
  },
  {
    id: 2,
    name: "Kando — Kanban Task Manager",
    description:
      "A modern, intuitive Kanban-based task manager designed to bring clarity and control to any project. Built for teams and individuals who value efficiency, transforming chaotic task lists into clear, actionable visual boards.",
    href: "https://petermina.github.io/Kando/",
    image: "/assets/projects/kando.webp",
    bgImage: "/assets/projects/kando.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Kanban" },
    ],
  },
  {
    id: 3,
    name: "Snake AI — Reinforcement Learning Agent",
    description:
      "A reinforcement learning agent that learns to play the classic Snake game using a neural network and Q-learning. Features a full game implementation with rendering, model architecture with training logic, and an agent that learns from experience.",
    href: "https://github.com/PeterMina/Snake-AI-Trainer",
    image: "/assets/projects/snake.webp",
    bgImage: "/assets/projects/snake.webp",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "PyTorch" },
      { id: 3, name: "Reinforcement Learning" },
      { id: 4, name: "Q-Learning" },
    ],
  },
  {
    id: 4,
    name: "Autonomous Drone System (Alex Eagles)",
    description:
      "Computer vision system for autonomous drone navigation using YOLOv8 object detection with 96% accuracy. Integrated real-time processing capabilities for intelligent flight path optimization.",
    href: "https://alex-eagles.com/",
    image: "/assets/projects/alexeagles.webp",
    bgImage: "/assets/projects/alexeagles.webp",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "YOLOv8" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "Computer Vision" },
    ],
  },
  {
    id: 5,
    name: "NASA Space Apps 2024 — Global Nominee",
    description:
      "Exoplanet exploration platform with an integrated AI chatbot for the NASA Space Apps Challenge 2024. Features interactive visualizations and an intelligent query system for space data analysis. Recognized as a Global Nominee.",
    href: "https://spaceeagles.vercel.app",
    image: "/assets/projects/spaceeagles.webp",
    bgImage: "/assets/projects/spaceeagles.webp",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "AI Chatbot" },
      { id: 3, name: "Data Visualization" },
    ],
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/PeterMina" },
  { name: "CV", href: "/resume.pdf" },
];
