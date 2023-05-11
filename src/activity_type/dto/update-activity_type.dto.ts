import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateActivityTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  min_emission: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  max_emission: number;
}
