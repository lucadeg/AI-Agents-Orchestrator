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
