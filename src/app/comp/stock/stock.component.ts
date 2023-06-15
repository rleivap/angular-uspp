import { Component } from '@angular/core';
import { Stock } from 'src/app/modelo/stock';
import { ServicioStockService } from 'src/app/servicios/servicio-stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  constructor(private miServicio: ServicioStockService){

  }
  

  stocks:Stock[]=[
  ];

  agregarStock(){
    let mistock=new Stock(this.cuadroPunto,this.cuadroNombre,this.cuadroApellidopat,this.cuadroApellidomat,this.cuadroFecha,this.cuadroFuas);
    this.miServicio.muestraMensaje(mistock.nombre + " tu registro se agrego con éxito");
    this.stocks.push(mistock);
  }
  
  cuadroPunto:string="";
  cuadroNombre:string="";
  cuadroApellidopat:string="";
  cuadroApellidomat:string="";
  cuadroFecha:Date=new Date(Date.now());
  cuadroFuas:number=0;

  
}
