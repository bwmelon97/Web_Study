import { GraphQLServer } from 'graphql-yoga';

const sever = new GraphQLServer({});

sever.start(() => console.log('GraphQL Server Start !!'));