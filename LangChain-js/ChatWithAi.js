import { configDotenv } from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

configDotenv();

//model created
const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "qwen-2.5-32b",
    temperature: 0.7
})

//createInterface instance created to listen the line event.
const rl = createInterface({ input, output })

