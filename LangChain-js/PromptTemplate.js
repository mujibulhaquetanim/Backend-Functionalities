import { configDotenv } from "dotenv";
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGroq } from "@langchain/groq";
import fs from 'fs';

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "llama-3.3-70b-versatile",
    temperature: 0.3
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

//looked up the langchain documentation for ChatPromptTemplate.
const messages = [
    ["system", "You are a helpful assistant"],
    ["user", "Tell me a joke about {topic}"],
  ];

// Create the ChatPromptTemplate from the messages array
const promptTemplate = ChatPromptTemplate.fromMessages(messages);

// Format the prompt with the desired topic and count
const prompt = await promptTemplate.invoke({
    topic: "doctor",
    count: 3
});

// Debug: Log the formatted prompt to ensure placeholders are replaced correctly
console.log("Formatted Prompt:", prompt);

// Invoke the model with the formatted prompt and capture its response
const response = await model.invoke(prompt); //invoke returns an object
console.log("Response:", response.content);

// Write the response content to a file
fs.writeFile('./GeneratedData/promptMessagesTemplate.txt', response.content, (err) => {
    if (err) throw err;
});