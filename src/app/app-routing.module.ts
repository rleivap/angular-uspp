import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TiktokComponent } from './comp/tiktok/tiktok.component';
import { RedirectGuardService } from './servicios/redirect-guard.service';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'tiktok',component:TiktokComponent},
  {path:'redirect-tablerosis', canActivate: [RedirectGuardService],component:RedirectGuardService,data: {
    externalUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjA3NDNjODUtNmY4Ni00OWIyLTlmMTYtNjllNTdkNGFhYTk0IiwidCI6IjQwNzBmZTg5LTVhMGMtNGMyYy04MDFkLWI0NjhhODI4ZmQ2MCJ9'
    }
  },
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
