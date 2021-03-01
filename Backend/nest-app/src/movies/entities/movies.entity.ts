export class Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
}

export type MovieParams = {
    title: string;
    year: number;
    genreStr: string;
}