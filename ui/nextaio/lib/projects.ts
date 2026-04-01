export type ManagedProject = {
  key: string;
  displayName: string;
  repo: string;
  branch: string;
  runtime: string;
  healthPath: string;
  ownership: string;
};

export const managedProjects: ManagedProject[] = [
  {
    key: "ultra-claude",
    displayName: "Ultra Claude Runtime",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "ultra-claude",
    runtime: "multi-service",
    healthPath: "/health",
    ownership: "ai-runtime",
  },
  {
    key: "platform",
    displayName: "Platform Gateways",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "platform",
    runtime: "python+node",
    healthPath: "/health/ready",
    ownership: "integration",
  },
  {
    key: "ultra-studio",
    displayName: "Ultra Studio Product Surface",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "ultra-studio",
    runtime: "product-ui",
    healthPath: "/api/health",
    ownership: "frontend",
  },
];

export const templateProjects: ManagedProject[] = [
  {
    key: "template-quarkus-archetype",
    displayName: "Template - Quarkus Archetype",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "template/quarkus-archetype",
    runtime: "java+quarkus",
    healthPath: "/q/health/ready",
    ownership: "template",
  },
  {
    key: "template-rust-archetype",
    displayName: "Template - Rust Archetype",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "template/rust-archetype",
    runtime: "rust",
    healthPath: "/health/ready",
    ownership: "template",
  },
  {
    key: "template-python-archetype",
    displayName: "Template - Python Archetype",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "template/python-archetype",
    runtime: "python",
    healthPath: "/health/ready",
    ownership: "template",
  },
  {
    key: "template-awesome-n8n-templates",
    displayName: "Template - Awesome n8n Templates",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "template/awesome-n8n-templates",
    runtime: "n8n",
    healthPath: "/healthz",
    ownership: "template",
  },
  {
    key: "template-flutter-mvvm-template",
    displayName: "Template - Flutter MVVM",
    repo: "https://github.com/lucadeg/MVX-Apocalypse",
    branch: "template/flutter-mvvm-template",
    runtime: "flutter",
    healthPath: "/",
    ownership: "template",
  },
];
