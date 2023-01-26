import { Component, ElementRef, OnInit } from '@angular/core';
import { tiktoks } from 'src/data';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})


export class TiktokComponent implements  OnInit {
  id: any;
 
  ngOnInit(): void {
    this.id=setInterval(()=>{
      this.siguientetiktok();
    }, 10000
    );

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngOnDestroy(): void{
    if (this.id) {
      clearInterval(this.id);
    }
  }
  
  tik: number = 1;
  tiktoks: any[] = tiktoks;
  siguientetiktok = () => {
    this.tik = this.tik + 1;
  }
}
