import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSpaceDto {
  @IsNotEmpty()
  name: string;

  description?: string;

  @IsNumber()
  capacity: number;
}

export class UpdateSpaceDto {
  name?: string;
  description?: string;
  capacity?: number;
}
