import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ description: 'User first name', example: 'John', required: true })
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: "First name is too short. Min length is $constraint1 characters, but actual is $value" })
    @MaxLength(50, { message: "First Name is too Long. Max length is $constraint1 characters, but actual is $value" })
    first_name: string;

    @ApiProperty({ description: 'User last name', example: 'Doe', required: false, nullable: true })
    @IsString()
    @IsOptional()
    @MaxLength(50, { message: "Last Name is too long. Maximal length is $constraint1 characters, but actual is $value" })
    last_name?: string | null;

    @ApiProperty({ description: 'User mobile number (E.164 format)', example: '+1234567890', required: false, nullable: true })
    @IsPhoneNumber() // Validates international format (e.g., +123...)
    @IsOptional()
    mobile_number?: string | null;

    @ApiProperty({ description: 'User physical address', example: '123 Main St, City, Country', required: false, nullable: true })
    @IsString()
    @IsOptional()
    @MaxLength(200, { message: "Last Name is too long. Maximal length is $constraint1 characters, but actual is $value" })
    address?: string | null;
}