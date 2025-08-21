import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaskController } from './task.controller';
import { TaskProxyService } from './task.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK_SERVICE',
        transport: Transport.REDIS,
        options: { host: 'localhost', port: 6379 },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskProxyService],
})
export class TaskModule {}
