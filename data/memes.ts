export const memes = {
  me: {
    kind: "single" as const,
    src: "/memes/me.png",
    alt: "Leonardo DiCaprio pointing and smiling",
    caption: "So… you’re here to know me?",
  },
  projects: {
    kind: "drake" as const,
    noSrc: "/memes/projects-no.png",
    yesSrc: "/memes/projects-yes.png",
    noText: "Making another tutorial project",
    yesText: "Building something actually useful",
    caption: "Making another tutorial project ❌ / Building something actually useful ✅",
  },
  skills: {
    kind: "single" as const,
    src: "/memes/skills.png",
    alt: "Gigachad",
    caption: "Knows 47 technologies. Uses 3.",
  },
  fun: {
    kind: "single" as const,
    src: "/memes/fun.png",
    alt: "Ryan Gosling laughing",
    caption: "Finally, a section where I’m not pretending to be productive.",
  },
  contact: {
    kind: "single" as const,
    src: "/memes/contact.png",
    alt: "Monkey puppet looking away",
    caption: "Me waiting for you to hit ‘Send’…",
  },
  gpuPoor: {
    kind: "single" as const,
    src: "/memes/gpu-poor.png",
    alt: "GPU poor and API poor",
    caption: "I'm GPU poor and API poor. The model is not coming.",
  },
} as const;

export type MemeId = keyof typeof memes;
export type Meme = (typeof memes)[MemeId];
