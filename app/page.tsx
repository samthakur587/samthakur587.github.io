import { profile } from "@/data/profile";

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="mt-16 flex items-center gap-3 font-mono text-[13px] text-accent">
      <span aria-hidden="true">//</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-line" />
    </h2>
  );
}

export default function Home() {
  const { contact } = profile;

  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-5 font-mono text-[13px]">
          <p className="text-foreground">
            <span className="text-accent">✻</span> {profile.name.toLowerCase()}
          </p>
          <p className="truncate pl-4 text-faint">{profile.location}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12">
        <div className="flex items-start gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt=""
            className="mt-1 h-14 w-14 shrink-0 rounded-md object-cover object-[center_18%] ring-1 ring-line"
          />
          <div>
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-muted">{profile.title}</p>
            <p className="mt-3 font-mono text-[13px] leading-relaxed text-faint">
              {profile.roles.join("  /  ")}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground">
          {profile.headline}
        </p>

        <SectionLabel>about</SectionLabel>
        <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
          <p>{profile.summary}</p>
          <p>{profile.extra}</p>
        </div>
        <p className="mt-5 font-mono text-[13px] text-faint">
          {profile.education.degree}
          <span className="text-faint"> · </span>
          {profile.education.school}
          <span className="text-faint"> · </span>
          {profile.education.years}
        </p>

        <SectionLabel>experience</SectionLabel>
        <ol className="mt-2">
          {profile.experience.map((job) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="border-b border-line py-6 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                  >
                    {job.company}
                  </a>
                  <span className="font-normal text-muted"> — {job.role}</span>
                </h3>
                <p className="font-mono text-[12px] text-faint">{job.dates}</p>
              </div>
              <p className="mt-1 font-mono text-[12px] text-faint">{job.location}</p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[14px] leading-6 text-muted"
                  >
                    <span className="mt-[2px] font-mono text-accent" aria-hidden="true">
                      –
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <SectionLabel>projects</SectionLabel>
        <ol className="mt-2">
          {profile.projects.map((project) => (
            <li
              key={project.name}
              className="border-b border-line py-6 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="font-mono text-[12px] text-faint">{project.category}</p>
              </div>
              <p className="mt-2 text-[14px] leading-6 text-muted">
                {project.description}
              </p>
              <p className="mt-2 font-mono text-[12px] text-faint">
                {project.tags.join("   ")}
              </p>
            </li>
          ))}
        </ol>

        <SectionLabel>skills</SectionLabel>
        <dl className="mt-5 space-y-4">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div
              key={group}
              className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
            >
              <dt className="font-mono text-[12px] text-accent">{group}</dt>
              <dd className="text-[14px] leading-6 text-muted">
                {items.join("  ·  ")}
              </dd>
            </div>
          ))}
        </dl>

        <SectionLabel>certifications</SectionLabel>
        <ul className="mt-5 space-y-3">
          {profile.certifications.map((item) => (
            <li key={item.name} className="text-[14px] leading-6">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {item.name}
              </a>
              <span className="text-faint"> — {item.issuer}</span>
            </li>
          ))}
        </ul>

        <SectionLabel>writing</SectionLabel>
        <ul className="mt-5 space-y-3">
          {profile.articles.map((article) => (
            <li key={article.url} className="text-[14px] leading-6">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                {article.title}
              </a>
              <span className="font-mono text-[12px] text-faint">
                {" "}
                {article.source}
              </span>
            </li>
          ))}
        </ul>

        <SectionLabel>recommendations</SectionLabel>
        <ul className="mt-5 space-y-6">
          {profile.recommendations.map((item) => (
            <li key={item.name} className="border-l border-accent pl-4">
              <blockquote className="text-[14px] leading-7 text-muted">
                {item.quote}
              </blockquote>
              <p className="mt-3 font-mono text-[12px] text-faint">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline decoration-line underline-offset-4 hover:text-accent"
                >
                  {item.name}
                </a>
                {" — "}
                {item.title}
                {" · "}
                {item.date}
              </p>
            </li>
          ))}
        </ul>

        <SectionLabel>outside</SectionLabel>
        <p className="mt-5 whitespace-pre-line text-[15px] leading-7 text-muted">
          {profile.fun.quote}
        </p>
        <ul className="mt-4 font-mono text-[12px] text-faint">
          {profile.fun.items.map((item) => (
            <li key={item.title} className="py-0.5">
              <span className="text-muted">{item.title.toLowerCase()}</span>
              <span> — {item.detail}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-10">
          {profile.fun.stories.map((story) => (
            <article key={story.title}>
              <h3 className="text-[15px] font-medium">{story.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-muted">{story.body}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {story.photos.map((photo) => (
                  <figure key={photo.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-[4/3] w-full rounded-md object-cover ring-1 ring-line"
                    />
                    <figcaption className="mt-2 font-mono text-[12px] text-faint">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <SectionLabel>contact</SectionLabel>
        <p className="mt-5 text-[15px] text-muted">
          <a
            href={`mailto:${contact.email}`}
            className="text-foreground underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            {contact.email}
          </a>
          <span className="text-faint"> · {contact.phone}</span>
        </p>
        <p className="mt-3 font-mono text-[13px] leading-7 text-muted">
          <a href={contact.github} className="hover:text-accent" target="_blank" rel="noreferrer">
            github
          </a>
          <span className="text-faint"> · </span>
          <a href={contact.linkedin} className="hover:text-accent" target="_blank" rel="noreferrer">
            linkedin
          </a>
          <span className="text-faint"> · </span>
          <a href={contact.twitter} className="hover:text-accent" target="_blank" rel="noreferrer">
            x
          </a>
          <span className="text-faint"> · </span>
          <a href={contact.medium} className="hover:text-accent" target="_blank" rel="noreferrer">
            medium
          </a>
          <span className="text-faint"> · </span>
          <a href={profile.resume} className="hover:text-accent" download>
            resume
          </a>
        </p>
      </main>
    </div>
  );
}
