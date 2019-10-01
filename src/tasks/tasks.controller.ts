import { TaskFilterDto } from './dto/taskFilter';
import { CreateTaskDto } from './dto/createTasks';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Delete, Param, Patch, Query } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private taskServise: TasksService) { }

    @Get()
    getAllTasks(@Query() filterDto: TaskFilterDto): Task[] {
        console.log('filterDto', filterDto)
        return this.taskServise.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.taskServise.createTask(createTaskDto)
    }

    @Get('/:id')
    getById(@Param('id') id: string): Task {
        return this.taskServise.getById(id)
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string) {
        this.taskServise.deleteById(id);
        return { success: true }
    }

    @Patch('/:id/status')
    updateStatusById(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
        return this.taskServise.updateStatusById(id, status)
    }
}
