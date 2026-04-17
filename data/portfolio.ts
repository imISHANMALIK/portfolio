export type ResearchStatus = "In Progress" | "Exploratory" | "Completed" | "Published";

export type ResearchItem = {
  id: number;
  title: string;
  collaborators: string[];
  abstract: string;
  tags: string[];
  status: ResearchStatus;
  year: string;
  venue: string | null;
  arxiv: string | null;
};

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  paper: string | null;
  highlight: "violet" | "blue";
};

export type TechItem = {
  name: string;
  level: number;
  iconName: string;
};

export type TechCategory = {
  category: string;
  color: "violet" | "blue";
  items: TechItem[];
};

// ── Hero ────────────────────────────────────────────────────────────────────
export const HERO_DATA = {
  name: "Ishan Malik",
  title: "ML Researcher",
  titleAccent: "& AI Developer",
  subtitle: "NYU · Healthcare AI · Self-Supervised Learning · Distributed Systems",
  bio: "Active contributor at the NYU Center for Data Science with a core research focus on advanced AI techniques, including self-supervised learning and large-scale distributed systems. Driven by interests in computational genetics and healthcare AI.",
  location: "New York, NY",
  affiliation: "New York University",
  terminalLines: [
    "$ init_profile --focus=healthcare-ai --env=nyu-cds",
    "> Loading research context...  [3 publications found]",
    "> Healthcare AI pipeline: active  ✓",
    "> Self-supervised learning: initialized  ✓",
    "> CMU Collaboration: connected  ✓",
    "> Disease progression models: loaded  ✓",
    "> [READY] Advancing medical AI.",
  ],
  links: {
    github: "https://github.com/imISHANMALIK108",
    linkedin: "https://www.linkedin.com/in/ishanmalik108/",
    email: "im2854@nyu.edu",
  },
};

// ── Research ────────────────────────────────────────────────────────────────
export const RESEARCH: ResearchItem[] = [
  {
    id: 1,
    title: "Disease Progression Modeling with Optimal Transport",
    collaborators: ["Carnegie Mellon University"],
    abstract:
      "Reproduced and scaled scientific data science pipelines in Python using Optimal Transport for large-scale disease progression modeling. Boosted reproducibility of research code and developed scalable implementations for real-life biomedical use.",
    tags: ["Optimal Transport", "Disease Modeling", "Python", "Biomedical AI"],
    status: "Completed",
    year: "2025",
    venue: "CMU Collaboration",
    arxiv: null,
  },
  {
    id: 2,
    title: "Improving Fake News Detection using AI",
    collaborators: ["Individual Research"],
    abstract:
      "Research paper on leveraging advanced AI and NLP techniques to improve the detection of fake news at scale. Presented at the IEEE Global AI Summit 2024.",
    tags: ["NLP", "Fake News Detection", "Deep Learning", "AI"],
    status: "Published",
    year: "2024",
    venue: "IEEE Global AI Summit 2024, Bennett University",
    arxiv: null,
  },
  {
    id: 3,
    title: "Validation and Evaluation Matrix",
    collaborators: ["Individual Research"],
    abstract:
      "Authored a book chapter on validation and evaluation methodologies for AI models applied to digital medicinal imagery, covering metrics, testing frameworks, and clinical validation pipelines.",
    tags: ["Healthcare AI", "Medical Imaging", "Evaluation", "AI"],
    status: "Published",
    year: "2024",
    venue: "Computer-Assisted Analysis for Digital Medicinal Imagery",
    arxiv: null,
  },
];

// ── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "EnamelX: AI-Powered Dental X-Ray Analysis",
    description:
      "YOLO-based detection AI model to classify dental pathologies from X-ray datasets. Achieved >80% IoU using YOLOv8 with preprocessing pipelines for normalization, annotation alignment, and augmentation via Roboflow. Aims at affordable AI-driven dental diagnostics.",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "Healthcare AI"],
    github: null,
    paper: null,
    highlight: "violet",
  },
  {
    id: 2,
    title: "Fog-Centric IoT Healthcare System",
    description:
      "Real-time IoT monitoring framework using smart sensors and ML to predict diabetic patients' vitals with >85% accuracy. Reduced latency by deploying computations on Fog nodes for near real-time healthcare AI analytics.",
    tags: ["IoT", "Fog Computing", "ML", "Healthcare"],
    github: null,
    paper: null,
    highlight: "blue",
  },
  {
    id: 3,
    title: "VERDANT – AI Wellness App",
    description:
      "Personalized wellness platform with NLP and scheduling AI, advancing to Round 2 of Microsoft Imagine Cup 2024 and receiving a $2,500 Azure AI Grant. Integrated Azure Cloud Services for secure, scalable deployments.",
    tags: ["NLP", "Azure", "Microsoft Imagine Cup", "Vercel"],
    github: null,
    paper: null,
    highlight: "violet",
  },
  {
    id: 4,
    title: "Graphical Image Processing Toolkit",
    description:
      "Python desktop toolkit (Tkinter + OpenCV) with real-time image manipulation including edge detection, color transformations, histogram equalization, and a modular GUI with plugin support.",
    tags: ["Python", "OpenCV", "Tkinter", "Computer Vision"],
    github: null,
    paper: null,
    highlight: "blue",
  },
  {
    id: 5,
    title: "AI Chatbot – Domestic Violence Support",
    description:
      "Conversational AI pipelines using Python, NLP, and cloud APIs for IIT Madras, improving chatbot response accuracy by ~35% and reducing AI model inference time by 20% through efficient pre-processing and caching.",
    tags: ["NLP", "Python", "Cloud APIs", "Chatbot"],
    github: null,
    paper: null,
    highlight: "violet",
  },
  {
    id: 6,
    title: "ML-Based Web Scraping Pipeline",
    description:
      "Machine learning-based web scraping pipeline for data science analysis of government tenders at GeMTech PARAS Solutions. Led a team of 6 to build an AI chatbot that automated customer support, reducing manual queries by 40%.",
    tags: ["Python", "Scikit-learn", "ML", "Data Science"],
    github: null,
    paper: null,
    highlight: "blue",
  },
];

// ── Tech Stack ───────────────────────────────────────────────────────────────
export const TECH_STACK: TechCategory[] = [
  {
    category: "AI & Machine Learning",
    color: "violet",
    items: [
      { name: "PyTorch", level: 88, iconName: "brain" },
      { name: "TensorFlow / Keras", level: 82, iconName: "zap" },
      { name: "Scikit-learn", level: 90, iconName: "activity" },
      { name: "OpenCV", level: 80, iconName: "cpu" },
    ],
  },
  {
    category: "Languages",
    color: "blue",
    items: [
      { name: "Python", level: 95, iconName: "code" },
      { name: "SQL", level: 85, iconName: "database" },
      { name: "R", level: 72, iconName: "bar-chart-2" },
      { name: "C / C++ / Java", level: 65, iconName: "cpu" },
    ],
  },
  {
    category: "Data Science & Viz",
    color: "violet",
    items: [
      { name: "Pandas / NumPy", level: 92, iconName: "layers" },
      { name: "Matplotlib", level: 85, iconName: "bar-chart-2" },
      { name: "Tableau / Power BI", level: 75, iconName: "pie-chart" },
      { name: "Apache Spark", level: 68, iconName: "zap" },
    ],
  },
  {
    category: "Systems & Cloud",
    color: "blue",
    items: [
      { name: "Azure Cloud", level: 78, iconName: "cloud" },
      { name: "Distributed Systems", level: 80, iconName: "network" },
      { name: "REST APIs", level: 85, iconName: "globe" },
      { name: "Git / GitHub", level: 92, iconName: "git-branch" },
    ],
  },
];
