import { Component, OnInit } from '@angular/core';
import { faFilm,faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-enlaces-internos',
  templateUrl: './enlaces-internos.component.html',
  styleUrls: ['./enlaces-internos.component.css']
})
export class EnlacesInternosComponent implements OnInit {
  filmIcon = faFilm;
  faFile = faFile;
  constructor() { }
  ngOnInit() {
  }
}
