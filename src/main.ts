import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/main/app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT: number | string = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(PORT, () => console.log(`Server is listing on http://localhost:${PORT}`));
}
bootstrap();
