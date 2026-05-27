import Sidebar from "../../components/Sidebar";

export default function LogUrge() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-3">Log an Urge</h1>

          <p className="text-slate-400 text-lg mb-10">
            Capture the moment. Understand it. Move forward.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-8">
            <div>
              <label className="block mb-3 text-slate-300">
                What triggered the urge?
              </label>

              <select className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4">
                <option>Sports betting</option>
                <option>Online casino</option>
                <option>Stress</option>
                <option>Boredom</option>
                <option>Payday</option>
                <option>Alcohol</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-3 text-slate-300">
                How are you feeling?
              </label>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😟 Anxious
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😔 Stressed
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😴 Tired
                </button>

                <button className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition">
                  😐 Bored
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-3 text-slate-300">
                Urge intensity (1–10)
              </label>

              <input type="range" min="1" max="10" className="w-full" />
            </div>

            <div>
              <label className="block mb-3 text-slate-300">
                Notes
              </label>

              <textarea
                rows={5}
                placeholder="What happened?"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl p-4"
              />
            </div>

            <div>
              <label className="block mb-3 text-slate-300">
                Outcome
              </label>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-teal-400 text-black rounded-2xl p-4 font-semibold">
                  I resisted
                </button>

                <button className="bg-red-500 rounded-2xl p-4 font-semibold">
                  I relapsed
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}