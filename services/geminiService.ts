
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the mandatory API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBrainrotChat = async (context: string) => {
  try {
    // Using gemini-3-flash-preview for the basic text generation task.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Genera 5 brevi messaggi di chat in stile "Brainrot" (Gen Z/Alpha slang come Skibidi, Ohio, Sigma, Rizz, Gyatt, Fanum Tax, Aura) relativi a questa situazione di gioco: ${context}. Rispondi in formato JSON (array di stringhe).`,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    // Accessing the .text property directly as per the latest SDK requirements.
    return JSON.parse(response.text || "[]") as string[];
  } catch (error) {
    console.error("Gemini Error:", error);
    return ["SKIBIDI TOILET!", "OHIO RIZZ", "L AURA", "W SIGMA", "FANUM TAX TIME"];
  }
};
