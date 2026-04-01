export type RuntimeStatus = {
  status?: string;
  last_task?: string;
  updated_at?: string;
};

const orchestratorUrl =
  process.env.NEXT_PUBLIC_ORCHESTRATOR_API_URL || "http://localhost:5000";

export async function fetchRuntimeStatus(): Promise<RuntimeStatus> {
  try {
    const response = await fetch(`${orchestratorUrl}/api/status`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return { status: "unreachable" };
    }
    return (await response.json()) as RuntimeStatus;
  } catch {
    return { status: "offline" };
  }
}

export function getOrchestratorUrl(): string {
  return orchestratorUrl;
}
