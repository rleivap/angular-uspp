import { Component } from '@angular/core';
import { carrucel } from 'src/data';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.css']
})
export class CarrucelComponent {
  id: any;
  tik: number = 1;
  carrucel: any[] = carrucel;
}
