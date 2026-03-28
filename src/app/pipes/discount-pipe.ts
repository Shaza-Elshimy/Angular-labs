import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price:number,percent:number=10): number{
    return price-(price*percent/100);
  }
}
