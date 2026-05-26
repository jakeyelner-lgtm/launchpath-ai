export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact</h1>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p>
            Questions, feedback, partnership inquiries, or early interest in
            ResetPath? We’d love to hear from you.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              General Contact
            </h2>
            <p>
              Email: resetpathteam@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Partnerships
            </h2>
            <p>
              For future partnerships, wellness organizations, or business
              opportunities, please reach out via email.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Product Feedback
            </h2>
            <p>
              We welcome feedback as ResetPath evolves and improves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}