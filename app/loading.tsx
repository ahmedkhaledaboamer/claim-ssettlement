import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,171,60,0.09),_transparent_55%)]" />

      <div className="relative z-10 mx-4 w-full max-w-4xl rounded-3xl border border-white/5 bg-slate-900/70 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl">
        {/* Logo + text */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-amber-500/30" />
            <div className="absolute inset-0 rounded-full border-2 border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
            <Logo size={40} />
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-100">
              KIB Platform
            </h2>
            <p className="text-xs text-slate-400">Loading..</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7 space-y-3">
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="absolute inset-y-0 left-0 w-2/3 animate-pulse rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
}