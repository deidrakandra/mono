import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  readonly nullIndicator: string = '--';

  transform(array: any[]): string | number {
    return array ? array.length : this.nullIndicator;
  }

}
