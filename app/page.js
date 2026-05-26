export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">ResetPath</h1>
        <button className="px-5 py-2 rounded-full bg-teal-500 text-black font-semibold hover:opacity-90">
          Join Early Access
        </button>
      </nav>

      <section className="px-8 py-20 text-center max-w-6xl mx-auto">
        <p className="text-teal-400 font-medium uppercase tracking-wider text-sm">
          Gambling Recovery Accountability Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
          Break the Gambling Cycle.
          <br />
          Rebuild Control.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
          ResetPath helps people struggling with compulsive gambling track
          progress, resist urges, rebuild financial control, and stay
          accountable every day.
        </p>

        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-slate-400 mb-5">
            Join the early access waitlist
          </p>

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
              className="px-8 py-4 rounded-full bg-teal-500 text-black font-semibold hover:opacity-90 cursor-pointer"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto pb-24">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Track Your Recovery</h2>
          <p className="text-slate-400 mt-4">
            Monitor gamble-free streaks, relapses, and long-term progress.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Money Saved Insights</h2>
          <p className="text-slate-400 mt-4">
            Visualize how much money you’re keeping by staying in control.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Urge & Trigger Tracking</h2>
          <p className="text-slate-400 mt-4">
            Identify patterns, emotional triggers, and high-risk moments.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
          <h2 className="text-4xl font-bold text-center">
            How ResetPath Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div>
              <h3 className="text-xl font-semibold">1. Set Your Goal</h3>
              <p className="text-slate-400 mt-3">
                Commit to quitting or reducing gambling behavior.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2. Track Progress</h3>
              <p className="text-slate-400 mt-3">
                Build streaks and see recovery progress visually.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">3. Log Urges</h3>
              <p className="text-slate-400 mt-3">
                Record cravings, triggers, and emotional states.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">4. Rebuild Control</h3>
              <p className="text-slate-400 mt-3">
                Recover financially and strengthen accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-bold text-center">Why ResetPath?</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold">Built for Gambling Recovery</h3>
            <p className="text-slate-400 mt-4">
              Most habit apps are generic. ResetPath is specifically designed
              around gambling recovery behavior and accountability.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold">Supportive, Not Judgmental</h3>
            <p className="text-slate-400 mt-4">
              ResetPath is designed to help users rebuild control with support,
              reflection, and consistent accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-24">
        <h2 className="text-4xl font-bold text-center">FAQ</h2>

        <div className="mt-10 space-y-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-xl">
              Is ResetPath therapy or treatment?
            </h3>
            <p className="text-slate-400 mt-3">
              No. ResetPath is a recovery accountability and progress tracking
              platform designed to support behavior change.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-xl">
              When will ResetPath launch?
            </h3>
            <p className="text-slate-400 mt-3">
              We are currently building the MVP and inviting early access users.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-xl">
              How much will it cost?
            </h3>
            <p className="text-slate-400 mt-3">
              Basic access will be free. Premium accountability tools may be
              available later.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}