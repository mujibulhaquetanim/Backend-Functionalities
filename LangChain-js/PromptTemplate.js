import { configDotenv } from "dotenv";
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGroq } from "@langchain/groq";
import fs from 'fs';

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "qwen-2.5-32b",
    temperature: 0.7
});

// template string to create a prompt which will be passed to the model. the placeholder {tone}, {company}, {position}, and {skill} will be replaced with the values passed to the prompt.
// const template = "Write a {tone} email to {company} expressing interest in the {position} position, mentioning {skill}";

// const promptTemplate = ChatPromptTemplate.fromTemplate(template);

// // invoke returns an object
// const prompt = await promptTemplate.invoke({
//     tone: "formal",
//     company: "Google",
//     position: "Software Engineer",
//     skill: "JavaScript"
// });

// format returns a string
// const prompt = await promptTemplate.format({
//     tone: "formal",
//     company: "Google",
//     position: "Software Engineer",
//     skill: "JavaScript"
// })

// console.log("Type of prompt:", typeof prompt);
// console.log("Prompt:", prompt);

const message = [
    {"system": "You are a senior AI Engineer who resolve {topic}"},
    {"human": "Help me about {question}"}
]

const response = await model.invoke(prompt);
console.log(response.content);

fs.writeFile('promptTemplate.txt', response.content,(err) => {if (err) throw err;});