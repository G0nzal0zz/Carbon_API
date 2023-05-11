import { IsNotEmpty, IsNumber, IsString, isEmpty } from "class-validator";

export class CreateActivityTypeDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    min_emission: number;

    @IsNotEmpty()
    @IsNumber()
    max_emission: number;
}
