"use client";

import { ChatInput } from "@/components/chat-input";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MessageList } from "@/components/message-list";
import { TopicChips } from "@/components/topic-chips";
import { type MemeId } from "@/data/memes";
import { getToolOutput } from "@/lib/tool-data";
import type { Topic } from "@/lib/topics";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function createId() {
  return crypto.randomUUID();
}

function memePart(id: MemeId): UIMessage["parts"][number] {
  return {
    type: "data-meme",
    data: { id },
  } as UIMessage["parts"][number];
}

function messagesForTopic(topic: Topic): UIMessage[] {
  return [
    {
      id: createId(),
      role: "user",
      parts: [{ type: "text", text: topic.prompt }],
    },
    {
      id: createId(),
      role: "assistant",
      parts: [
        memePart(topic.id),
        ...(topic.intro
          ? [{ type: "text" as const, text: topic.intro }]
          : []),
        {
          type: `tool-${topic.tool}`,
          toolCallId: createId(),
          state: "output-available",
          input: {},
          output: getToolOutput(topic.tool),
        } as UIMessage["parts"][number],
      ],
    },
  ];
}

function gpuPoorMessages(userText: string): UIMessage[] {
  return [
    {
      id: createId(),
      role: "user",
      parts: [{ type: "text", text: userText }],
    },
    {
      id: createId(),
      role: "assistant",
      parts: [
        memePart("gpuPoor"),
        {
          type: "text",
          text: "I'm GPU poor and API poor. No model, no credits, no 4090 — just vibes.",
        },
      ],
    },
  ];
}

export function ChatShell() {
  const { messages, setMessages, stop } = useChat();
  const [input, setInput] = useState("");
  const hasMessages = messages.length > 0;

  function handleChip(topic: Topic) {
    setMessages((current) => [...current, ...messagesForTopic(topic)]);
  }

  function handleSubmit() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((current) => [...current, ...gpuPoorMessages(text)]);
  }

  function handleReset() {
    stop();
    setMessages([]);
    setInput("");
  }

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-white text-stone-900">
      <Header onReset={handleReset} />
      <main className="relative z-10 flex min-h-0 flex-1 flex-col">
        <AnimatePresence mode="wait">
          {hasMessages ? (
            <motion.div
              key="chat"
              className="flex min-h-0 flex-1 flex-col"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <MessageList messages={messages} isBusy={false} />
            </motion.div>
          ) : (
            <motion.div
              key="hero"
              className="flex flex-1 flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <Hero />
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`mt-auto ${hasMessages ? "border-t border-white/40 bg-white/35 backdrop-blur-md" : ""}`}
        >
          <div className="py-3">
            <TopicChips onSelect={handleChip} />
          </div>
          <ChatInput
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}
