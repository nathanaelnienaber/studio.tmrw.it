export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite-2 px-6 py-16 shadow-panel md:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(74,178,247,0.1),transparent_55%)] opacity-80 mix-blend-screen" />
      <div className="space-y-6">
        <h1 className="text-[clamp(3rem,5vw,5rem)] font-semibold leading-tight tracking-wide text-white lowercase">
          tmrw.it
        </h1>
        <p className="max-w-xl text-lg text-slate-200">
          Independent studio building digital products for tomorrow with precision, clarity and calm confidence.
        </p>
      </div>
    </header>
  );
}
