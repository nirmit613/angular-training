import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'percentage',
})
export class percentagePipe implements PipeTransform {
  transform(val: number, totalMarks: number, decimal: number) {
    return ((val / totalMarks) * 100).toFixed(decimal);
  }
}
