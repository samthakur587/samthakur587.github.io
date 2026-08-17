import { ContactCard } from "@/components/cards/contact-card";
import { FunCard } from "@/components/cards/fun-card";
import { MeCard } from "@/components/cards/me-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SkillsCard } from "@/components/cards/skills-card";
import type {
  ContactOutput,
  FunOutput,
  ProfileOutput,
  ProjectsOutput,
  SkillsOutput,
} from "@/lib/tool-data";

type ToolPart = {
  type: string;
  state?: string;
  output?: unknown;
};

export function ToolPartView({ part }: { part: ToolPart }) {
  if (part.state && part.state !== "output-available") {
    return (
      <p className="text-sm text-zinc-400">
        {part.state === "input-streaming" || part.state === "input-available"
          ? "Looking that up…"
          : null}
      </p>
    );
  }

  if (!part.output) return null;

  switch (part.type) {
    case "tool-getProfile":
      return <MeCard data={part.output as ProfileOutput} />;
    case "tool-getProjects":
      return <ProjectsCard data={part.output as ProjectsOutput} />;
    case "tool-getSkills":
      return <SkillsCard data={part.output as SkillsOutput} />;
    case "tool-getFun":
      return <FunCard data={part.output as FunOutput} />;
    case "tool-getContact":
      return <ContactCard data={part.output as ContactOutput} />;
    default:
      return null;
  }
}
