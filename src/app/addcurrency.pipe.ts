import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addcurrency',
})
export class AddcurrencyPipe implements PipeTransform {
  transform(value: number, num: number): string {
    if (num == 1) return '$' + value.toString();
    else return '&' + value.toString();
  }
}
