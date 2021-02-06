type Movie = {
    id: number;
    name: string;
    score: number;
}

const movies: Movie[] = [
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

export const getMovies = () => movies;

export const getMovieByID = (id: number): Movie => {
    return movies.filter(movie => movie.id === id)[0];
}