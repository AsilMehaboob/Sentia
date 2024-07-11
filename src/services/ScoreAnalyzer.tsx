import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `you are a sentiment analyzer. When text is inputted, give the answer as score as a number you can include multiple decimal.no matter what the context is analyze and give the score.score should be between -1 and 1 where -1 is more negative and 1 is more positive`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function generateScore(input: string): Promise<string> {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: input }],
      },
    ],
  });

  const score = await chatSession.sendMessage(input);
  return score.response.text();
}
