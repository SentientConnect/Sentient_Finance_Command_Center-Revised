const sections = [
  {
    id: "founder",
    title: "Founder Control Tower",
    desc: "Daily command readout for execution, money, risk, and mission alignment.",
    metrics: [
      ["Founder Execution Score", "94%", "Daily completion across money, sales, ops, body, spirit, and strategic actions.", 94],
      ["Mission Alignment", "98%", "Tasks tagged to SentientOS™, AURA™, and MBS priorities.", 98],
      ["Decision Backlog", "7", "Open decisions requiring founder approval or finance signoff.", 64],
      ["Risk Heat", "Medium", "Composite legal, cash, delivery, tech, reputation, and founder capacity signal.", 58],
      ["Critical Path Items", "12", "Items blocking launch, revenue, or operational stability.", 72],
      ["Protected Focus Hours", "18.5", "Weekly uninterrupted build and revenue execution blocks.", 79]
    ]
  },
  {
    id: "finance",
    title: "Finance Command Center",
    desc: "Cash discipline, burn, investor capital, collections, runway, repayment, and Manny dashboard rollup.",
    metrics: [
      ["Cash On Hand", "$0", "Bank, RelayFi, pending deposits, and operating reserves.", 0],
      ["Monthly Burn", "$424", "Known baseline stack: GHL, Vercel, Workspace, Authorize.net, GitHub.", 30],
      ["Runway", "0 days", "Cash divided by required operating expenses and founder obligations.", 0],
      ["A/R Outstanding", "$0", "Invoices, client balances, failed payments, and promised deposits.", 0],
      ["Revenue Collected", "$0", "Settled cash only. No vanity revenue.", 0],
      ["MRR", "$3,600", "Recurring active client subscriptions currently tracked.", 40],
      ["Gross Margin", "Target 80%+", "Revenue after direct delivery and software costs.", 80],
      ["Owner Draw Capacity", "$0", "Safe owner distribution after reserves and obligations.", 0],
      ["Investor Use of Funds", "Pending", "Allocation by personal obligations, business burn, tech, legal, and reserve.", 35],
      ["Manny Finance Access", "Enabled", "Readout module for finance KPIs and approval gates.", 100],
      ["Ramp Strategy", "Planned", "Charge card use limited to stack burn and approved cash-cycle expenses.", 50],
      ["Approval Gate", "2-person", "No money movement outside plan without Jeremiah + Manny approval.", 100]
    ]
  },
  {
    id: "sales",
    title: "Sales Command Center",
    desc: "Founder Access, demos, pipeline velocity, consults, conversion, and private-pay deal tracking.",
    metrics: [
      ["New Leads", "0", "All inbound, outbound, referrals, Apollo, LinkedIn, website, and partner leads.", 0],
      ["Qualified Leads", "0", "Ready, Willing, Able filter passed.", 0],
      ["Booked Calls", "0", "Discovery, demo, intake, and partner calls scheduled.", 0],
      ["Show Rate", "Target 75%", "Attended calls divided by booked calls.", 75],
      ["Close Rate", "Target 30%", "Closed won divided by qualified calls.", 30],
      ["Pipeline Value", "$0", "Weighted deal value by stage.", 0],
      ["Founder Access Cohort", "0 / 30", "July cohort target progress.", 0],
      ["Private-Pay Client Value", "$30k/mo", "Recovery Nexus benchmark monthly client value.", 70],
      ["Speed to Lead", "Target <5m", "Lead created to first contact attempt.", 90],
      ["Follow-up Compliance", "Target 95%", "Required touches completed on time.", 95],
      ["Demo Conversion", "Target 40%", "Demo to proposal or activation.", 40],
      ["Activation Revenue", "$0", "Setup fees, activation fees, and implementation revenue collected.", 0]
    ]
  },
  {
    id: "marketing",
    title: "Marketing Command Center",
    desc: "TOFU, MOFU, BOFU, brand authority, demand creation, content, ads, and distribution.",
    metrics: [
      ["TOFU Reach", "0", "Impressions across LinkedIn, X, email, paid, website, and partner channels.", 0],
      ["MOFU Capture", "0", "Emails, forms, content downloads, assessment starts, and intake opt-ins.", 0],
      ["BOFU Conversion", "0", "Booked calls, applications, intake requests, and checkout starts.", 0],
      ["Website Visitors", "0", "Unique visitors by domain and landing page.", 0],
      ["CTA Click Rate", "Target 4%", "Primary call-to-action clicks divided by page visitors.", 40],
      ["Content Output", "0", "Posts, emails, reels, long-form, landing pages, and outbound assets.", 0],
      ["Email Open Rate", "Target 40%", "Campaign opens and sequence engagement.", 40],
      ["Email Reply Rate", "Target 8%", "Qualified replies from outbound and nurture.", 80],
      ["Ad Spend", "$0", "Meta, LinkedIn, X, Google, and test budgets.", 0],
      ["CAC", "$0", "Blended acquisition cost by paid and organic.", 0],
      ["Brand Trust Score", "Build", "Testimonials, authority, credibility assets, and clarity of offer.", 45],
      ["Algorithm Fit", "Daily", "Content aligned to current distribution mechanics and founder authenticity.", 60]
    ]
  },
  {
    id: "ops",
    title: "Operations Command Center",
    desc: "Delivery readiness, client onboarding, SOPs, intake handoff, QA, escalation, and service reliability.",
    metrics: [
      ["Active Clients", "0", "Current paid clients, pilot partners, and implementation accounts.", 0],
      ["Onboarding Completion", "0%", "Profile, payment, goals, MBS baseline, and dashboard setup.", 0],
      ["SOP Coverage", "35%", "Documented procedures for repeatable delivery and operations.", 35],
      ["Delivery SLA", "Target 95%", "Promised deliverables completed on time.", 95],
      ["Client Health", "Green", "Risk scoring across engagement, outcomes, payment, and sentiment.", 82],
      ["Escalations", "0", "Open urgent issues requiring founder or operator attention.", 0],
      ["QA Pass Rate", "Target 98%", "Review of automations, reports, forms, workflows, and client outputs.", 98],
      ["Automation Uptime", "Target 99%", "n8n, API routes, webhooks, CRM, and dashboard availability.", 99],
      ["Handoff Readiness", "Build", "Admissions, intake, coaching, property dispatch, or partner process transition.", 55],
      ["Knowledge Base", "Build", "Internal docs, prompts, policies, objections, and operating memory.", 48],
      ["Support Queue", "0", "Open help requests, bugs, client messages, and internal blockers.", 0],
      ["Weekly Review Score", "Pending", "Ops review across delivery, money, pipeline, and team risks.", 30]
    ]
  },
  {
    id: "hr",
    title: "People / HR Command Center",
    desc: "Roles, contractors, accountability, capacity, scorecards, documentation, and founder support structure.",
    metrics: [
      ["Open Roles", "0", "Needed operators, builders, coaches, admins, contractors, or advisors.", 0],
      ["Capacity Load", "Founder-heavy", "Workload by person, role, skill, and execution risk.", 25],
      ["Accountability Score", "Target 90%", "Assigned tasks completed by owner and due date.", 90],
      ["Contractor Spend", "$0", "Monthly people cost and approved project budget.", 0],
      ["Role Clarity", "Build", "Who owns finance, ops, sales, marketing, tech, delivery, and support.", 50],
      ["Culture Alignment", "High", "Mission, integrity, service, discipline, and direct communication fit.", 86],
      ["Training Completion", "0%", "SOP, system, brand, compliance, and client delivery readiness.", 0],
      ["Advisor Actions", "0", "Finance, legal, tech, clinical, and business advisor tasks.", 0]
    ]
  },
  {
    id: "agents",
    title: "AURA Agent Orchestration",
    desc: "AI agent command layer, approvals, memory, prompts, audit logs, actions, and tool performance.",
    metrics: [
      ["Agent Tasks Queued", "0", "Pending AI tasks by domain and priority.", 0],
      ["Agent Tasks Completed", "0", "Completed outputs accepted by founder or operator.", 0],
      ["Approval Required", "All money/legal", "Protected actions require human approval before execution.", 100],
      ["Memory Quality", "Build", "Accuracy, usefulness, source clarity, and relevance of stored context.", 55],
      ["Prompt Library", "Build", "Reusable prompts for finance, sales, marketing, ops, legal, and delivery.", 45],
      ["Tool Success Rate", "Target 98%", "Successful API/tool executions divided by attempted actions.", 98],
      ["Audit Coverage", "100% goal", "Every meaningful action logged with owner, timestamp, result, and risk.", 100],
      ["Human Override", "Enabled", "Founder can stop, reverse, or require approval for any agent action.", 100],
      ["Command Latency", "Target <3s", "Time from command to acknowledgement or action plan.", 80],
      ["Autonomy Level", "Manual now", "Starts manual; expands only after trust, logs, and approvals are proven.", 20],
      ["Data Connections", "Planned", "GHL, Supabase, RelayFi, email, calendar, Apollo, GitHub, Vercel, n8n.", 35],
      ["Safety Score", "Strict", "No deception, no manipulation, no unapproved money movement, no hidden actions.", 100]
    ]
  },
  {
    id: "mbs",
    title: "MIND | BODY | SPIRIT Triangulation™",
    desc: "Founder and client performance system tied to daily actions, outcomes, and identity transformation.",
    metrics: [
      ["Mind Score", "0%", "Learning, planning, clarity, GitHub, Manus, agent training, and strategic thinking.", 0],
      ["Body Score", "0%", "Training, sleep, nutrition, recovery, energy, and appearance goals.", 0],
      ["Spirit Score", "0%", "Church, service, recovery support, gratitude, faith, and purpose actions.", 0],
      ["Daily 9 Completion", "0 / 9", "Nine daily identity and execution check-ins.", 0],
      ["120-Day Progress", "0%", "Progress to launch, revenue, health, and service outcomes.", 0],
      ["Identity Shift", "Build", "I Am Not to I Am conversion tracking.", 40],
      ["Client Outcome Score", "Pending", "Client goals mapped to measurable MBS behaviors and outcomes.", 0],
      ["Recovery Integrity", "Daily", "Founder stability, discipline, honesty, support, and environment controls.", 70]
    ]
  }
];

