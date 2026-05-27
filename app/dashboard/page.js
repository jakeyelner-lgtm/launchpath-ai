import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-3">Dashboard</h1>
          <p className="text-slate-400 text-lg mb-10">
            Stay accountable. Track progress. Keep moving forward.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">Current Streak</p>
              <h2 className="text-5xl font-bold">47 Days</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">Money Protected</p>
              <h2 className="text-5xl font-bold">$2,430</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-slate-400 mb-3">Urges Resisted</p>
              <h2 className="text-5xl font-bold">18</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                How are you feeling today?
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😊 Motivated
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😟 Anxious
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😔 Stressed
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😴 Tired
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>

              <div className="flex flex-col gap-4">
                <a
                  href="/log-urge"
                  className="bg-teal-400 text-black px-6 py-4 rounded-2xl font-semibold text-center hover:opacity-90"
                >
                  Log an Urge
                </a>

                <a
                  href="/insights"
                  className="bg-white/10 px-6 py-4 rounded-2xl text-center hover:bg-white/20 transition"
                >
                  View Insights
                </a>

                <a
                  href="/profile"
                  className="bg-white/10 px-6 py-4 rounded-2xl text-center hover:bg-white/20 transition"
                >
                  Profile Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}