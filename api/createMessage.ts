import { OpenAI } from "@openai/client";

export const createMessage = async (text: string) => {
  const openAI = new OpenAI("<YOUR_API_KEY>");
  const response = await openAI.create("text-generation", {
    prompt: text,
    max_tokens: 100,
  });
  return response.choices[0].text;
};
