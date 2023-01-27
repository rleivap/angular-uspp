import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './comp/navegador/navegador.component';
import { TiktokComponent } from './comp/tiktok/tiktok.component';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { CarrucelComponent } from './comp/carrucel/carrucel.component';
import { AutorComponent } from './comp/autor/autor.component';
import { TableroSisComponent } from './comp/tablero-sis/tablero-sis.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TiktokComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarrucelComponent,
    AutorComponent,
    TableroSisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
