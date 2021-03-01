import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                // DTO에 정의되지 않은 데이터는 무시하기 (정의된 데이터 기준으로 실행)
      forbidNonWhitelisted: true,     // DTO에 정의되지 않은 데이터가 있으면 에러 발생
      transform: true                 // url의 Params의 타입을 변환
    })
  )
  await app.listen(3000);
}
bootstrap();