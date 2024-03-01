const { ApolloServer } = require('@apollo/server');
const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8000;

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type User{
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
        }
        type Todo{
            id: ID!
            title: String!
            completed: Boolean!
        }
        type Query{
            getTodos: [Todo],
            getUser: [User],
            getUserId(id: ID!): User
        }`,
        resolvers: {
            Query: {
                getTodos: async () => (
                    await fetch('https://jsonplaceholder.typicode.com/todos')
                        .then(response => response.json())
                        .then(json => json)),
                getUser: async () => (
                    await fetch('https://jsonplaceholder.typicode.com/users')
                        .then(response => response.json())
                        .then(json => json)),
                getUserId: async (parent, args) => (
                    await fetch(`https://jsonplaceholder.typicode.com/users/${args.id}`)
                      .then(response => response.json())
                      .then(json => json))

            }
        },
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

}

startServer();