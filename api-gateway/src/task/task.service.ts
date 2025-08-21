import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskProxyService {
  constructor(@Inject('TASK_SERVICE') private readonly client: ClientProxy) {}

  createTask(dto: CreateTaskDto) {
    return this.client.send({ cmd: 'create_task' }, dto);
  }

  getTasks() {
    return this.client.send({ cmd: 'get_tasks' }, {});
  }

  deleteTask(id: number) {
    return this.client.send({ cmd: 'delete_task' }, id);
  }
}
