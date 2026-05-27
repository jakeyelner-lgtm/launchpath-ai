export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-white/10 p-8">
      <h1 className="text-3xl font-bold text-white mb-12">ResetPath</h1>

      <nav className="flex flex-col gap-4">
        <a
          href="/dashboard"
          className="px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition"
        >
          Dashboard
        </a>

        <a
          href="/log-urge"
          className="px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition"
        >
          Log Urge
        </a>

        <a
          href="/insights"
          className="px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition"
        >
          Insights
        </a>

        <a
          href="/profile"
          className="px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition"
        >
          Profile
        </a>
      </nav>
    </aside>
  );
}