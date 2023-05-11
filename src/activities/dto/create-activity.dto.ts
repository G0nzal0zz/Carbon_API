import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsString()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    emission: number;
}
