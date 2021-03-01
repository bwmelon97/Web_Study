import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MovieParams } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService:MoviesService) {}

    @Get()
    getAllMovies () {
        return this.movieService.getAll();
    }

    @Get('search')
    searchMovies (@Query('title') searchTitle: string) {
        return `Search Movie with Title: ${searchTitle}`
    }

    @Get(':id')
    getMovieById (@Param('id') movieId: string) {
        return this.movieService.getOneByID(movieId);
    }

    @Post()
    createMovie (@Body() movieData: MovieParams) {
        return this.movieService.createMovie(movieData)
    }

    @Delete(':id')
    deleteMovie (@Param('id') movieId: string) {
        return this.movieService.deleteMovie(movieId)
    }

    @Patch(':id')
    updateMovie (
        @Param('id') movieId: string,
        @Body() movieData: MovieParams
    ) {
        return this.movieService.updateMovie(movieId, movieData)
    }

}
