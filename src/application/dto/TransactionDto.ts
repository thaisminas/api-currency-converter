import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class TransactionDto {
  @ApiProperty({
    example: 'ee541a08-8f36-4c5e-9803-0dd0467367io',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: '34541a08-8f36-4c5e-9803-0dd0467367io',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    example: 'BRL',
  })
  @IsString()
  @IsNotEmpty()
  originCurrency: string;

  @ApiProperty({
    example: 10.0,
  })
  @IsNumber()
  @Min(0)
  originValue: number;

  @ApiProperty({
    example: 'USD',
  })
  @IsString()
  @IsNotEmpty()
  destinationCurrency: string;

  @ApiProperty({
    example: 12.0,
  })
  @IsNumber()
  @Min(0)
  conversionRateUsed: number;
}
