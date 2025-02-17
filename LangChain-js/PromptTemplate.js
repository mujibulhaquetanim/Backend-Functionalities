import { configDotenv } from "dotenv";
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGroq } from "@langchain/groq";
import fs from 'fs';
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "deepseek-r1-distill-llama-70b",
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

const messages = [
    new SystemMessage("You are a comedian who tells jokes about {topic}."),
    new HumanMessage("Okay, now tell me {count}. mention the topics but no need for extra conversation."),
];

// Create the ChatPromptTemplate from the messages array
const promptTemplate = ChatPromptTemplate.fromMessages(messages);

// Format the prompt with the desired topic and joke_count
const prompt = await promptTemplate.format({
    "topic": "Software Engineer",
    "count": 3
});

const response = await model.invoke(prompt);
console.log(response.content);


fs.writeFile('./GeneratedData/promptMessagesTemplate.txt', response.content,(err) => {if (err) throw err;});