import { ReactNode } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite-2 px-6 py-10 shadow-panel transition duration-300 ease-out hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-panelHover md:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(74,178,247,0.08),transparent_55%)] mix-blend-screen" />
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold lowercase tracking-wide md:text-[2.5rem]">{title}</h2>
        {children}
      </div>
    </section>
  );
}