const stages = [
  ["Inbox / Lead Created", "Source captured", "Speed-to-lead timer starts"],
  ["Qualification", "Ready, Willing, Able", "Fit, urgency, budget, need"],
  ["Intake / Demo", "Booked and attended", "Call notes + next action"],
  ["Proposal / Activation", "Offer issued", "Payment link or agreement"],
  ["Delivery", "Onboarded", "SLA + outcome tracking"],
  ["Retention / Expansion", "Healthy", "Upsell, renewal, referral"]
];

function Metric({ item }: { item: [string, string, string, number] }) {
  const [label, value, detail, pct] = item;
  return <div className="metric"><label>{label}</label><strong>{value}</strong><span>{detail}</span><div className="bar"><i style={{width: `${Math.max(2, Math.min(100, pct))}%`}} /></div></div>;
}

export default function Page() {
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="mark"><span>A</span></div><div><h1>AURA Genesis<br/>Command Center™</h1><p>Powered by SentientOS™ © 2026</p></div></div>
      <nav className="nav">
        {sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}
        <a href="#pipeline">Pipeline Map</a><a href="#console">Command Console</a>
      </nav>
      <div className="sidecard"><b>No login yet</b><p>Authentication intentionally omitted for this phase. Add Supabase/Auth middleware at the end after product structure is approved.</p></div>
      <div className="sidecard"><b>Build target</b><p>Vercel-ready Next.js root app. Package.json includes Next dependency at repo root.</p></div>
    </aside>
    <main className="main">
      <section className="hero">
        <div className="kicker">Executive Operating System</div>
        <h2>AURA Genesis Command Center™</h2>
        <p>The maximum KPI cockpit for SentientOS™: finance, sales, marketing, operations, HR, agent orchestration, MBS execution, client delivery, risk, and founder control. This version is intentionally open with no login screen.</p>
        <div className="topgrid">
          <div className="card"><small>System Status</small><h3>Build</h3><span className="delta warn">Product scaffold ready</span></div>
          <div className="card"><small>Auth</small><h3>Off</h3><span className="delta warn">Add at final gate</span></div>
          <div className="card"><small>Primary Goal</small><h3>Revenue</h3><span className="delta">Track every lever</span></div>
          <div className="card"><small>Approval</small><h3>Founder</h3><span className="delta">Human-controlled</span></div>
        </div>
      </section>

      {sections.map(s => <section className="section" id={s.id} key={s.id}>
        <div className="sectionhead"><div><h2>{s.title}</h2><p>{s.desc}</p></div><span className="badge">AURA KPI Layer</span></div>
        <div className="grid cols4">{s.metrics.map((m, i) => <Metric key={i} item={m as [string,string,string,number]} />)}</div>
      </section>)}

      <section className="section" id="pipeline">
        <div className="sectionhead"><div><h2>Revenue Pipeline Map</h2><p>Every lead must move through a visible stage, owner, next action, risk, and forecast value.</p></div><span className="badge">TOFU → MOFU → BOFU</span></div>
        <table className="table"><thead><tr><th>Stage</th><th>Status Definition</th><th>Required Metric</th></tr></thead><tbody>{stages.map((r, i) => <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table>
      </section>

      <section className="section" id="console">
        <div className="sectionhead"><div><h2>Command Console</h2><p>Static placeholder for the future AURA agent interface. No auth, no backend, no external actions yet.</p></div><span className="badge">Manual Mode</span></div>
        <div className="command">
          <div className="console">
            <div><b>AURA:</b> Awaiting command.</div>
            <div><b>Directive:</b> Protect founder, client, mission, money, truth, and execution.</div>
            <div><b>Current Mode:</b> Dashboard-only product shell.</div>
            <div><b>Next Build:</b> Connect Supabase, CRM, finance feeds, task logs, memory, and approvals.</div>
            <div><b>Auth:</b> Intentionally not enabled yet.</div>
            <div><b>Risk:</b> Never execute money, legal, or client-impacting action without approval.</div>
            <div className="inputbar">Type command placeholder: “Show revenue blockers”</div>
          </div>
          <div className="grid cols2">
            <Metric item={["Critical Alerts", "0", "Future alerts from finance, sales, delivery, legal, tech, and founder risk.", 0]} />
            <Metric item={["Approvals", "0", "Future action approvals for money, messaging, legal, and client changes.", 0]} />
            <Metric item={["Data Freshness", "Static", "Will become live once integrations are connected.", 20]} />
            <Metric item={["Command Logs", "Ready", "Future immutable audit log of all major commands and actions.", 60]} />
          </div>
        </div>
      </section>
      <div className="footer">SentientOS™ © 2026 · AURA™ · MIND | BODY | SPIRIT Triangulation™ · No login requirement in this version.</div>
    </main>
  </div>;
}
