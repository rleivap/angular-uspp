import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/modelo/stock';

@Component({
  selector: 'app-lista-stock',
  templateUrl: './lista-stock.component.html',
  styleUrls: ['./lista-stock.component.css']
})
export class ListaStockComponent implements OnInit{

  @Input() stockLista:Stock;

  constructor(){
  }

  ngOnInit(): void {
  }

}
