import type { Meme } from "@/data/memes";

export function MemeCard({ meme }: { meme: Meme }) {
  if (meme.kind === "drake") {
    return (
      <figure className="max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
        <div className="grid grid-cols-[7.5rem_1fr] items-center gap-3 bg-stone-900 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meme.noSrc}
            alt=""
            className="h-24 w-24 rounded-xl object-cover"
          />
          <p className="text-sm font-semibold text-white">
            {meme.noText} <span aria-hidden="true">❌</span>
          </p>
        </div>
        <div className="grid grid-cols-[7.5rem_1fr] items-center gap-3 bg-emerald-600 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meme.yesSrc}
            alt=""
            className="h-24 w-24 rounded-xl object-cover"
          />
          <p className="text-sm font-semibold text-white">
            {meme.yesText} <span aria-hidden="true">✅</span>
          </p>
        </div>
        <figcaption className="px-4 py-3 text-center text-sm italic text-stone-600">
          {meme.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="max-w-md overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={meme.src} alt={meme.alt} className="aspect-square w-full object-cover" />
      <figcaption className="px-4 py-3 text-center text-sm italic text-stone-600">
        {meme.caption}
      </figcaption>
    </figure>
  );
}
