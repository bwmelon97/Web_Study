import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,                // DTO에 정의되지 않은 데이터는 무시하기 (정의된 데이터 기준으로 실행)
        forbidNonWhitelisted: true,     // DTO에 정의되지 않은 데이터가 있으면 에러 발생
        transform: true                 // url의 Params의 타입을 변환
      })
    )
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello Nest!');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect([])
    })

    it('POST 200', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'test',
          year: 2002,
          genres: ['test']
        })
        .expect(201)
        .expect({
          id: 1,
          title: 'test',
          year: 2002,
          genres: ['test']
        })
    })

    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'test',
          year: 2002,
          genres: ['test'],
          other: 'things'
        })
        .expect(400)
    })
  })

  describe('/movies/:id', () => {
    it('/movies/1 GET 200', () => {
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200)
        .expect({
          id: 1,
          title: 'test',
          year: 2002,
          genres: ['test']
        })
    })

    it('/movies/999 GET 404', () => {
      return request(app.getHttpServer())
        .get('/movies/999')
        .expect(404)
    })

    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({
          title: 'Updated Title'
        })
        .expect(200)
    })

    it('DELETE 200', () => {
      return request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200)
    })
  })

});
