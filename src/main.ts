import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LoggingInterceptor,
  HttpExceptionFilter,
  ValidationPipe,
} from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Interceptor de logs
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Filtro global de errores
  app.useGlobalFilters(new HttpExceptionFilter());

  // Pipe de validación
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
