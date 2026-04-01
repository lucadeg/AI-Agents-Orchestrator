import { RemotionHero } from "../components/RemotionHero";
import { managedProjects } from "../lib/projects";

async function loadStatus() {
  const apiUrl = process.env.NEXT_PUBLIC_ORCHESTRATOR_API_URL || "http://localhost:5000";
  try {
    const res = await fetch(`${apiUrl}/api/status`, { cache: "no-store" });
    if (!res.ok) {
      return { status: "unreachable" };
    }
    return await res.json();
  } catch {
    return { status: "offline" };
  }
}

export default async function Home() {
  const runtime = await loadStatus();

  return (
    <main className="container">
      <h1>Agent Hub NextAIO</h1>
      <p className="muted">Control center per orchestrare branch MVX Apocalypse e runtime agentico.</p>

      <div className="card" style={{ marginBottom: 16 }}>
        <RemotionHero />
      </div>

      <div className="grid">
        <section className="card">
          <h3>Runtime Orchestrator</h3>
          <p className="muted">Endpoint: {process.env.NEXT_PUBLIC_ORCHESTRATOR_API_URL || "http://localhost:5000"}</p>
          <span className="pill">status: {String(runtime?.status || "unknown")}</span>
        </section>

        <section className="card">
          <h3>Branch Registry</h3>
          {managedProjects.map((project) => (
            <div key={project.key} style={{ marginBottom: 10 }}>
              <strong>{project.key}</strong>
              <div className="muted">{project.repo}</div>
              <span className="pill" style={{ marginRight: 8 }}>
                {project.branch}
              </span>
              <span className="pill">{project.runtime}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
