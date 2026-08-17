import { google } from "@ai-sdk/google";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";

export function getLanguageModel() {
  if (process.env.OPENAI_API_KEY) {
    return openai(process.env.OPENAI_MODEL ?? "gpt-4o-mini");
  }
  if (process.env.GROQ_API_KEY) {
    return groq(process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile");
  }
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return google(process.env.GOOGLE_MODEL ?? "gemini-2.0-flash");
  }
  return null;
}
