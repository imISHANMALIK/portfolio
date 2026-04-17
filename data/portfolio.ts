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
  title: "Agentic Developer",
  titleAccent: "& ML Researcher",
  subtitle: "NYU · Reinforcement Learning · Quantitative Finance · Optimal Transport",
  bio: "Building intelligent systems at the intersection of deep RL, optimal transport theory, and financial markets. Focused on agentic AI workflows and automated quantitative research.",
  location: "New York, NY",
  affiliation: "New York University",
  terminalLines: [
    "$ init_agent --profile=quant-rl --env=research",
    "> Scanning /research/papers...  [42 found]",
    "> Loading Finance-v2 gymnasium env...",
    "> PPO policy network: initialized  ✓",
    "> Optimal transport kernel: loaded  ✓",
    "> Multi-agent pipeline: connected  ✓",
    "> [READY] Agentic workflow active.",
  ],
  links: {
    github: "https://github.com/ishanmalik",
    linkedin: "https://linkedin.com/in/ishanmalik",
    email: "ishanmalik2002@gmail.com",
  },
};

// ── Research ────────────────────────────────────────────────────────────────
export const RESEARCH: ResearchItem[] = [
  {
    id: 1,
    title: "Optimal Transport for Portfolio Rebalancing Under Transaction Costs",
    collaborators: ["Add NYU Collaborators Here"],
    abstract:
      "We investigate Wasserstein-2 distance as a regularizer for sequential portfolio optimization, enabling smooth distributional transitions that minimize market impact while maintaining target factor exposures.",
    tags: ["Optimal Transport", "Portfolio Optimization", "Wasserstein", "Finance"],
    status: "In Progress",
    year: "2025",
    venue: null,
    arxiv: null,
  },
  {
    id: 2,
    title: "Deep Reinforcement Learning for Adaptive Market Making",
    collaborators: ["Add NYU Collaborators Here"],
    abstract:
      "A continuous-action RL framework for bid-ask spread strategies that adapts to non-stationary LOB dynamics using adversarial market simulation and inventory risk penalties.",
    tags: ["Reinforcement Learning", "Market Making", "LOB Dynamics", "SAC"],
    status: "In Progress",
    year: "2025",
    venue: null,
    arxiv: null,
  },
  {
    id: 3,
    title: "Agentic LLM Pipelines for Quantitative Research Automation",
    collaborators: ["Individual Research"],
    abstract:
      "Multi-agent LLM systems for automating quantitative hypothesis generation, statistical backtesting, and research synthesis. Exploring tool-use and code-execution agents for finance.",
    tags: ["Agentic AI", "LLM", "Multi-Agent Systems", "Automation"],
    status: "Exploratory",
    year: "2025",
    venue: null,
    arxiv: null,
  },
];

// ── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "RL Trading Agent",
    description:
      "PPO-based equity trading agent with Sharpe-ratio reward shaping, drawdown penalties, and a realistic backtesting harness built on Gymnasium.",
    tags: ["PyTorch", "Gymnasium", "PPO", "Finance"],
    github: "https://github.com/",
    paper: null,
    highlight: "violet",
  },
  {
    id: 2,
    title: "Sinkhorn OT Toolkit",
    description:
      "JAX-accelerated implementation of entropic optimal transport including Sinkhorn-Knopp, debiased Sinkhorn, and multi-marginal variants.",
    tags: ["JAX", "Optimal Transport", "Sinkhorn", "GPU"],
    github: "https://github.com/",
    paper: null,
    highlight: "blue",
  },
  {
    id: 3,
    title: "Agentic Research Pipeline",
    description:
      "Claude-powered multi-agent system for automated literature review, hypothesis generation, and experimental design in ML research.",
    tags: ["Claude API", "MCP", "Agents", "Python"],
    github: "https://github.com/",
    paper: null,
    highlight: "violet",
  },
  {
    id: 4,
    title: "LOB Market Simulator",
    description:
      "High-fidelity limit order book simulator with configurable market impact models, adversarial agents, and Gymnasium-compatible interface.",
    tags: ["Python", "Simulation", "Market Microstructure"],
    github: "https://github.com/",
    paper: null,
    highlight: "blue",
  },
  {
    id: 5,
    title: "Neural Hawkes Process",
    description:
      "Neural temporal point process for modeling order arrival intensity in HFT data, using a transformer-based intensity function.",
    tags: ["PyTorch", "TPP", "HFT", "Finance"],
    github: "https://github.com/",
    paper: null,
    highlight: "violet",
  },
  {
    id: 6,
    title: "Claude Code Extensions",
    description:
      "Custom MCP server and hook configurations extending Claude Code for quantitative research and ML experiment workflows.",
    tags: ["Claude Code", "MCP", "TypeScript", "DevTools"],
    github: "https://github.com/",
    paper: null,
    highlight: "blue",
  },
];

// ── Tech Stack ───────────────────────────────────────────────────────────────
export const TECH_STACK: TechCategory[] = [
  {
    category: "AI / ML Frameworks",
    color: "violet",
    items: [
      { name: "PyTorch", level: 90, iconName: "brain" },
      { name: "JAX / Flax", level: 80, iconName: "zap" },
      { name: "Gymnasium / SB3", level: 85, iconName: "activity" },
      { name: "Hugging Face", level: 75, iconName: "cpu" },
    ],
  },
  {
    category: "Agentic Dev Tools",
    color: "blue",
    items: [
      { name: "Claude Code", level: 95, iconName: "terminal" },
      { name: "Windsurf IDE", level: 90, iconName: "layers" },
      { name: "Claude API / MCP", level: 85, iconName: "bot" },
      { name: "Cursor", level: 80, iconName: "code-2" },
    ],
  },
  {
    category: "Languages & Systems",
    color: "violet",
    items: [
      { name: "Python", level: 95, iconName: "code" },
      { name: "TypeScript / JS", level: 80, iconName: "braces" },
      { name: "CUDA / C++", level: 65, iconName: "cpu" },
      { name: "Rust", level: 55, iconName: "wrench" },
    ],
  },
  {
    category: "Infrastructure & Web",
    color: "blue",
    items: [
      { name: "Next.js / React", level: 85, iconName: "globe" },
      { name: "Docker / K8s", level: 70, iconName: "box" },
      { name: "Git / GitHub", level: 90, iconName: "git-branch" },
      { name: "Linux / Shell", level: 85, iconName: "terminal" },
    ],
  },
];
