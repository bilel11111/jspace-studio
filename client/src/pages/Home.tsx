/**
 * Signal Ledger design reminder: Swiss editorial systems meet scientific instrumentation.
 * Make task state visible through a three-field ledger, measured signal color, and readable density.
 */
import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  Clock3,
  Command,
  FileCheck2,
  Filter,
  FlaskConical,
  LayoutDashboard,
  ListChecks,
  Menu,
  MoreHorizontal,
  PanelRight,
  Play,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";

type TimelineEvent = {
  id: number;
  title: string;
  body: string;
  time: string;
  tone: "active" | "verified" | "warning" | "neutral";
  icon: "tool" | "check" | "warning" | "focus";
};

const initialEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Repository audit opened",
    body: "Scope, capability boundaries, and existing integration paths were captured in the ledger.",
    time: "09:42",
    tone: "active",
    icon: "focus",
  },
  {
    id: 2,
    title: "Evidence boundary named",
    body: "Benchmarks are retained as source material; comparative claims need a documented evaluation context.",
    time: "09:49",
    tone: "warning",
    icon: "warning",
  },
  {
    id: 3,
    title: "Skill routing inspected",
    body: "The entry gate, selective modules, and controller responsibilities are now mapped to the workspace.",
    time: "10:01",
    tone: "verified",
    icon: "check",
  },
  {
    id: 4,
    title: "Next action committed",
    body: "Build the visual console while preserving the rule: it records state; it does not choose solutions.",
    time: "10:08",
    tone: "neutral",
    icon: "tool",
  },
];

const modules = [
  { name: "Directed focus", desc: "Hold the one item that cannot drift.", status: "Loaded" },
  { name: "Broadcast", desc: "Keep decisions shared across dependent work.", status: "Ready" },
  { name: "Empirics", desc: "Turn a stalled derivation into a bounded test.", status: "Ready" },
  { name: "Self-monitoring", desc: "Route uncertainty into a concrete next move.", status: "Loaded" },
];

const toneIcon = {
  tool: Terminal,
  check: CircleCheck,
  warning: CircleAlert,
  focus: Target,
};

