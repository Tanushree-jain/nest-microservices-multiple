import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly users: UserService) {}

  @MessagePattern({ cmd: 'create_user' })
  create(@Payload() dto: CreateUserDto) {
    return this.users.create(dto);
  }

  @MessagePattern({ cmd: 'get_users' })
  findAll() {
    return this.users.findAll();
  }
}
