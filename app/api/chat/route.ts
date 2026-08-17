import { fallbackChatResponse } from "@/lib/fallback";

export const maxDuration = 30;

export async function POST() {
  return fallbackChatResponse();
}
