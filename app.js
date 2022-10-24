const express = require("express");
import cors from "express";
const { ApolloServer } = require("apollo-server-express");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my api");
});

async function start() {

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

await apolloServer.start();
apolloServer.applyMiddleware({ app, path: "/api" });

app.use((req, res, next) => {
    res.status(404).send("not found");
  });

  app.listen(process.env.PORT || 3000, () =>
    console.log("Server on port", process.env.PORT || 3000)
  );
}

start();