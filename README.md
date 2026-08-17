# Samunder Singh — AI portfolio

Conversational portfolio inspired by chat-first sites like [aaabadcode.com](https://www.aaabadcode.com/). Visitors ask questions or tap **Me / Projects / Skills / Fun / Contact** and get rich cards instead of a long static page.

This is original code, not a Fastfolio or Toukoum fork.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Topic chips work without an API key. Typed chat needs a key (see below). Until then, free-text replies explain that AI is not configured yet.

## Add an LLM key (optional)

Copy `.env.example` to `.env.local` and set **one** of:

- `OPENAI_API_KEY` (default model: `gpt-4o-mini`)
- `GROQ_API_KEY` (default model: `llama-3.3-70b-versatile`)
- `GOOGLE_GENERATIVE_AI_API_KEY` (default model: `gemini-2.0-flash`)

Never put keys in client code. They stay on the server and in Vercel env vars.

## Deploy on Vercel

GitHub Pages cannot run `/api/chat`. Host this repo on [Vercel](https://vercel.com):

1. Import the GitHub repository.
2. Framework preset: Next.js.
3. Add the same env var(s) as above.
4. Deploy. You will get a `*.vercel.app` URL.

`https://samthakur587.github.io` will no longer serve this app unless you disable GitHub Pages or add a redirect to the Vercel URL.

## Edit content

All copy lives in [`data/profile.ts`](data/profile.ts) — bio, jobs, projects, skills, fun facts, and contact links. Avatar and resume are in `public/`.
