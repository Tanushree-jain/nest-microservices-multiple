import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  private id = 1;

  create(dto: CreateTaskDto): Task {
    const task: Task = { id: this.id++, ...dto };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  delete(id: number): { deleted: boolean } {
    const before = this.tasks.length;
    this.tasks = this.tasks.filter(t => t.id !== id);
    return { deleted: this.tasks.length < before };
  }
}