export default function Home() {
  const [mode, setMode] = useState("loop");
  const [activeModule, setActiveModule] = useState("Directed focus");
  const [events, setEvents] = useState(initialEvents);
  const [warningOpen, setWarningOpen] = useState(true);
  const [inspectorOpen, setInspectorOpen] = useState(false);

  const liveEventCount = useMemo(
    () => events.filter((event) => event.tone === "active" || event.tone === "neutral").length,
    [events],
  );

  function addCheckpoint() {
    const recordedEvent: TimelineEvent = {
      id: Date.now(),
      title: "Checkpoint recorded",
      body: "The visual console is now available as a local interactive prototype with transparent demo state.",
      time: "Now",
      tone: "verified",
      icon: "check",
    };
    setEvents((current) => [recordedEvent, ...current]);
    toast.success("Checkpoint recorded", {
      description: "Coverage: interface, interaction paths, and responsive layout.",
    });
  }

  function chooseMode(nextMode: string) {
    setMode(nextMode);
    toast("Pass updated", {
      description: `${nextMode.toUpperCase()} now frames the workspace demonstration.`,
    });
  }

  return (
    <main className="studio-shell">
      <aside className="brand-rail" aria-label="J-Space Studio navigation">
        <div className="brand-lockup">
          <div className="brand-symbol">
            <img
              className="brand-mark"
              src="/manus-storage/jspace-studio-mark_328afbe0.png"
              alt="J-Space Studio mark"
            />
            <span className="brand-signal-dot" />
          </div>
          <div>
            <span className="brand-name">J—SPACE</span>
            <span className="brand-subtitle">SIGNAL LEDGER / 01</span>
          </div>
        </div>

        <div className="rail-rule" />

        <nav className="rail-nav" aria-label="Workspace sections">
          <button className="rail-link is-active" onClick={() => toast("Workspace is already in focus.")}> 
            <LayoutDashboard size={17} />
            <span>Workspace</span>
            <span className="rail-index">01</span>
          </button>
          <button className="rail-link" onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}>
            <Activity size={17} />
            <span>Activity</span>
            <span className="rail-index">02</span>
          </button>
          <button className="rail-link" onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}>
            <BookOpen size={17} />
            <span>Modules</span>
            <span className="rail-index">03</span>
          </button>
          <button className="rail-link" onClick={() => setInspectorOpen((open) => !open)}>
            <PanelRight size={17} />
            <span>Inspector</span>
            <span className="rail-index">04</span>
          </button>
        </nav>

        <div className="rail-footer">
          <p className="micro-label">PASS SELECTION</p>
          <div className="pass-switcher" aria-label="Choose workspace pass">
            {[
              ["fast", "F"],
              ["full", "U"],
              ["loop", "L"],
            ].map(([value, letter]) => (
              <button
                key={value}
                className={mode === value ? "pass-button is-active" : "pass-button"}
                onClick={() => chooseMode(value)}
                aria-pressed={mode === value}
              >
                <span>{letter}</span>
                {value}
              </button>
            ))}
          </div>
          <p className="rail-note">Local interactive demo. No model, API, or task data leaves this browser.</p>
        </div>
      </aside>

      <section className="workspace-field">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => toast("The full navigation is available on larger screens.")} aria-label="Open navigation">
            <Menu size={20} />
          </button>
          <div className="crumbs">
            <span>WORKSPACE</span>
            <ChevronRight size={14} />
            <strong>J-Space product refactor</strong>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" onClick={() => toast("Search is ready for connected workspace data.")} aria-label="Search workspace">
              <Search size={18} />
            </button>
            <button className="icon-button" onClick={() => toast("Filters can be attached to real task history once a data source is connected.")} aria-label="Filter workspace">
              <Filter size={18} />
            </button>
            <button className="user-stamp" onClick={() => toast("Studio owner controls stay local in this prototype.")}>JS</button>
          </div>
        </header>

        <section className="signal-hero" aria-labelledby="workspace-title">
          <img
            className="hero-art"
            src="/manus-storage/jspace-signal-field-hero_39ebf795.png"
            alt="Abstract J-Space signal field"
          />
          <div className="hero-scrim" />
          <div className="hero-instrument" aria-hidden="true">
            <span className="measure-label measure-top">FIELD 01 / LIVE</span>
            <span className="measure-label measure-bottom">TRACE DEPTH / 04</span>
            <i className="measure-line line-one" />
            <i className="measure-line line-two" />
            <i className="measure-point" />
          </div>
          <div className="hero-copy">
            <div className="hero-kicker"><span className="live-dot" />LIVE WORKSPACE / {mode.toUpperCase()} PASS</div>
            <h1 id="workspace-title">Keep the thread.<br />Make the next move visible.</h1>
            <p>
              A working console for the J-Space protocol: one place to carry the goal,
              evidence, questions, and the next action through complex work.
            </p>
          </div>
          <div className="hero-evidence-snapshot" aria-label="Workspace evidence snapshot">
            <div className="snapshot-head"><span>STATE FIELD / 01</span><span>{String(liveEventCount).padStart(2, "0")} TRACES</span></div>
            <div className="snapshot-row"><b>GOAL</b><span>defined</span></div>
            <div className="snapshot-row"><b>VERIFY</b><span>03 recorded</span></div>
            <div className="snapshot-row is-open"><b>OPEN</b><span>01 settle test</span></div>
          </div>
          <div className="hero-actions">
            <button className="primary-action" onClick={addCheckpoint}>
              <Plus size={17} />
              Record checkpoint
            </button>
            <button className="ghost-action" onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}>
              Inspect trace <ArrowUpRight size={16} />
            </button>
          </div>
        </section>

        <section className="task-band" aria-label="Current task">
          <div className="task-band-label">
            <Command size={17} />
            <span>ACTIVE TASK</span>
          </div>
          <p>Analyse the original J-Space suite, convert its hidden mechanics into a transparent product, then verify each delivery boundary.</p>
          <button onClick={() => toast("Task goal copied to the workspace context.")} className="copy-task">Copy goal</button>
        </section>

        <section className="workspace-grid">
          <div className="main-stream">
            <section className="section-head" id="events">
              <div>
                <p className="micro-label">TRACE / 04 EVENTS</p>
                <h2>The signal spine</h2>
              </div>
              <button className="quiet-button" onClick={() => setInspectorOpen(true)}>
                Inspect context <ChevronRight size={16} />
              </button>
            </section>

            <div className="timeline" aria-label="Current workspace event timeline">
              {events.map((event) => {
                const Icon = toneIcon[event.icon];
                return (
                  <article className={`timeline-item ${event.tone}`} key={event.id}>
                    <div className="timeline-node"><Icon size={15} /></div>
                    <div className="timeline-content">
                      <div className="event-heading">
                        <h3>{event.title}</h3>
                        <time>{event.time}</time>
                      </div>
                      <p>{event.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <section className="next-panel" aria-labelledby="next-heading">
              <div className="next-panel-top">
                <div>
                  <p className="micro-label">NEXT / COMMITTED</p>
                  <h2 id="next-heading">Turn the suite into an experience users can inspect at a glance.</h2>
                </div>
                <button className="play-button" onClick={() => toast("The next action is represented in the visual task band.")} aria-label="Review next action">
                  <Play size={17} fill="currentColor" />
                </button>
              </div>
              <div className="next-meta">
                <span><Clock3 size={15} /> Context retained</span>
                <span><ShieldCheck size={15} /> Decision authority stays human</span>
                <span><FileCheck2 size={15} /> Verification required before ship</span>
              </div>
            </section>

            <section className="module-atlas" id="modules" aria-labelledby="module-heading">
              <div className="atlas-copy">
                <p className="micro-label">SELECTIVE LOADING</p>
                <h2 id="module-heading">Use only the machinery the task earns.</h2>
                <p>Open one focused protocol without inflating the workspace. The selected module anchors the active task instead of becoming another dashboard tab.</p>
                <button className="quiet-button" onClick={() => toast(`${activeModule} is selected for the active workspace.`)}>
                  Open {activeModule} <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="atlas-schematic" aria-label="Selective module signal schematic" role="img">
                <span className="atlas-label atlas-top">SELECT / 01</span>
                <span className="atlas-label atlas-bottom">PARK / 08</span>
                <i className="atlas-plane plane-one" /><i className="atlas-plane plane-two" /><i className="atlas-plane plane-three" />
                <b className="atlas-path" /><b className="atlas-anchor anchor-one" /><b className="atlas-anchor anchor-two" />
              </div>
            </section>
          </div>

          <aside className="evidence-rail" aria-label="Workspace evidence and controls">
            <section className="ledger-card goal-card">
              <div className="card-title-row">
                <span className="ledger-chip goal">GOAL</span>
                <MoreHorizontal size={18} />
              </div>
              <p>Deliver a product surface that makes J-Space’s value accessible before installation or prompt configuration.</p>
              <div className="card-rule" />
              <span className="card-foot"><Target size={14} /> Observable in one glance</span>
            </section>

            <section className="ledger-card cores-card">
              <div className="card-title-row">
                <span className="ledger-chip core">CORE / 02 LIVE</span>
                <span className="count-mark">02</span>
              </div>
              <div className="core-item"><span className="core-index">01</span><p><strong>Transparency</strong> — state is made inspectable rather than inferred.</p></div>
              <div className="core-item"><span className="core-index">02</span><p><strong>Selective load</strong> — one active protocol is enough to move work forward.</p></div>
            </section>

            <section className="ledger-card verification-card">
              <div className="card-title-row">
                <span className="ledger-chip verified">VERIFIED</span>
                <CircleCheck size={18} />
              </div>
              <h3>Design ledger</h3>
              <p>3 checkpoints / described coverage</p>
              <div className="evidence-bars" aria-label="Demo verification coverage">
                <span className="bar is-full" />
                <span className="bar is-full" />
                <span className="bar is-full" />
                <span className="bar" />
              </div>
              <button className="card-link" onClick={addCheckpoint}>Record another <Plus size={14} /></button>
            </section>

            {warningOpen && (
              <section className="warning-card">
                <div className="warning-icon"><CircleHelp size={18} /></div>
                <div>
                  <p className="micro-label">OPEN / 01</p>
                  <h3>Which host environment will load the Skill?</h3>
                  <p>Settle this with a documented native loader or direct system-instruction integration.</p>
                  <div className="warning-actions">
                    <button onClick={() => toast("This question remains open until a host is confirmed.")}>View settle test</button>
                    <button className="dismiss" onClick={() => setWarningOpen(false)} aria-label="Dismiss warning">×</button>
                  </div>
                </div>
              </section>
            )}

            <section className="recovery-card">
              <div className="recovery-schematic" aria-label="Recovery signal diagram" role="img">
                <span>STALL / 03</span><span>SHIFT METHOD</span><i /><b /><em />
              </div>
              <div className="recovery-overlay">
                <p className="micro-label">RECOVERY PATH</p>
                <h3>When the trace stalls, name the marker and change the method.</h3>
                <button onClick={() => toast("Recovery playbooks are available in the module system.")}>Inspect recovery path <ChevronRight size={15} /></button>
              </div>
            </section>
          </aside>
        </section>

        <section className="module-drawer" aria-labelledby="module-drawer-title">
          <div className="drawer-heading">
            <div>
              <p className="micro-label">MODULES / SHARED PLAYBOOKS</p>
              <h2 id="module-drawer-title">Name the module. Retain the thread.</h2>
            </div>
            <button className="quiet-button" onClick={() => toast("Module search is ready to attach to a connected skill library.")}>
              <Search size={16} /> Inspect modules
            </button>
          </div>
          <div className="module-list">
            {modules.map((module, index) => (
              <button
                className={activeModule === module.name ? "module-row is-selected" : "module-row"}
                key={module.name}
                onClick={() => setActiveModule(module.name)}
                aria-pressed={activeModule === module.name}
              >
                <span className="module-number">0{index + 1}</span>
                <span className="module-copy"><strong>{module.name}</strong><small>{module.desc}</small></span>
                <span className="module-status">{module.status}</span>
                <ChevronRight size={17} />
              </button>
            ))}
          </div>
        </section>

        <footer className="workspace-footer">
          <span>J-Space Studio / Product concept based on the supplied Apache-2.0 repository</span>
          <span className="footer-right"><FlaskConical size={14} /> DEMO STATE / LOCAL ONLY</span>
        </footer>
      </section>

      {inspectorOpen && (
        <aside className="inspector-panel" aria-label="Context inspector">
          <div className="inspector-head">
            <div>
              <p className="micro-label">INSPECTOR / TASK 01</p>
              <h2>Context, without the fog.</h2>
            </div>
            <button className="close-inspector" onClick={() => setInspectorOpen(false)} aria-label="Close inspector">×</button>
          </div>
          <div className="inspector-section">
            <span>Operating principle</span>
            <p>J-Space persists task state, reports it at seams, and provides verification discipline. The interface exposes those steps without claiming unobservable reasoning.</p>
          </div>
          <div className="inspector-section">
            <span>Evidence boundary</span>
            <p>The activity shown here is illustrative UI data. Connect a real ledger or controller to substitute live task history.</p>
          </div>
          <button className="inspector-cta" onClick={() => { setInspectorOpen(false); addCheckpoint(); }}>
            <Check size={16} /> Confirm current checkpoint
          </button>
        </aside>
      )}
    </main>
  );
}
