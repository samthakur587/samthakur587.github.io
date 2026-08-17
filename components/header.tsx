"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { Download } from "lucide-react";

type HeaderProps = {
  onReset: () => void;
};

export function Header({ onReset }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/30 bg-white/20 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <button
          type="button"
          onClick={onReset}
          className="text-[15px] font-semibold tracking-tight text-stone-900 transition hover:text-violet-700"
        >
          {profile.name}
        </button>
        <nav className="flex items-center gap-2">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-stone-500 transition hover:bg-violet-100 hover:text-violet-800"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-stone-500 transition hover:bg-sky-100 hover:text-sky-800"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-violet-700"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
