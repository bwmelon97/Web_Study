import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql/resolvers";


const sever = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers
});

sever.start(() => console.log('GraphQL Server Start !!'));