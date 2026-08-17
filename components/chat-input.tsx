"use client";

import { ArrowUp } from "lucide-react";

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}) {
  return (
    <form
      className="mx-auto w-full max-w-3xl px-4 pb-6 pt-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label className="flex items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-4 py-2 shadow-[0_12px_40px_-18px_rgba(124,58,237,0.45)] ring-1 ring-violet-200/60 transition focus-within:ring-2 focus-within:ring-violet-400">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ask me anything…"
          disabled={disabled}
          className="h-11 flex-1 bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:bg-stone-300"
          aria-label="Send message"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </label>
    </form>
  );
}
