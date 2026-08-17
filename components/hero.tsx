"use client";

import { profile } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const role = profile.roles[roleIndex];
    setTyped("");
    let index = 0;
    const typing = window.setInterval(() => {
      index += 1;
      setTyped(role.slice(0, index));
      if (index >= role.length) {
        window.clearInterval(typing);
      }
    }, 55);
    const advance = window.setTimeout(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, role.length * 55 + 1800);
    return () => {
      window.clearInterval(typing);
      window.clearTimeout(advance);
    };
  }, [roleIndex]);

  return (
    <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-4 pt-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-serif text-2xl text-stone-500 sm:text-3xl"
      >
        Hey, I&apos;m {profile.firstName}{" "}
        <span className="animate-wave" aria-hidden="true">
          👋
        </span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="mt-3 min-h-[1.15em] max-w-4xl text-5xl font-semibold tracking-tight text-stone-900 sm:text-7xl"
      >
        {typed}
        <span className="animate-blink ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-1 bg-violet-500 align-middle" />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22 }}
        className="mt-5 max-w-xl text-base leading-relaxed text-stone-500 sm:text-lg"
      >
        {profile.headline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="relative mt-8"
      >
        <div className="absolute inset-8 rounded-full bg-white/20 blur-2xl" />
        <AnimatePresence>
          <motion.div
            className="animate-float relative"
            whileHover={{ scale: 1.04 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${profile.avatar}?v=2`}
              alt={profile.name}
              className="relative h-56 w-56 rounded-full object-cover object-[center_18%] shadow-[0_25px_60px_-20px_rgba(124,58,237,0.35)] sm:h-72 sm:w-72"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
