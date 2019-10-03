import { TaskFilterDto } from './dto/taskFilter';
import { CreateTaskDto } from './dto/createTasks';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksByFilter(taskFilter: TaskFilterDto): Task[] {
    const { status, search } = taskFilter;
    const tasks = this.getTasks();
    return tasks;
  }

  getById(id: string): Task {
    const dataExist = this.tasks.find(item => item.id === id);

    if (!dataExist) {
      throw new NotFoundException();
    }

    return dataExist;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      title,
      description,
      id: uuid(),
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteById(id: string) {
    this.getById(id);
    this.tasks = this.tasks.filter(item => item.id !== id);
  }

  updateStatusById(id: string, status: TaskStatus): Task {
    const task = this.getById(id);
    task.status = status;
    return task;

  }
}
