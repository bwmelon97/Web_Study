import { 
    getMovies, getMovieByID,
    addMovie
} from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieByID(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score)
    }
}

export default resolvers;