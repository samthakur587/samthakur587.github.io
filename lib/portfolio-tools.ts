import { tool } from "ai";
import { z } from "zod";
import { getToolOutput } from "@/lib/tool-data";

const emptyInput = z.object({});

export const portfolioTools = {
  getProfile: tool({
    description:
      "Get Samunder's bio, education, work experience, recommendations, and articles.",
    inputSchema: emptyInput,
    execute: async () => getToolOutput("getProfile"),
  }),
  getProjects: tool({
    description: "Get Samunder's featured projects with links and tech tags.",
    inputSchema: emptyInput,
    execute: async () => getToolOutput("getProjects"),
  }),
  getSkills: tool({
    description: "Get Samunder's technical skills and certifications.",
    inputSchema: emptyInput,
    execute: async () => getToolOutput("getSkills"),
  }),
  getFun: tool({
    description: "Get lighter personal facts, hobbies, and open-source stories.",
    inputSchema: emptyInput,
    execute: async () => getToolOutput("getFun"),
  }),
  getContact: tool({
    description: "Get email, social links, and resume download for Samunder.",
    inputSchema: emptyInput,
    execute: async () => getToolOutput("getContact"),
  }),
};
