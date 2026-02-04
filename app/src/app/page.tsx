export default function Home() {
  const investmentHighlights = [
    {
      title: "Launch Ready in 30 Days",
      description:
        "Pre-validated kitchen partners, delivery riders, and marketing copy make the business operational within a month.",
    },
    {
      title: "Low Capex, High Trust",
      description:
        "Cloud kitchen tie-ups eliminate rent deposits while QR-powered hygiene tracking builds instant credibility with corporates.",
    },
    {
      title: "Recurring Corporate Revenue",
      description:
        "Workplaces in Malanpur, ITI Campus, DB Mall, and private coaching hubs generate 75% recurring orders.",
    },
  ];

  const startupBudget = [
    { label: "Working capital (first 6 weeks)", amount: "₹38,000" },
    { label: "Digital kitchen setup & branding", amount: "₹16,500" },
    { label: "Marketing & sampling spend", amount: "₹21,200" },
    { label: "Delivery fleet onboarding", amount: "₹12,300" },
    { label: "Contingency reserve", amount: "₹8,000" },
  ];

  const launchTimeline = [
    {
      phase: "Week 1",
      focus: "Register FSSAI, shortlist kitchens, close supplier credit lines, and design the brand kit.",
    },
    {
      phase: "Week 2",
      focus: "Pilot menu tastings with 10 office teams and coaching institutes; capture feedback digitally.",
    },
    {
      phase: "Week 3",
      focus: "Run corporate sampling desks, activate WhatsApp drip campaigns, and onboard delivery partners.",
    },
    {
      phase: "Week 4",
      focus: "Full rollout with subscription plans, festival menu drops, and monthly performance dashboard.",
    },
  ];

  const usp = [
    "Geo-fenced deliveries cover Lashkar, City Center, and Malanpur industrial belt within 30 minutes.",
    "Hybrid menu featuring regional favorites (Poha-Jalebi, Soya Keema) and clean-eating bowls for modern palates.",
    "IoT temperature tags inside delivery bags reassure HR teams about food safety.",
    "Dynamic pricing engine keeps margins above 32% while staying competitive with Swiggy Pop.",
  ];

  const revenueStreams = [
    {
      title: "Corporate Meal Subscriptions",
      value: "₹72,000 / month",
      note: "20 contracts × ₹3,600 average monthly billing",
    },
    {
      title: "Evening Coaching Batches",
      value: "₹24,000 / month",
      note: "120 students × ₹200 weekly snack packs",
    },
    {
      title: "Weekend Family Brunches",
      value: "₹18,000 / month",
      note: "Lashkar & Morar gated societies via pre-orders",
    },
  ];

  const tractionPlan = [
    {
      title: "Signature Experience",
      items: [
        "Quarterly ‘Taste of Gwalior’ pop-ups with live analytics on pinned tablets.",
        "Offer zero-deposit trial week for HR decision makers.",
      ],
    },
    {
      title: "Technology Toolkit",
      items: [
        "Custom WhatsApp ordering bot with Hindi support and meal feedback collection.",
        "Daily ops dashboard (orders, repeat rate, gross margin) shared with stakeholders via Notion.",
      ],
    },
    {
      title: "Retention Flywheel",
      items: [
        "Gamified ‘Healthy Team’ leaderboard for corporate clients with monthly rewards.",
        "Refer-a-friend credits for coaching tutors and society admins.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900/60 to-slate-900/20 p-10 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/90">
            Blueprint
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Smart Corporate Tiffin Network — Gwalior&apos;s most resilient
            business under ₹1 lakh
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200/90">
            A profitable, asset-light meal subscription service that uses local
            kitchens, tech-enabled delivery, and corporate retainers to break
            even within the third month. Built specifically for Gwalior&apos;s
            booming coaching hubs, manufacturing clusters, and growing IT parks.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {investmentHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/80">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">
              Lean Budget &amp; Capital Protection
            </h2>
            <p className="mt-3 text-sm text-slate-200/80">
              Designed to stay below ₹1 lakh while securing supplier credit and
              delivery bandwidth.
            </p>
            <ul className="mt-6 divide-y divide-white/10 border border-white/10 rounded-2xl">
              {startupBudget.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between px-5 py-4 text-sm sm:text-base"
                >
                  <span className="text-slate-200">{item.label}</span>
                  <span className="font-semibold text-emerald-300">
                    {item.amount}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Vendor partnerships already quoting 30-day payment cycles keep the
              net cash outlay minimal while safeguarding freshness standards.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-8 backdrop-blur">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Break-even Snapshot
              </h3>
              <p className="mt-2 text-sm text-emerald-100/80">
                Monthly fixed costs of ₹46,000 balanced by a conservative
                revenue projection of ₹1,14,000 generates 32% gross margin by
                Month 3.
              </p>
            </div>
            <div className="space-y-4 text-sm text-emerald-100/80">
              {revenueStreams.map((stream) => (
                <div
                  key={stream.title}
                  className="rounded-2xl border border-emerald-200/40 bg-emerald-200/10 p-4"
                >
                  <p className="font-semibold text-emerald-200">
                    {stream.title}
                  </p>
                  <p className="text-lg font-bold text-white">
                    {stream.value}
                  </p>
                  <p className="text-xs text-emerald-100/70">{stream.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Four-Week Launch Timeline
            </h2>
            <div className="mt-6 space-y-5">
              {launchTimeline.map((milestone) => (
                <div
                  key={milestone.phase}
                  className="rounded-2xl border border-white/15 bg-slate-900/40 p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-emerald-200">
                    {milestone.phase}
                  </p>
                  <p className="mt-3 text-sm text-slate-100/85">
                    {milestone.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Why this wins in Gwalior
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100/90">
              {usp.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-xl border border-emerald-200/40 bg-emerald-200/5 p-3"
                >
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-indigo-900/40 p-8 backdrop-blur lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.25em] text-indigo-200">
              Traction Engine
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Systems that keep orders compounding
            </h2>
            <p className="mt-3 text-sm text-slate-100/80">
              Each pillar is pre-loaded with SOPs and ready-to-use templates so
              the founding team can focus on relationship building instead of
              firefighting.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-5">
            {tractionPlan.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold text-indigo-100">
                  {pillar.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-100/85">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-4 rounded-full bg-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Monthly Operating Dashboard
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-100/80">
                Track what matters: repeat rate, customer acquisition payback,
                and rider efficiency. These metrics guide reinvestment and help
                secure bank or NBFC working capital in Month 5.
              </p>
            </div>
            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-white transition hover:border-emerald-300/80 hover:bg-emerald-300/20">
              Download KPI Sheet
            </button>
          </div>

          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-emerald-200">
                Repeat Clients
              </p>
              <p className="mt-3 text-3xl font-bold text-white">62%</p>
              <p className="mt-2 text-xs text-slate-300/70">
                Monthly retention target from pilot cohort.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-emerald-200">
                CAC Payback
              </p>
              <p className="mt-3 text-3xl font-bold text-white">27 days</p>
              <p className="mt-2 text-xs text-slate-300/70">
                Referral program keeps acquisition spend lean.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-emerald-200">
                Gross Margin
              </p>
              <p className="mt-3 text-3xl font-bold text-white">32%</p>
              <p className="mt-2 text-xs text-slate-300/70">
                Maintained even after menu experimentation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-widest text-emerald-200">
                Rider Utilization
              </p>
              <p className="mt-3 text-3xl font-bold text-white">84%</p>
              <p className="mt-2 text-xs text-slate-300/70">
                Optimized through route batching across delivery windows.
              </p>
            </div>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-slate-100/70">
          Built for founders who want to create meaningful employment in
          Gwalior. Adapt the blueprint, plug into local suppliers, and launch
          confidently under ₹1 lakh.
        </footer>
      </main>
    </div>
  );
}
