"use client";

import { MemeCard } from "@/components/cards/meme-card";
import { ToolPartView } from "@/components/cards/tool-part";
import { memes, type MemeId } from "@/data/memes";
import type { UIMessage } from "ai";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function isMemePart(part: UIMessage["parts"][number]): part is {
  type: "data-meme";
  data: { id: MemeId };
} {
  return (
    part.type === "data-meme" &&
    "data" in part &&
    typeof part.data === "object" &&
    part.data !== null &&
    "id" in part.data
  );
}

export function MessageList({
  messages,
  isBusy,
}: {
  messages: UIMessage[];
  isBusy: boolean;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const memeAnchorRef = useRef<HTMLDivElement>(null);
  const lastAssistantId = [...messages]
    .reverse()
    .find((message) => message.role === "assistant")?.id;

  useEffect(() => {
    const list = listRef.current;
    const meme = memeAnchorRef.current;
    if (!list || !meme) return;

    const frame = requestAnimationFrame(() => {
      const listRect = list.getBoundingClientRect();
      const memeRect = meme.getBoundingClientRect();
      const nextTop = list.scrollTop + (memeRect.top - listRect.top) - 12;

      list.scrollTo({
        top: Math.max(0, nextTop),
        behavior: "smooth",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [messages]);

  return (
    <div
      ref={listRef}
      className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col gap-6 overflow-y-auto px-4 py-6"
    >
      {messages.map((message) => (
        <motion.article
          key={message.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={
            message.role === "user" ? "flex justify-end" : "flex justify-start"
          }
        >
          <div
            className={
              message.role === "user"
                ? "max-w-[85%] rounded-3xl bg-violet-700 px-4 py-2.5 text-sm text-white shadow-md shadow-violet-700/20"
                : "w-full max-w-3xl space-y-3 text-sm text-stone-800"
            }
          >
            {message.parts.map((part, index) => {
              if (part.type === "text" && part.text) {
                return (
                  <p
                    key={`${message.id}-text-${index}`}
                    className="whitespace-pre-wrap leading-relaxed"
                  >
                    {part.text}
                  </p>
                );
              }
              if (isMemePart(part) && part.data.id in memes) {
                const isLatestMeme = message.id === lastAssistantId;
                return (
                  <div
                    key={`${message.id}-meme-${index}`}
                    ref={isLatestMeme ? memeAnchorRef : undefined}
                  >
                    <MemeCard meme={memes[part.data.id]} />
                  </div>
                );
              }
              if (part.type.startsWith("tool-")) {
                return (
                  <ToolPartView
                    key={`${message.id}-tool-${index}`}
                    part={part}
                  />
                );
              }
              return null;
            })}
          </div>
        </motion.article>
      ))}
      {isBusy ? (
        <p className="text-sm text-violet-500">Thinking…</p>
      ) : null}
    </div>
  );
}
