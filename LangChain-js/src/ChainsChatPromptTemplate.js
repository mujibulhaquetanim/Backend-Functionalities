import { configDotenv } from "dotenv";
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers'
import { ChatGroq } from "@langchain/groq";
import fs from 'fs'

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    temperature: 0.7,
    model: "qwen-2.5-32b"
});

const messages = [
    ['system', 'You are an expert in {topic}. Answer the question.'],
    ['human', 'Why muslim loves {question}. Tell me 5 fact about {question}']
];

const promptTemplate = ChatPromptTemplate.fromMessages(messages);

// chaining in langchain is done for efficiency. with chaining we can create a single chain which can be used to invoke the model. invoke the chain. pipe returns a chain which can be further used to invoke the model.
// in python this can be written with (|) operator.
const chain = promptTemplate.pipe(model).pipe(new StringOutputParser());

const result = await chain.invoke({ topic: 'history and religion', question: 'cat' });

console.log(result);

fs.writeFile('./GeneratedData/BasicChainMessageTemplate', result, (err) => {
    if (err) throw err
})