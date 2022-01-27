import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

//Error: No schema defined

server.start(()=>console.log("Grapghql Server Running"));