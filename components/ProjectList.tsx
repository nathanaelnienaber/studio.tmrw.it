import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectListProps = {
  items: Project[];
};

export function ProjectList({ items }: ProjectListProps) {
  return (
    <ul className="space-y-4">
      {items.map((project) => (
        <li
          key={project.href}
          className="grid gap-1 border-b border-white/10 pb-4 last:border-none last:pb-0"
        >
          <strong className="text-lg font-medium tracking-wide text-white">
            <Link href={project.href} target="_blank" rel="noreferrer noopener">
              {project.name}
            </Link>
          </strong>
          <span className="text-sm text-slate-300">{project.description}</span>
        </li>
      ))}
    </ul>
  );
}
