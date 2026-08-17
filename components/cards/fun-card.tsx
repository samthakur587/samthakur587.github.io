import type { FunOutput } from "@/lib/tool-data";

function StoryPhoto({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="relative overflow-hidden rounded-3xl bg-stone-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-h-[26rem] w-full object-cover sm:max-h-[32rem]"
      />
      <figcaption className="pointer-events-none absolute bottom-3 left-4 text-sm font-medium text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function FunCard({ data }: { data: FunOutput }) {
  return (
    <section className="space-y-10">
      {data.stories.map((story) => (
        <article key={story.title} className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            {story.title}
          </h2>
          <div className="space-y-3">
            {story.photos.map((photo) => (
              <StoryPhoto
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
              />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-stone-600 sm:text-[15px]">
            {story.body}
          </p>
        </article>
      ))}

      <div>
        <p className="text-sm font-medium text-stone-900">{data.heading}</p>
        <p className="mt-1 text-sm text-stone-500">{data.intro}</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-stone-200/80 bg-stone-50/80 px-3.5 py-3"
            >
              <h3 className="text-sm font-semibold tracking-wide text-stone-900">
                {item.emoji} {item.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-sm italic leading-relaxed text-stone-500">
          {data.quote.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
