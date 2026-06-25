import { createAnthropic } from '@ai-sdk/anthropic';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
export const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY! });
