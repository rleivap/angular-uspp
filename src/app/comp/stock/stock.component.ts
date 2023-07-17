import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/modelo/stock';
import { ServicioStockService } from 'src/app/servicios/servicio-stock.service';
import { StocksService } from 'src/app/servicios/stocks.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  constructor(private miServicio: ServicioStockService,private stocksservice:StocksService){
    this.stocks=this.stocksservice.stocks
  }
  ngOnInit(): void {
    this.stocksservice.obtenerStock().subscribe(misStocks=>{
      console.log(misStocks);
      this.stocks=Object.values(misStocks);
      this.stocksservice.setStocks(this.stocks);
    });
  }

  stocks:Stock[]=[];

  agregarStock(){
    let mistock=new Stock(this.cuadroPunto,this.cuadroNombre,this.cuadroApellidopat,this.cuadroApellidomat,this.cuadroFecha,this.cuadroFuas);
    this.miServicio.muestraMensaje(mistock.nombre + " tu registro se agrego con éxito");
    this.stocksservice.agregarStockServicio(mistock);
  }
  
  cuadroPunto:string="1";
  cuadroNombre:string="";
  cuadroApellidopat:string="";
  cuadroApellidomat:string="";
  cuadroFecha:Date=new Date(Date.now());
  cuadroFuas:number=0;
}
