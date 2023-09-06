import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: '34541a08-8f36-4c5e-9803-0dd0467367io',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    example: 'Thais',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'thaisminasds@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;
}
