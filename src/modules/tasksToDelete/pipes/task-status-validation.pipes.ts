import { PipeTransform, BadRequestException,  } from "@nestjs/common";
import { TaskStatus } from "../tasks.model";

export class TaskStatusValdationPipe implements PipeTransform{
    readonly allowedStatuses = [
        TaskStatus.DONE,
        TaskStatus.IN_PROGRESS,
        TaskStatus.OPEN
    ]

    transform(value:any ){
        value = value.toUpperCase();

        if(!this.isValidStatus(value)){
            throw new BadRequestException();
        }
        return value;
    }

    isValidStatus(status: any): boolean{
        return this.allowedStatuses.includes(status);
    }
}