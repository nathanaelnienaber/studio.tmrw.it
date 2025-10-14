import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Panel } from "@/components/Panel";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />

        <Panel title="projects">
          <ProjectList items={projects} />
        </Panel>

        <Panel title="about">
          <div className="space-y-4 text-lg text-slate-300">
            <p>
              We craft apps, tools, platforms and experiments that balance delightful consumer experiences with resilient,
              secure infrastructure.
            </p>
            <p>
              From ad-supported mobile products to long-term product partnerships, we bring systems thinking, technical warmth
              and product craft to every engagement.
            </p>
          </div>
        </Panel>

        <Panel title="contact">
          <div className="space-y-4 text-lg text-slate-300">
            <p>
              New projects, collaborations or press — email {" "}
              <Link href="mailto:hello@tmrw.it" className="font-medium text-accent-blue">
                hello@tmrw.it
              </Link>
              .
            </p>
            <p>
              Security questions? Reach us at <code className="font-mono text-accent-amber">security@tmrw.it</code>.
            </p>
          </div>
        </Panel>
      </main>

      <footer className="mx-auto w-full max-w-content border-t border-white/10 px-6 py-10 text-xs uppercase tracking-[0.3em] text-slate-400 md:px-10">
        © TMRW LLC — 2025
      </footer>
    </>
  );
}
