import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Tanushree' })
  name: string;

  @ApiProperty({ example: 'tanu@example.com' })
  email: string;
}
