import { PipeTransform, BadRequestException  } from '@nestjs/common';

export class EmailExisPipe implements PipeTransform{
  transform(value:any) {

    return value;
  }
}
