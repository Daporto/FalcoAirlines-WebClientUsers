import express from 'express'
import cors from 'express'
import {schema} from './infrastructure/driving-adapters/graphql/schema';
import {ApolloServer} from "apollo-server-express";
//const shema = require("./infrastructure/driving-adapters/graphql/shema");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my api");
});

async function start() {

const apolloServer = new ApolloServer({
  schema
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