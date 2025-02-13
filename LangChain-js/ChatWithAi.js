import { configDotenv } from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import fs from 'fs';

configDotenv();

//model created
const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "qwen-2.5-32b",
    temperature: 0.7
})

//createInterface instance created to listen the line event.
const rl = createInterface({ input, output })

//To keep the chat messages of system and human, array is initialized and system message is pushed to it using systemMessage method.
const history = [];
history.push(new SystemMessage("You are a helpful Assistant. Answer the question in concise and precise way"));

//user input taken and pushed it to the history array using humanMessage method of langchain.
const prompt = async () => {
    return new Promise((resolve) => {
        rl.question("You: ", (userInput) => {
            history.push(new HumanMessage(userInput));
            resolve(userInput);
        })
    })
}

async function infiniteChat() {
    let userInput = '';
    while (userInput.toLowerCase() !== 'exit') {
        userInput = await prompt();
        history.push(new HumanMessage(userInput));

        //creating a variable to store the response of the model.
        const response = await model.invoke(history);
        history.push(new AIMessage(response.content));

        console.log(`Assistant: ${response.content}`);
    }
    console.log('Bye!');
    rl.close();
    saveChatHistoryToJSONFile(history);
}

function saveChatHistoryToJSONFile(history){
    const data = JSON.stringify(history);
    fs.writeFileSync('chatHistory.json', data, 'utf8');
    console.log('Chat history saved to chatHistory.json');
}

infiniteChat();
