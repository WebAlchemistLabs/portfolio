import { useEffect, useMemo, useState } from "react";

const TABS = [
  { key: "architecture", label: "Architecture" },
  { key: "impact", label: "Impact" },
  { key: "demo", label: "Demo" },
  { key: "stack", label: "Stack" },
];

function ArchitectureTab({ architectureFlow = [] }) {
  return (
    <div className="insights-architecture-flow" role="list" aria-label="System architecture flow">
      {architectureFlow.map((step, index) => (
        <div className="insights-architecture-step-wrap" key={step.title}>
          <article className="insights-architecture-step" role="listitem">
            <span className="insights-kicker">Stage {index + 1}</span>
            <h4>{step.title}</h4>
            <p className="insights-muted">{step.subtitle}</p>
            <p>{step.detail}</p>
          </article>
          {index < architectureFlow.length - 1 && (
            <span className="insights-architecture-arrow">{"->"}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function ImpactTab({ businessImpact }) {
  if (!businessImpact) return null;

  return (
    <div className="insights-impact-grid">
      <article className="insights-impact-card">
        <h4>Problem</h4>
        <p>{businessImpact.problem}</p>
      </article>
      <article className="insights-impact-card">
        <h4>Solution</h4>
        <p>{businessImpact.solution}</p>
      </article>
      <article className="insights-impact-card">
        <h4>Value</h4>
        <p>{businessImpact.value}</p>
      </article>
      <article className="insights-impact-card">
        <h4>Real use case</h4>
        <p>{businessImpact.useCase}</p>
      </article>
    </div>
  );
}

function DemoTab({ microDemo }) {
  const steps = microDemo?.steps || [];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
  }, [microDemo]);

  if (steps.length === 0) {
    return null;
  }

  const selected = steps[activeStep];

  return (
    <div className="insights-demo-shell">
      <div className="insights-demo-head">
        <h4>{microDemo.title}</h4>
        <p>{microDemo.summary}</p>
      </div>

      <div className="insights-demo-steps">
        {steps.map((step, index) => (
          <button
            type="button"
            key={step.title}
            className={`insights-demo-step ${index === activeStep ? "active" : ""}`}
            onClick={() => setActiveStep(index)}
          >
            <span>Step {index + 1}</span>
            <strong>{step.title}</strong>
            <p>{step.preview}</p>
          </button>
        ))}
      </div>

      <article className="insights-demo-output" aria-live="polite">
        <p className="insights-kicker">Simulated interaction</p>
        <h5>{selected.title}</h5>
        <p>{selected.detail}</p>
        <p className="insights-demo-outcome">{selected.outcome}</p>
      </article>
    </div>
  );
}

function StackTab({ techStack = [] }) {
  return (
    <div className="insights-stack-grid">
      {techStack.map((group) => (
        <article className="insights-stack-card" key={group.category}>
          <h4>{group.category}</h4>
          <div className="insights-stack-tools">
            {group.tools.map((tool) => (
              <span className="insights-stack-tool" key={`${group.category}-${tool}`}>
                {tool}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProjectInsightsOverlay({
  project,
  isOpen,
  onClose,
}) {
  const [activeTab, setActiveTab] = useState("architecture");

  useEffect(() => {
    if (!isOpen) return undefined;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setActiveTab("architecture");
  }, [isOpen, project?.id]);

  const activeContent = useMemo(() => {
    if (!project) return null;

    if (activeTab === "architecture") {
      return <ArchitectureTab architectureFlow={project.architectureFlow} />;
    }

    if (activeTab === "impact") {
      return <ImpactTab businessImpact={project.businessImpact} />;
    }

    if (activeTab === "demo") {
      return <DemoTab microDemo={project.microDemo} />;
    }

    return <StackTab techStack={project.techStack} />;
  }, [activeTab, project]);

  if (!isOpen || !project) return null;

  return (
    <div className="insights-overlay" onClick={onClose}>
      <div className="insights-panel" onClick={(event) => event.stopPropagation()}>
        <div className="insights-head">
          <div>
            <p className="eyebrow">Project Insights</p>
            <h3>{project.title}</h3>
            <p className="insights-muted">Compact case study view with architecture, impact, demo, and stack.</p>
          </div>
          <button type="button" className="insights-close-btn" onClick={onClose} aria-label="Close insights">
            X
          </button>
        </div>

        <div className="insights-tab-row" role="tablist" aria-label="Project insights tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`insights-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="insights-content">{activeContent}</div>

        <div className="insights-footer">
          <a href="/contact" className="primary-btn">Start your project</a>
          <button type="button" className="secondary-btn" onClick={onClose}>Back to projects</button>
        </div>
      </div>
    </div>
  );
}
