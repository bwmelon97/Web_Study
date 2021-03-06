import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = []
    private curId: number = 1;

    getAll(): Movie[] {
        return this.movies;
    }

    getOneByID(movieId: number): Movie {
        const movie = this.movies.find(m => m.id === movieId)
        if (!movie ) {
            throw new NotFoundException(`Movie with ID ${movieId} doesn't exist...`)
        }
        return movie;    
    }

    createMovie({title, year, genres}: CreateMovieDto): Movie {
        if (typeof(genres) === 'string') genres = this.strToArray(genres);
        
        const newMovie = {
            id: this.curId++,
            title, year, genres
        }
        this.movies.push(newMovie)
        return newMovie;
    }

    deleteMovie(movieId: number) {
        this.getOneByID(movieId);
        this.movies = this.movies.filter(m => m.id !== movieId)
    }

    updateMovie(movieId: number, {title, year, genres}: UpdateMovieDto): Movie {
        const originalMovie = this.getOneByID(movieId);
        if (typeof(genres) === 'string') genres = this.strToArray(genres);

        const updatedMovieIdx = this.movies.findIndex(m => m.id === movieId);
        const updatedMovie = { ...originalMovie }
        if(title) updatedMovie.title = title;
        if(year) updatedMovie.year = year;
        if(genres) updatedMovie.genres = genres;
        
        this.movies = [
            ...this.movies.slice(0, updatedMovieIdx),
            updatedMovie,
            ...this.movies.slice(updatedMovieIdx + 1)
        ]

        return updatedMovie;
    }

    strToArray = (str: string): string[] => str.split(', ');
}