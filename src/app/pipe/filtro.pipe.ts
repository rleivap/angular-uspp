import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from '../modelo/stock';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(stocks: Stock[], page:number=0): Stock[] {
    return stocks.slice(page,page+5);
  }

}
