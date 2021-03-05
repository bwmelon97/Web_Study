import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Get All Movies', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe('Get One Movie By ID', () => {
    it('should return a movie', () => {
      createTestMovie();
      const result = service.getOneByID(1);
      expect(result).toBeDefined();
    });

    it('should throw a NotFoundException', () => {
      expect(() => {
        service.getOneByID(999)
      }).toThrowError(NotFoundException);
    });
  })

  describe('Create Movie', () => {
    it('should increase the all movie array length', () => {
      const beforeCreate = service.getAll().length;
      createTestMovie();
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  })

  describe('Delete Movie', () => {
    it("should decrease the all movie array's length", () => {
      createTestMovie();
      const beforeDelete = service.getAll().length;
      service.deleteMovie(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it("should throw a NotFoundException", () => {
      expect(() => {
        service.deleteMovie(999)
      }).toThrowError(NotFoundException);
    })
  })

  describe('Update Movie', () => {
    it("should update movie", () => {
      createTestMovie();
      service.updateMovie(1, {
        title: "Updated Title"
      })
      const result = service.getOneByID(1);
      expect(result.title).toEqual("Updated Title");
    })

    it("should throw a NotFoundException", () => {
      expect(() => {
        service.updateMovie(999, {})
      }).toThrowError(NotFoundException);
    })
  })

  describe('String to Array', () => {
    it("should return array", () => {
      const stringArr = '스릴러, 코미디';
      const result = service.strToArray(stringArr);
      expect(result).toBeInstanceOf(Array);
    })
  })

  /* Custom Funcs */
  const createTestMovie = () => {
    service.createMovie({
      title: 'Test Movie',
      year: 2021,
      genres: ['Test']
    })
  }
});
