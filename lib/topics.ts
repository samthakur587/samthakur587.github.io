export const topics = [
  {
    id: "me",
    label: "Me",
    prompt: "Tell me about yourself",
    intro: "Here is a snapshot of who I am and what I have been working on.",
    tool: "getProfile",
  },
  {
    id: "projects",
    label: "Projects",
    prompt: "Show me your projects",
    intro: "A few things I have built — from CV pipelines to LLM playgrounds.",
    tool: "getProjects",
  },
  {
    id: "skills",
    label: "Skills",
    prompt: "What are your skills?",
    intro: "The stack I use day to day, plus certifications.",
    tool: "getSkills",
  },
  {
    id: "fun",
    label: "Fun",
    prompt: "Tell me something fun about you",
    intro: "",
    tool: "getFun",
  },
  {
    id: "contact",
    label: "Contact",
    prompt: "How can I contact you?",
    intro: "The fastest ways to reach me.",
    tool: "getContact",
  },
] as const;

export type Topic = (typeof topics)[number];
export type TopicId = Topic["id"];
export type ToolName = Topic["tool"];

function topicById(id: TopicId) {
  return topics.find((topic) => topic.id === id);
}

export function matchTopic(text: string): Topic | undefined {
  const value = text.toLowerCase().trim();
  const exact = topics.find((topic) => value === topic.prompt.toLowerCase());
  if (exact) return exact;

  if (/\bprojects?\b/.test(value) || /\bportfolio\b/.test(value)) {
    return topicById("projects");
  }
  if (/\bskills?\b/.test(value) || /\bstack\b/.test(value) || /\bcertif/.test(value)) {
    return topicById("skills");
  }
  if (/\bcontact\b/.test(value) || /\bemail\b/.test(value) || /\bhire\b/.test(value) || /\blinkedin\b/.test(value)) {
    return topicById("contact");
  }
  if (
    /\bfun\b/.test(value) ||
    /\bhobb(?:y|ies)\b/.test(value) ||
    /\bcricket\b/.test(value) ||
    /\btrek/.test(value) ||
    /\bcamp/.test(value) ||
    /\bhackathon\b/.test(value)
  ) {
    return topicById("fun");
  }
  if (
    value === "me" ||
    /\b(?:about you|who are you|yourself|bio|experience|education)\b/.test(value)
  ) {
    return topicById("me");
  }
  return undefined;
}
