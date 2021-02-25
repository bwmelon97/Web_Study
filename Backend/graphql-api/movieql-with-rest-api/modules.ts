import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

type MoviesParams = {
    limit?: number;
    page?: number;
    minimum_rating?: number;
}

export const getMovies = async (params?: MoviesParams) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, { params })

    return movies;
}

export const getMovieByID = async (movie_id: number) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: { movie_id }
    });

    return movie;
}

export const getMovieSuggestions = async (movie_id: number) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL,  {
        params: { movie_id }
    })

    return movies;
}