/* Data Type & Datas */
type Movie = {
    id: number;
    name: string;
    score: number;
}

let curID = 7;

let movies: Movie[] = [
    {  
        id: 1,
        name: '불한당',
        score: 8.9
    },
    {  
        id: 2,
        name: '기생충',
        score: 9.5
    },
    {  
        id: 3,
        name: '아이캔스피크',
        score: 9.3
    },
    {  
        id: 4,
        name: '조커',
        score: 9.2
    },
    {  
        id: 5,
        name: '올드보이',
        score: 9.4
    },
    {  
        id: 6,
        name: '클레멘타인',
        score: 9.9
    },
]

/* Query Funcs */
export const getMovies = () => movies;

export const getMovieByID = (id: number): Movie | undefined => {
    return movies.filter(movie => movie.id === id)[0];
}

/* Mutation Funcs */
export const addMovie = (name: string, score: number) => {
    const newMovie: Movie = {
        id: curID++,
        name, score
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = (id: number): boolean => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if ( cleanedMovies.length < movies.length ) {
        movies = cleanedMovies;
        return true
    }
    else {
        return false
    }
}