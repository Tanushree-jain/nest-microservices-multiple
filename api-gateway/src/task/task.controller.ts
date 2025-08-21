import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { TaskProxyService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly tasks: TaskProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  create(@Body() dto: CreateTaskDto) {
    return this.tasks.createTask(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List tasks' })
  findAll() {
    return this.tasks.getTasks();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by id' })
  @ApiParam({ name: 'id', example: 1 })
  remove(@Param('id') id: string) {
    return this.tasks.deleteTask(Number(id));
  }
}
