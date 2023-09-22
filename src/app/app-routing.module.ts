import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TiktokComponent } from './comp/tiktok/tiktok.component';
import { RedirectGuardService } from './servicios/redirect-guard.service';
import { LoginComponent } from './comp/login/login.component';
import { StockComponent } from './comp/stock/stock.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'tiktok',component:TiktokComponent},
  {path:'redirect-tablerosis', canActivate: [RedirectGuardService],component:RedirectGuardService,data: {
    externalUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjA3NDNjODUtNmY4Ni00OWIyLTlmMTYtNjllNTdkNGFhYTk0IiwidCI6IjQwNzBmZTg5LTVhMGMtNGMyYy04MDFkLWI0NjhhODI4ZmQ2MCJ9'
    }
  },
  {path:'redirect-tablerohis', canActivate: [RedirectGuardService],component:RedirectGuardService,data: {
    externalUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDc2NjhkYTgtM2E5Yi00YjU2LTg3NmItMjRmYzQ1NTdlOTkzIiwidCI6IjQwNzBmZTg5LTVhMGMtNGMyYy04MDFkLWI0NjhhODI4ZmQ2MCJ9'
    }
  },
  {path:'redirect-llenadoFuas', canActivate: [RedirectGuardService],component:RedirectGuardService,data: {
    externalUrl: 'https://bit.ly/llenadoFuasRl'
    }
  },
  {path:'login',component:LoginComponent},
  {path: 'stock',component:StockComponent},
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
