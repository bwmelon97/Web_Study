import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";


const isLiked = makeVar(false);

const cache = new InMemoryCache({
    typePolicies: {
        Movie: {
            fields: {
                isLiked: {
                    read: () => isLiked()
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