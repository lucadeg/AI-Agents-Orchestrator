import { NextRequest, NextResponse } from "next/server";

const orchestratorApi =
  process.env.NEXT_PUBLIC_ORCHESTRATOR_API_URL || "http://localhost:5000";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    action?: "execute" | "status";
    payload?: Record<string, unknown>;
  };

  const action = body.action || "status";
  const endpoint = action === "execute" ? "/api/execute" : "/api/status";
  const method = action === "execute" ? "POST" : "GET";

  const response = await fetch(`${orchestratorApi}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "POST" ? JSON.stringify(body.payload || {}) : undefined,
    cache: "no-store",
  });

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
