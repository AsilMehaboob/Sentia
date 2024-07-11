import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
let genAI: GoogleGenerativeAI | null = null;
let model: any = null; // Replace 'any' with the actual type if known

if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `you are a sentiment analyzer. When text is inputted, give the answer as "the sentiment of the text is {sentiment} with a confidence score of {score}." you can include multiple decimal.very positive should be between 0.5 and 1 and similarly for negative and 0 for neutral`,
  });
}

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function generateResponse(input: string): Promise<string> {
  if (!genAI || !model) {
    throw new Error("GoogleGenerativeAI or model is not initialized.");
  }

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: input }],
      },
    ],
  });

  const result = await chatSession.sendMessage(input);
  return result.response.text();
}
