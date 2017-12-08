import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(carList: any, field: string, searchStr: string) {
    if (carList.length === 0 || searchStr.length === 0) {
      return carList;
    }
    return carList.filter((car) => car[field].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
