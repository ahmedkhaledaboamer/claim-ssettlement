import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0c10] overflow-hidden">
      {/* Animated grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(248,171,60,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(248,171,60,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Corner accent lines */}
      <div className="pointer-events-none absolute inset-8 border border-amber-500/10" />
      <div className="pointer-events-none absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-400/60" />
      <div className="pointer-events-none absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-400/60" />
      <div className="pointer-events-none absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-400/60" />
      <div className="pointer-events-none absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-400/60" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(248,171,60,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Orbital spinner system */}
        <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
          {/* Outer slow orbit */}
          <div
            className="absolute rounded-full border border-amber-500/20"
            style={{
              width: 160, height: 160,
              animation: "spin 8s linear infinite",
            }}
          />
          {/* Outer orbit dot */}
          <div
            className="absolute rounded-full border border-amber-400/40"
            style={{
              width: 160, height: 160,
              animation: "spin 8s linear infinite",
            }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(248,171,60,0.9)]" />
          </div>

          {/* Middle counter-rotating ring */}
          <div
            className="absolute rounded-full border border-amber-600/30"
            style={{
              width: 116, height: 116,
              animation: "spin 4s linear infinite reverse",
            }}
          >
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/80 shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
          </div>

          {/* Inner fast ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 80, height: 80,
              border: "1.5px solid transparent",
              borderTopColor: "rgba(248,171,60,0.9)",
              borderRightColor: "rgba(248,171,60,0.2)",
              animation: "spin 1.4s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 80, height: 80,
              border: "1.5px solid transparent",
              borderBottomColor: "rgba(248,171,60,0.5)",
              animation: "spin 1.4s cubic-bezier(0.4,0,0.6,1) infinite reverse",
            }}
          />

          {/* Logo center */}
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#0f1116] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <Image
              src="/kib_logo.webp"
              alt="Logo"
              width={34}
              height={34}
              className="object-contain w-3/4 h-3/4"
              loading="eager"
              priority
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span
              className="text-[10px] font-medium tracking-[0.5em] text-amber-400/80 uppercase"
              style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
            >
              KIB Platform
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          {/* Animated dots */}
          <div className="flex items-center gap-1.5 mt-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-amber-400/50"
                style={{ animation: `pulse 1.4s ease-in-out ${i * 0.18}s infinite` }}
              />
            ))}
          </div>
        </div>

        {/* Minimal progress bar */}
        <div className="w-48 flex flex-col gap-2">
          <div className="relative h-px w-full bg-white/5 overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, rgba(248,171,60,0) 0%, rgba(248,171,60,1) 50%, rgba(251,191,36,1) 100%)",
                animation: "shimmer 2s ease-in-out infinite",
                width: "50%",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(400%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}