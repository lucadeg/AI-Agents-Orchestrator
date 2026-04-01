"use client";

import { useState } from "react";

export function ActionConsole() {
  const [task, setTask] = useState("Run health checks on all MVX branches");
  const [responseText, setResponseText] = useState("No action executed yet.");
  const [loading, setLoading] = useState(false);

  const runAction = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/control", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "execute",
          payload: {
            task,
            workflow: process.env.NEXT_PUBLIC_DEFAULT_WORKFLOW || "default",
            max_iterations: 2,
            is_followup: false,
          },
        }),
      });
      const data = await response.json();
      setResponseText(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponseText(`Execution failed: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h3>Control Actions</h3>
      <p className="muted">Submit orchestrator tasks directly from the control room.</p>
      <textarea
        value={task}
        onChange={(event) => setTask(event.target.value)}
        style={{
          width: "100%",
          minHeight: 100,
          borderRadius: 8,
          border: "1px solid #2f4068",
          background: "#0f1629",
          color: "#e8eefb",
          padding: 10,
        }}
      />
      <button
        type="button"
        disabled={loading}
        onClick={runAction}
        style={{ marginTop: 12, padding: "10px 16px", borderRadius: 8, cursor: "pointer" }}
      >
        {loading ? "Executing..." : "Execute Task"}
      </button>
      <pre
        style={{
          marginTop: 12,
          background: "#0d1424",
          border: "1px solid #2f4068",
          borderRadius: 8,
          padding: 10,
          whiteSpace: "pre-wrap",
        }}
      >
        {responseText}
      </pre>
    </section>
  );
}
