import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./movieql/resolvers";


const sever = new GraphQLServer({
    typeDefs: 'movieql/schema.graphql',
    resolvers
});

sever.start(() => console.log('GraphQL Server Start !!'));