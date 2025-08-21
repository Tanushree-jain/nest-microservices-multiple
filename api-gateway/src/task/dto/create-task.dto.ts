import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Learn NestJS' })
  title: string;

  @ApiProperty({ example: 'Build microservices with Redis' })
  description: string;
}
