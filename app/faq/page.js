export default function FAQ() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-slate-400 text-xl text-center max-w-3xl mx-auto mb-16">
          Clear answers about ResetPath and how recovery support works.
        </p>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              Is ResetPath therapy?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              No. ResetPath is an accountability and behavioral recovery support
              platform, not a medical or therapy service.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              Is ResetPath only for gambling recovery?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Yes. ResetPath is currently focused specifically on gambling
              recovery and accountability.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              Is my data private?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Privacy and trust are core priorities for ResetPath.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              Will there be a mobile app?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Yes. ResetPath is being designed with a mobile-first experience.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-3">
              How do I get access?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Join early access from the homepage to receive updates and launch
              access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}