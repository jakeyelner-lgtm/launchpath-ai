export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold">LaunchPath AI</h1>
        <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:opacity-90">
          Join Beta
        </button>
      </nav>

      <section className="px-10 py-24 text-center max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold leading-tight">
          The AI Career Platform Built for Students
        </h1>

        <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
          Build winning resumes, generate cover letters, prepare for interviews,
          and land internships faster with AI.
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          <p className="text-gray-400 mb-4">Join the waitlist for early access</p>

          <form
            action="https://formspree.io/f/maqkpany"
            method="POST"
            className="flex gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white text-black outline-none"
            />

            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 cursor-pointer"
            >
              Join
            </button>
          </form>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto pb-24">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">AI Resume Builder</h2>
          <p className="text-gray-400 mt-4">
            Instantly create polished internship-ready resumes.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Cover Letter Generator</h2>
          <p className="text-gray-400 mt-4">
            Customized cover letters for every application.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold">Interview Coach</h2>
          <p className="text-gray-400 mt-4">
            Practice interview questions with AI feedback.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 pb-24 text-center">
        <h2 className="text-4xl font-bold">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold">Starter</h3>
            <p className="text-4xl font-bold mt-4">$9/mo</p>
            <p className="text-gray-400 mt-4">Templates + guides</p>
          </div>

          <div className="p-8 rounded-3xl bg-white text-black">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="text-4xl font-bold mt-4">$19/mo</p>
            <p className="mt-4">Full AI platform access</p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-semibold">Premium</h3>
            <p className="text-4xl font-bold mt-4">$49/mo</p>
            <p className="text-gray-400 mt-4">Interview coaching tools</p>
          </div>
        </div>
      </section>
    </div>
  );
}