import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../tasks.model';
export class TaskFilterDto {
  @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
    status: TaskStatus;

  @IsOptional()
    @IsNotEmpty()
    search: string;
}
