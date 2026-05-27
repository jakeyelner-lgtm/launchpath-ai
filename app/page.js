import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tight">ResetPath</h1>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="/how-it-works" className="hover:text-white transition">
            How It Works
          </a>

          <a href="/faq" className="hover:text-white transition">
            FAQ
          </a>

          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>

          <button className="px-5 py-2 rounded-full bg-teal-400 text-black font-semibold hover:opacity-90">
            Join Early Access
          </button>
        </div>
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
              Rebuild Control.
            </h1>

            <p className="text-xl text-slate-300 mt-8 leading-relaxed max-w-2xl">
              ResetPath helps people struggling with gambling regain control
              through accountability, urge tracking, recovery progress, and
              financial awareness.
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
              <p className="text-teal-400 mt-3">Momentum matters.</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
                <p className="text-slate-400 text-sm">Money Protected</p>
                <h3 className="text-3xl font-bold mt-2">$2,430</h3>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur">
                <p className="text-slate-400 text-sm">Urges Logged</p>
                <h3 className="text-3xl font-bold mt-2">18</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See ResetPath in Action
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-14">
            A focused recovery platform built to help you stay accountable.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <Image
              src="/resetpath-mockup.png"
              alt="ResetPath App Preview"
              width={1200}
              height={1400}
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto pb-24">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">🧠</div>
          <h2 className="text-2xl font-semibold">Understand Your Triggers</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Track urges and recognize the emotional patterns that pull you back.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">💰</div>
          <h2 className="text-2xl font-semibold">Protect Your Money</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            See how much you’re keeping instead of losing.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-3xl mb-4">📈</div>
          <h2 className="text-2xl font-semibold">Build Momentum</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Stay accountable with streaks, recovery progress, and insights.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-8 text-center text-slate-500">
        <p>ResetPath © 2026</p>
        <p className="mt-2">Recovery accountability built with trust.</p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>

          <a href="/terms" className="hover:text-white transition">
            Terms
          </a>

          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}