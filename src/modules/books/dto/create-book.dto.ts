import { ApiProperty } from "@nestjs/swagger";
import {IsInt, isNotEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateBookDto {
    @ApiProperty({ description: 'Book Name', example: 'Refactor guru book..', required: true })
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: "Book Name is too short. Min length is $constraint1 characters, but actual is $value" })
    @MaxLength(50, { message: "Book Name is too Long. Max length is $constraint1 characters, but actual is $value" })
    book_name: string;

    @ApiProperty({description: 'User Id', example: 5, required: true })
    @IsInt()
    user_id: number;
}
