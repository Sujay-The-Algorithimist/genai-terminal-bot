import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({apiKey: "AIzaSyBhjuaevZtZQhiAq-0koTv3D58xgt6onqA"});
const History=[];

async function Chatting(userProblem) {

    History.push({
        role:'user',
        parts:[{text:userProblem}]
    });
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History
  });

  History.push({
        role:'model',
        parts:[{text:response.text}]
    });
    console.log("AI: ",response.text);
}


async function main() {
    const userProblem= readlineSync.question("User: ");// this reds user's question
    await Chatting(userProblem);
    main();
}

await main();