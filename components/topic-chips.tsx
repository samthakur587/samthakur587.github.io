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
    <div className="flex items-center justify-center gap-1 px-3 sm:gap-3 sm:px-4">
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
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl border border-stone-200/80 bg-white/90 px-1 py-1.5 text-[11px] font-medium text-stone-800 shadow-sm sm:min-w-[92px] sm:flex-none sm:gap-1.5 sm:rounded-2xl sm:border-white/70 sm:bg-white/75 sm:px-4 sm:py-3 sm:text-sm sm:backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${chipMeta[topic.id].iconClass}`} />
            {topic.label}
          </motion.button>
        );
      })}
    </div>
  );
}
