import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

import { DefaultMovie } from "./types";


export const moviesContainIsLikedVar = makeVar<DefaultMovie[]>([]);
export const toggleMovieLike = (movie_id: number) => {
    const selectedMovieIdx = moviesContainIsLikedVar().findIndex(m => m.id === movie_id);
    moviesContainIsLikedVar([
        ...moviesContainIsLikedVar().slice(0, selectedMovieIdx),
        {...moviesContainIsLikedVar()[selectedMovieIdx], 
            isLiked: !moviesContainIsLikedVar()[selectedMovieIdx].isLiked
        },
        ...moviesContainIsLikedVar().slice(selectedMovieIdx + 1)
    ])
    console.log(moviesContainIsLikedVar())
} 


const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                moviesContainIsLiked: {
                    read: () => moviesContainIsLikedVar()
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