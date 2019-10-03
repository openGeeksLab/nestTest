import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class  EmailExistPipe implements PipeTransform<any>{
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log('value', value);
    // here perform transform operations
    return value;
  }
}
