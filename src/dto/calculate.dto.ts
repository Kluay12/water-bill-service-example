import { ApiProperty } from '@nestjs/swagger';

export class CalculateDto {
    @ApiProperty({ description: 'The first number to add', example: 10 })
    numA!: number;

    @ApiProperty({ description: 'The second number to add', example: 20 })
    numB!: number;
}
