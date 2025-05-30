import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyChXPb2UzHXiXDJuL5x1-L9zln1bHr_isY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Hazme un hola mundo en golang",
  });
  console.log(response.text);
}

main();