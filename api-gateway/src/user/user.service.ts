import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserProxyService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  createUser(dto: CreateUserDto) {
    return this.client.send({ cmd: 'create_user' }, dto);
  }

  getUsers() {
    return this.client.send({ cmd: 'get_users' }, {});
  }
}
