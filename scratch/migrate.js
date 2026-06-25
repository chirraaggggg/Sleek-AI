const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../app/api/project/route.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Imports
content = content.replace('import { getAuthServer } from "@/lib/insforge-server";', 'import { getAuthServer } from "@/lib/supabase-server";');
content = content.replace('import { createUIMessageStream, createUIMessageStreamResponse, generateId, UIMessage } from "ai";', 'import { createUIMessageStream, createUIMessageStreamResponse, generateId, UIMessage, generateText, streamText } from "ai";\nimport { google, anthropic } from "@/lib/ai-client";');

// 2. Database calls
content = content.replace(/insforge\.database/g, 'supabase');
content = content.replace(/const { user, insforge } =/g, 'const { user, supabase } =');

// 3. AI SDK generation - runGenerationWorker main completion
content = content.replace(/const result = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*'google\/gemini-3\.1-pro-preview',[\s\S]*?messages:\s*\[([\s\S]*?)\],[\s\S]*?webSearch:\s*\{ enabled: false \},[\s\S]*?maxTokens:\s*30000[\s\S]*?\}\)/, `const result = await generateText({
      model: google('gemini-2.5-pro'),
      maxOutputTokens: 30000,
      messages: [$1]
    })`);

// 4. AI SDK generation - runGenerationWorker summary completion
content = content.replace(/const summaryResult = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*'google\/gemini-2\.5-flash-lite',[\s\S]*?messages:\s*\[([\s\S]*?)\],[\s\S]*?stream:\s*true,[\s\S]*?webSearch:\s*\{ enabled: false \}[\s\S]*?\}\)/, `const summaryResult = await streamText({
    model: google('gemini-2.5-flash-lite'),
    messages: [$1]
  })`);

// 5. Fix chunk handling for runGenerationWorker summary
content = content.replace(/for await \(const chunk of summaryResult\) \{[\s\S]*?const delta = chunk\.choices\[0\]\.delta\?\.content \|\| "";/, `for await (const delta of summaryResult.textStream) {`);


// 6. AI SDK generation - runRegenerateWorker main completion
content = content.replace(/const result = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*"google\/gemini-3-flash-preview",[\s\S]*?messages:\s*\[([\s\S]*?)\],[\s\S]*?webSearch:\s*\{ enabled: false \},[\s\S]*?maxTokens:\s*28000[\s\S]*?\}\);/, `const result = await generateText({
    model: google("gemini-2.5-flash"),
    maxOutputTokens: 28000,
    messages: [$1]
  });`);

// 7. AI SDK generation - runRegenerateWorker summary completion
content = content.replace(/const summaryResult = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*'google\/gemini-2\.5-flash-lite',[\s\S]*?messages:\s*\[([\s\S]*?)\],[\s\S]*?stream:\s*true,[\s\S]*?webSearch:\s*\{ enabled: false \}[\s\S]*?\}\)/g, `const summaryResult = await streamText({
    model: google('gemini-2.5-flash-lite'),
    messages: [$1]
  })`);

// 8. POST API Intent Classification
content = content.replace(/const result = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*'anthropic\/claude-sonnet-4\.5',[\s\S]*?messages:\s*\[([\s\S]*?)\],?[\s\S]*?\}\)/, `const result = await generateText({
              model: anthropic('claude-sonnet-4-5'),
              messages: [$1]
            })`);

// 9. POST API Chat stream
content = content.replace(/const chatResult = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*"google\/gemini-2\.5-pro",[\s\S]*?messages:\s*\[([\s\S]*?)\.\.\.modelMessages[\s\S]*?\],[\s\S]*?stream:\s*true,[\s\S]*?webSearch:\s*\{ enabled: false \}[\s\S]*?\}\)/, `const chatResult = await streamText({
                model: google("gemini-2.5-pro"),
                messages: [$1...modelMessages]
              })`);

// 10. Fix chunk handling for chatResult
content = content.replace(/for await \(const chunk of chatResult\) \{[\s\S]*?checkAbort\(\);[\s\S]*?const delta = chunk\.choices\[0\]\?\.delta\?\.content \|\| "";/, `for await (const delta of chatResult.textStream) {\n                checkAbort();`);

// 11. POST API Analysis
content = content.replace(/const analysisResult = await insforge\.ai\.chat\.completions\.create\(\{[\s\S]*?model:\s*'anthropic\/claude-sonnet-4\.5',[\s\S]*?messages:\s*\[([\s\S]*?)\],[\s\S]*?maxTokens:\s*28000,?[\s\S]*?\}\);/, `const analysisResult = await generateText({
              model: anthropic('claude-sonnet-4-5'),
              maxOutputTokens: 28000,
              messages: [$1]
            });`);

// 12. Fix result text access (multiple places)
content = content.replace(/result\.choices\[0\]\.message\.content/g, 'result.text');

// 13. Fix image part mapping (type: "image_url" -> "image")
content = content.replace(/type: "image_url" as const,[\s\S]*?image_url:\s*\{[\s\S]*?url:\s*p\.url[\s\S]*?\}/, `type: "image" as const,\n        image: p.url`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Migration script completed successfully');
