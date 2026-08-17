import type { ProfileOutput } from "@/lib/tool-data";
import { GraduationCap, MapPin } from "lucide-react";

export function MeCard({ data }: { data: ProfileOutput }) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
        <p className="text-sm leading-relaxed text-zinc-600">{data.summary}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{data.extra}</p>
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-amber-50 p-4">
          <GraduationCap className="mt-0.5 h-5 w-5 text-zinc-700" />
          <div>
            <p className="font-medium text-zinc-900">{data.education.degree}</p>
            <p className="text-sm text-zinc-500">{data.education.school}</p>
            <p className="text-xs text-zinc-400">{data.education.years}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold text-zinc-900 hover:underline"
                >
                  {job.company}
                </a>
                <p className="text-sm text-zinc-600">{job.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-zinc-400">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </p>
              </div>
              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600">
                {job.dates}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
              {job.bullets.slice(0, job.role === "Associate Data Scientist" ? 5 : 3).map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {data.recommendations[0] ? (
        <blockquote className="rounded-3xl border border-amber-200/80 bg-amber-50/80 p-5 shadow-sm">
          <p className="text-sm leading-relaxed text-zinc-600">
            “{data.recommendations[0].quote}”
          </p>
          <footer className="mt-3 text-sm">
            <a
              href={data.recommendations[0].url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-900 hover:underline"
            >
              {data.recommendations[0].name}
            </a>
            <span className="text-zinc-400"> · {data.recommendations[0].title}</span>
          </footer>
        </blockquote>
      ) : null}

      <div className="rounded-3xl border border-sky-200/70 bg-sky-50/60 p-5 shadow-sm">
        <p className="mb-3 text-sm font-medium text-zinc-900">Writing</p>
        <ul className="space-y-2">
          {data.articles.map((article) => (
            <li key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-700 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
