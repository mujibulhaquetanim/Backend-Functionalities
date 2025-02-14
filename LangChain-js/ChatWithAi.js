import { configDotenv } from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import fs from 'fs'; // <-- Import the fs module
import { isInstance } from "class-validator";

configDotenv();

// Model created
const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "qwen-2.5-32b",
    temperature: 0.7
});

// CreateInterface instance to listen to the line event
const rl = createInterface({ input, output });

// Array to keep the chat messages; system message is pushed initially
const history = [];
history.push(new SystemMessage("You are a helpful Assistant. Answer the question in a concise and precise way"));

// Function to take user input and push it to the history array
const prompt = async () => {
    return new Promise((resolve) => {
        rl.question("You: ", (userInput) => {
            // No need to push the message here since it's done in the main loop
            resolve(userInput);
        });
    });
};

async function infiniteChat() {
    let userInput = '';
    while (userInput.toLowerCase() !== 'exit') {
        userInput = await prompt();

        // Check for exit condition
        if (userInput.toLowerCase() === 'exit') {
            break;
        }

        // Push the user's message to history
        history.push(new HumanMessage(userInput));

        // Get the model's response
        const response = await model.invoke(history);

        // Push the AI's message to history
        history.push(new AIMessage(response.content));

        console.log(`Assistant: ${response.content}`);
    }

    console.log('Bye!');
    rl.close();

    // Serialize and save the chat history to a JSON file
    saveHistoryToJson(history);
}

// Function to serialize and save history
function saveHistoryToJson(historyArray) {
    // Map over the history to extract relevant data
    const serializedHistory = historyArray.map((message) => {
        let type = '';

        if (message instanceof SystemMessage) {
            type = 'system';
        } else if (message instanceof HumanMessage) {
            type = 'human';
        } else if (message instanceof AIMessage) {
            type = 'ai';
        }

        return {
            type,
            content: message.content,
            date: new Date().toDateString()
        }
    });

    // Convert the serialized history to JSON
    let data = JSON.stringify(serializedHistory, null, 2);

    // Write the serialized history to a file
    fs.writeFile('chat_history.json', data, 'utf8', (err) => {
        if (err) {
            console.error('Error saving chat history:', err);
        } else {
            console.log('Chat history saved to chat_history.json');
        }
    });
}

infiniteChat();
