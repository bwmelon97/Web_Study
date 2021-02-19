import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://1nltu.sse.codesandbox.io/',
    cache: new InMemoryCache(),
    resolvers: {
        Movie: {
            isLiked: () => false
        }
    }
})

export default client;