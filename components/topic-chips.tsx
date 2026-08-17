"use client";

import { topics, type Topic } from "@/lib/topics";
import { motion } from "framer-motion";
import { Briefcase, Layers, Sparkles, User, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const chipMeta: Record<
  Topic["id"],
  { icon: LucideIcon; iconClass: string }
> = {
  me: { icon: User, iconClass: "text-teal-500" },
  projects: { icon: Briefcase, iconClass: "text-lime-500" },
  skills: { icon: Layers, iconClass: "text-violet-500" },
  fun: { icon: Sparkles, iconClass: "text-pink-500" },
  contact: { icon: UserPlus, iconClass: "text-orange-500" },
};

export function TopicChips({
  onSelect,
  disabled,
}: {
  onSelect: (topic: Topic) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-4">
      {topics.map((topic, index) => {
        const Icon = chipMeta[topic.id].icon;
        return (
          <motion.button
            key={topic.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(topic)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + index * 0.06, duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex min-w-[92px] flex-col items-center gap-1.5 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm font-medium text-stone-800 shadow-sm backdrop-blur-md transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon className={`h-5 w-5 ${chipMeta[topic.id].iconClass}`} />
            {topic.label}
          </motion.button>
        );
      })}
    </div>
  );
}
