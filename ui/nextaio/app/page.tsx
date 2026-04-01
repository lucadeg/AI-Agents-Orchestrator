import { RemotionHero } from "../components/RemotionHero";
import { ActionConsole } from "../components/ActionConsole";
import { BranchCard } from "../components/BranchCard";
import { managedProjects, templateProjects } from "../lib/projects";
import { fetchRuntimeStatus, getOrchestratorUrl } from "../lib/orchestrator";

export default async function Home() {
  const runtime = await fetchRuntimeStatus();

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
          <p className="muted">Endpoint: {getOrchestratorUrl()}</p>
          <span className="pill">status: {String(runtime?.status || "unknown")}</span>
          <div className="muted" style={{ marginTop: 10 }}>
            last task: {runtime?.last_task || "n/a"}
          </div>
        </section>

        <section className="card">
          <h3>Branch Registry</h3>
          {managedProjects.map((project) => <BranchCard key={project.key} project={project} />)}
        </section>
      </div>

      <div style={{ marginTop: 16 }}>
        <ActionConsole />
      </div>

      <section className="card" style={{ marginTop: 16 }}>
        <h3>Template Branch Catalog</h3>
        <p className="muted">
          Archetype branches available for fast project bootstrap under MVX Apocalypse.
        </p>
        {templateProjects.map((project) => (
          <BranchCard key={project.key} project={project} />
        ))}
      </section>
    </main>
  );
}
