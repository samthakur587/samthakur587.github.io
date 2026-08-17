import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { ContactOutput } from "@/lib/tool-data";
import { Mail, Phone } from "lucide-react";

export function ContactCard({ data }: { data: ContactOutput }) {
  return (
    <div className="rounded-3xl border border-violet-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
      <p className="text-sm text-zinc-600">
        Have a project in mind or want to chat? Reach out anytime.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`mailto:${data.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600"
        >
          <Mail className="h-4 w-4" />
          {data.email}
        </a>
        <a
          href={`tel:${data.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
        >
          <Phone className="h-4 w-4" />
          {data.phone}
        </a>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-200"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-200"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={data.twitter}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-200"
        >
          X
        </a>
        <a
          href={data.resume}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-200"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
