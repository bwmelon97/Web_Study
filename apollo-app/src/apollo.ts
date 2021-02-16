import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";


const cache = new InMemoryCache({
    typePolicies: {
        Movie: {
            fields: {
                isLiked: {
                    read: () => false
                }
            }
        }
    }
})


const client = new ApolloClient({
    uri: 'https://1nltu.sse.codesandbox.io/',
    cache
})

export default client;