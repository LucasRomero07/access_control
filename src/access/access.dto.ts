import { IsNotEmpty, IsUUID, IsDateString } from 'class-validator';

export class CreateAccessDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  spaceId: string;

  @IsNotEmpty()
  code: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}

export class UpdateAccessDto {
  @IsDateString()
  startDate?: Date;

  @IsDateString()
  endDate?: Date;

  active?: boolean;
}
