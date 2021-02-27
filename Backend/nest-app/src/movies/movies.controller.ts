import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies () {
        return 'Get All Movies !!'
    }

    @Get('search')
    searchMovies (@Query('title') searchTitle: string) {
        return `Search Movie with Title: ${searchTitle}`
    }

    @Get(':id')
    getMovieById (@Param('id') movieId: string) {
        return `Get Movie with ID: ${movieId}`;
    }

    @Post()
    createMovie (@Body() movieData: {title: string, director: string}) {
        return movieData
    }

    @Delete(':id')
    deleteMovie (@Param('id') movieId: string) {
        return `Delete Movie with ID: ${movieId}`;
    }

    @Patch(':id')
    updateMovie (
        @Param('id') movieId: string,
        @Body() movieData: {title: string, director: string}
    ) {
        return {
            updatedMovie: movieId,
            ...movieData
        }
    }

}
