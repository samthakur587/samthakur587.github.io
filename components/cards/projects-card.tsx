import type { ProjectsOutput } from "@/lib/tool-data";
import { ArrowUpRight } from "lucide-react";

export function ProjectsCard({ data }: { data: ProjectsOutput }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {data.projects.map((project) => (
        <article
          key={project.name}
          className="flex flex-col rounded-3xl border border-stone-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-900">{project.name}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900"
              aria-label={`Open ${project.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
