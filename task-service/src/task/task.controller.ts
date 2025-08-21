import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller()
export class TaskController {
  constructor(private readonly tasks: TaskService) {}

  @MessagePattern({ cmd: 'create_task' })
  create(@Payload() dto: CreateTaskDto) {
    return this.tasks.create(dto);
  }

  @MessagePattern({ cmd: 'get_tasks' })
  findAll() {
    return this.tasks.findAll();
  }

  @MessagePattern({ cmd: 'delete_task' })
  delete(@Payload() id: number) {
    return this.tasks.delete(Number(id));
  }
}
