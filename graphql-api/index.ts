import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./movieql-with-rest-api/resolvers";

const sever = new GraphQLServer({
    typeDefs: 'movieql-with-rest-api/schema.graphql',
    resolvers
});

sever.start(() => console.log('GraphQL Server Start !!'));