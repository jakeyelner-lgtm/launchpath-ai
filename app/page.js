export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">ResetPath</h1>
        <button className="px-5 py-2 rounded-full bg-teal-400 text-black font-semibold hover:opacity-90">
          Early Access
        </button>
      </nav>

      <section className="relative px-8 py-24 max-w-7xl mx-auto">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-3xl rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="text-teal-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Gambling Recovery Accountability
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Break the Cycle.
              <br />
              Rebuild Your Future.
            </h1>

            <p className="text-xl text-slate-300 mt-8 leading-relaxed max-w-2xl">
              ResetPath helps people struggling with compulsive gambling regain
              control through accountability, recovery tracking, financial
              awareness, and behavioral recovery support.
            </p>

            <div className="mt-10">
              <form
                action="https://formspree.io/f/maqkpany"
                method="POST"
                className="flex flex-col md:flex-row gap-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white text-black outline-none"
                />

                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-teal-400 text-black font-semibold hover:opacity-90 cursor-pointer"
                >
                  Join Early Access
                </button>
              </form>

              <p className="text-slate-500 mt-4 text-sm">
                Private. Supportive. Built for accountability.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
              <p className="text-slate-400 text-sm">Recovery Streak</p>
              <h3 className="text-5xl font-bold mt-2">47 Days</h3>
              <p className="text-teal-400 mt-3">+12% this month</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
                <p className="text-slate-400 text-sm">Money Protected</p>
                <h3 className="text-3xl font-bold mt-2">$2,430</h3>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
                <p className="text-slate-400 text-sm">Triggers Logged</p>
                <h3 className="text-3xl font-bold mt-2">18</h3>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
              <p className="text-slate-400 text-sm">Today’s Check-In</p>
              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="px-4 py-2 rounded-full bg-white/10">Strong</span>
                <span className="px-4 py-2 rounded-full bg-teal-400 text-black">
                  Motivated
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10">Stressed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto pb-24">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">📈</div>
          <h2 className="text-2xl font-semibold">Track Recovery Progress</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Monitor streaks, relapses, emotional patterns, and long-term
            accountability progress.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">💰</div>
          <h2 className="text-2xl font-semibold">Financial Recovery Awareness</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Visualize money saved and rebuild financial control over time.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">🧠</div>
          <h2 className="text-2xl font-semibold">Trigger Intelligence</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Identify high-risk behaviors, emotional triggers, and recurring
            patterns.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10">
          <h2 className="text-4xl font-bold text-center">
            Why ResetPath Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold">Commit</h3>
              <p className="text-slate-400 mt-3">
                Start recovery with a defined accountability goal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Track</h3>
              <p className="text-slate-400 mt-3">
                Build momentum through visible progress and streak psychology.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Understand</h3>
              <p className="text-slate-400 mt-3">
                Learn what drives urges, cravings, and emotional risk moments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Recover</h3>
              <p className="text-slate-400 mt-3">
                Rebuild control emotionally, behaviorally, and financially.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-bold text-center">Why We’re Different</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-semibold">
              Built Specifically for Gambling Recovery
            </h3>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Generic habit trackers miss gambling-specific triggers, financial
              psychology, and behavioral patterns.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-semibold">
              Supportive, Private, Judgment-Free
            </h3>
            <p className="text-slate-400 mt-4 leading-relaxed">
              Recovery requires trust. ResetPath is designed to feel empowering,
              not clinical or shame-driven.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-8 text-center text-slate-500">
        <p>ResetPath © 2026</p>
        <p className="mt-2">Recovery accountability built with trust.</p>
      </footer>
    </div>
  );
}