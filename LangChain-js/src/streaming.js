import { ChatGroq } from "@langchain/groq";
import { configDotenv } from "dotenv";

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "mixtral-8x7b-32768",
    temperature: 0
});

const stream = await model.stream("Hello! Tell me about yourself.");
const chunks = [];
for await (const chunk of stream) {
    chunks.push(chunk);
    console.log(`${chunk.content}|`);
}