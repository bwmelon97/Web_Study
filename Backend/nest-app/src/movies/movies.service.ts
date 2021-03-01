import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, MovieParams } from './entities/movies.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = []
    private curId: number = 1;

    getAll(): Movie[] {
        return this.movies;
    }

    getOneByID(movieId: string): Movie {
        const movie = this.movies.find(m => m.id === +movieId)
        if (!movie ) {
            throw new NotFoundException(`Movie with ID ${movieId} doesn't exist...`)
        }
        return movie;    
    }

    createMovie({title, year, genreStr}: MovieParams): Movie {
        const genres = genreStr.split(', ');
        const newMovie = {
            id: this.curId++,
            title, year, genres
        }
        this.movies.push(newMovie)
        return newMovie;
    }

    deleteMovie(movieId: string) {
        this.getOneByID(movieId);
        this.movies = this.movies.filter(m => m.id !== +movieId)
    }

    updateMovie(movieId: string, {title, year, genreStr}: MovieParams): Movie {
        const { id } = this.getOneByID(movieId);
        const genres = genreStr.split(', ');

        const updatedMovieIdx = this.movies.findIndex(m => m.id === +movieId);
        const updatedMovie = { id, title, year, genres }
        
        this.movies = [
            ...this.movies.slice(0, updatedMovieIdx),
            updatedMovie,
            ...this.movies.slice(updatedMovieIdx + 1)
        ]

        return updatedMovie;
    }

}
