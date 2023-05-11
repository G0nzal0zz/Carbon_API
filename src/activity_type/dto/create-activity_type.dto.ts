// CREATE TABLE Activity_Type (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
//   );

import { IsNotEmpty, IsNumber, IsString, isEmpty } from "class-validator";

export class CreateActivityTypeDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
}
