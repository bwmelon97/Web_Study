import { getMovies, getMovieByID } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovieByID(id)
    }
}

export default resolvers;