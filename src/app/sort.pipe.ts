import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, field: string): Array<any> {
    return value.sort((srv1: any, srv2: any) => {
      return srv1[field] > srv2[field] ? 1 : -1;
    });
  }

}
