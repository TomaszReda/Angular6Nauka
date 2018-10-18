import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../model/task';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): any {
    return value.sort(((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
      else {
        return 1;
      }
    }));
  }

}
