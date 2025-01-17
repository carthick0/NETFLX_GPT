import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

const genAI = new GoogleGenerativeAI({
  apiKey: GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  return result;
};

export default generateContent ; // Exporting the function properly
