import { CreateTaskDto } from './dto/createTasks';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model'
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getById(id: string): Task {
        return this.tasks.find(item => item.id === id)
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task)

        return task;
    }

    deleteById(id: string) {
        this.tasks = this.tasks.filter(item => item.id !== id)
    }

    updateStatusById(id: string, status: TaskStatus): Task {
        const task = this.getById(id);
        task.status = status;
        return task;

    }
}
