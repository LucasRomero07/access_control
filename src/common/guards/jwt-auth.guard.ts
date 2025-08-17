import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

interface JwtPayload {
  userId: string;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;
    if (!authHeader) return false;

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) return false;

    try {
      const payload: JwtPayload = this.jwtService.verify(token);
      request['user'] = payload;
      return true;
    } catch {
      return false;
    }
  }
}
