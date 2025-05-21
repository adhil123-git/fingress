import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'custompipe'
})

export class CustompipePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const fullvalue = value.slice(-4);
    const hidevalue = value.slice(0, value.length-4).replace(/./g, 'X');
    return hidevalue +fullvalue;
  }
}

