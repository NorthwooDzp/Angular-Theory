import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, powNum?: number, str?: string): any {
    if (!powNum) {
      return value;
    } else {
      return '' + value + '^' + powNum + str + Math.pow(value, powNum);
    };
  }

}
