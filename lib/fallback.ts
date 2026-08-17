import { createUIMessageStream, createUIMessageStreamResponse } from "ai";
import { memes } from "@/data/memes";

export function fallbackChatResponse() {
  const stream = createUIMessageStream({
    execute({ writer }) {
      const textId = "fallback-text";
      writer.write({ type: "text-start", id: textId });
      writer.write({
        type: "text-delta",
        id: textId,
        delta: "I'm GPU poor and API poor. No model, no credits, no 4090 — just vibes.",
      });
      writer.write({ type: "text-end", id: textId });
      writer.write({
        type: "data-meme",
        data: { id: "gpuPoor" as const, caption: memes.gpuPoor.caption },
      });
    },
  });

  return createUIMessageStreamResponse({ stream });
}
