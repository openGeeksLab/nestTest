import { ConfigService } from './../config/config.service';
import { TaskFilterDto } from './dto/taskFilter';
import { CreateTaskDto } from './dto/createTasks';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Delete, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskStatusValdationPipe } from './pipes/task-status-validation.pipes';

@Controller('tasks')
export class TasksController {
  constructor(private taskServise: TasksService, private configService: ConfigService) { }

  @Get()
    getTasks(@Query(ValidationPipe) filterDto: TaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskServise.getTasksByFilter(filterDto);
    }
    return this.taskServise.getTasks();

  }

  @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskServise.createTask(createTaskDto);
  }

  @Get('/:id')
    getById(@Param('id') id: string): Task {
    return this.taskServise.getById(id);
  }

  @Delete('/:id')
    deleteById(@Param('id') id: string) {
    this.taskServise.deleteById(id);
    return { success: true };
  }

  @Patch('/:id/status')
    updateStatusById(
        @Param('id') id: string,
        @Body('status', TaskStatusValdationPipe) status: TaskStatus): Task {
    return this.taskServise.updateStatusById(id, status);
  }
}
