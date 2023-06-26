import { Injectable } from '@angular/core';
import { Stock } from '../modelo/stock';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private dataService:DataServices) { }


  setStocks(misStocks:Stock[]){
    this.stocks=misStocks;
  }

  obtenerStock(){
    return this.dataService.cargarStock();
  }

  stocks:Stock[]=[];
  
  agregarStockServicio(stock:Stock){
    this.stocks.push(stock);
    this.dataService.guardarStock(this.stocks);
  }

}
