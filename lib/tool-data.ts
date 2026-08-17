import { profile } from "@/data/profile";
import type { ToolName } from "@/lib/topics";

export const profileOutput = {
  name: profile.name,
  title: profile.title,
  location: profile.location,
  summary: profile.summary,
  extra: profile.extra,
  education: profile.education,
  experience: profile.experience,
  recommendations: profile.recommendations,
  articles: profile.articles,
};

export const projectsOutput = { projects: profile.projects };
export const skillsOutput = {
  skills: profile.skills,
  certifications: profile.certifications,
};
export const funOutput = profile.fun;
export const contactOutput = {
  email: profile.contact.email,
  phone: profile.contact.phone,
  github: profile.contact.github,
  linkedin: profile.contact.linkedin,
  twitter: profile.contact.twitter,
  medium: profile.contact.medium,
  resume: profile.resume,
};

export type ProfileOutput = typeof profileOutput;
export type ProjectsOutput = typeof projectsOutput;
export type SkillsOutput = typeof skillsOutput;
export type FunOutput = typeof funOutput;
export type ContactOutput = typeof contactOutput;
export type ToolOutput =
  | ProfileOutput
  | ProjectsOutput
  | SkillsOutput
  | FunOutput
  | ContactOutput;

export function getToolOutput(tool: ToolName): ToolOutput {
  switch (tool) {
    case "getProfile":
      return profileOutput;
    case "getProjects":
      return projectsOutput;
    case "getSkills":
      return skillsOutput;
    case "getFun":
      return funOutput;
    case "getContact":
      return contactOutput;
  }
}
