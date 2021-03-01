import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
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
    getMovieById (@Param('id') movieId: number) {
        return this.movieService.getOneByID(movieId);
    }

    @Post()
    createMovie (@Body() movieData: CreateMovieDto) {
        return this.movieService.createMovie(movieData)
    }

    @Delete(':id')
    deleteMovie (@Param('id') movieId: number) {
        return this.movieService.deleteMovie(movieId)
    }

    @Patch(':id')
    updateMovie (
        @Param('id') movieId: number,
        @Body() movieData: UpdateMovieDto
    ) {
        return this.movieService.updateMovie(movieId, movieData)
    }

}
