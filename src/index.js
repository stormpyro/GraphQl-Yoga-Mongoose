import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./typedef";
import { resolvers } from "./resolvers";

import "./database";

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.start(() => {
  console.log("server is running");
});
