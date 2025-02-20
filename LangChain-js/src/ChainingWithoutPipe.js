import { configDotenv } from "dotenv"
import { ChatGroq } from "@langchain/groq"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables"

configDotenv();

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "qwen-2.5-32b",
    temperature: 0.7
});

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "You love facts and you tell facts about {animal}"],
    ["user", "Tell me {count} facts."]
  ]);

const formatPrompt = new RunnableLambda({
    func: (input) => promptTemplate.formatPromptValue(input)
  });
  
  const invokeModel = new RunnableLambda({
    func: (promptValue) => model.invoke(promptValue)
  });
  
  const parseOutput = new RunnableLambda({
    func: (response) => response.content
  });
  
  // by passing the runnables as an array we can create a chain which can be used to invoke the model.
//   const chain = RunnableSequence.from([formatPrompt, invokeModel, parseOutput]);

// by passing the runnables as an object with named keys we can create a chain which can be used to invoke the model.
const chain = new RunnableSequence({
    first: formatPrompt,
    middle: [invokeModel],
    last: parseOutput
  });
  
  async function main() {
    const response = await chain.invoke({ animal: "cat", count: 2 });
    console.log(response);
  }
  
  main();