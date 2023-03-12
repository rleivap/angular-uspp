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
import { RedirectGuardService } from './servicios/redirect-guard.service';
import { EnlacesInternosComponent } from './comp/enlaces-internos/enlaces-internos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material



@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TiktokComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarrucelComponent,
    AutorComponent,
    EnlacesInternosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [RedirectGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
