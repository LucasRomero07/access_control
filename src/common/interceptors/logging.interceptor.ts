import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    console.log(`Request... [${request.method}] ${request.url}`);
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`Response... ${Date.now() - now}ms`)));
  }
}
