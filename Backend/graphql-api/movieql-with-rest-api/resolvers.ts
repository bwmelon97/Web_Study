import { 
    getMovies,
    getMovieByID,
    getMovieSuggestions
} from "./modules";

const resolvers = {
    Query: {
        movies: (_, {limit, page, minimum_rating}) => getMovies({limit, page, minimum_rating}),
        movie: (_, {movie_id}) => getMovieByID(movie_id),
        movie_suggestions: (_, {movie_id}) => getMovieSuggestions(movie_id),
    }
}

export default resolvers