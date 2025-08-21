import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];
  private id = 1;

  create(dto: CreateUserDto): User {
    const user = { id: this.id++, ...dto };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}
