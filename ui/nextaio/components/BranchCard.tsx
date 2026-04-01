import type { ManagedProject } from "../lib/projects";

export function BranchCard({ project }: { project: ManagedProject }) {
  return (
    <div style={{ marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #2b385c" }}>
      <strong>{project.displayName}</strong>
      <div className="muted">{project.repo}</div>
      <div style={{ marginTop: 8 }}>
        <span className="pill" style={{ marginRight: 8 }}>
          {project.branch}
        </span>
        <span className="pill" style={{ marginRight: 8 }}>
          {project.runtime}
        </span>
        <span className="pill">{project.ownership}</span>
      </div>
    </div>
  );
}
