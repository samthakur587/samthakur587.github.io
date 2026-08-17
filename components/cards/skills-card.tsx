import type { SkillsOutput } from "@/lib/tool-data";
import { Award } from "lucide-react";

export function SkillsCard({ data }: { data: SkillsOutput }) {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(data.skills).map(([group, items]) => (
          <section
            key={group}
            className="rounded-3xl border border-stone-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
          >
            <h3 className="mb-3 text-sm font-semibold text-zinc-900">{group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="rounded-3xl border border-emerald-200/70 bg-emerald-50/50 p-4 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-900">
          <Award className="h-4 w-4" />
          Certifications
        </h3>
        <ul className="space-y-2">
          {data.certifications.map((cert) => (
            <li key={cert.name}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-800 hover:underline"
              >
                {cert.name}
              </a>
              <p className="text-xs text-zinc-500">{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
