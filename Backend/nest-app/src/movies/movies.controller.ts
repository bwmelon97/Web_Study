import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies () {
        return 'Get All Movies !!'
    }

    @Get('/:id')
    getMovieById (@Param('id') movieId: string) {
        return `Get Movie with ID: ${movieId}`;
    }

    @Post()
    createMovie () {
        return 'Create A Movie'
    }

    @Delete('/:id')
    deleteMovie (@Param('id') movieId: string) {
        return `Delete Movie with ID: ${movieId}`;
    }

    @Patch('/:id')
    updateMovie (@Param('id') movieId: string) {
        return `Update Movie with ID: ${movieId}`;
    }

}
