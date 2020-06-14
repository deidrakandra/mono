import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  readonly ellipses = "...";

  transform(str: string, length?: number): string {
    let piped = str;
    const finalLength = length || 50;

    if (str.length > finalLength) {
      const stringLength = finalLength - this.ellipses.length;
      const short = str.substring(0, stringLength);
      piped = `${short}${this.ellipses}`;
    }
    return piped;
  }

}
