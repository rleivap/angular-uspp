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
import { LoginComponent } from './comp/login/login.component';
import { DataServices} from './servicios/data.services';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { StockComponent } from './comp/stock/stock.component';
import { ListaStockComponent } from './comp/lista-stock/lista-stock.component';
import { ServicioStockService } from './servicios/servicio-stock.service';
import { StocksService } from './servicios/stocks.service';
import { FooterComponent } from './comp/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TiktokComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarrucelComponent,
    AutorComponent,
    EnlacesInternosComponent,
    LoginComponent,
    StockComponent,
    ListaStockComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RedirectGuardService,DataServices,ServicioStockService,StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
