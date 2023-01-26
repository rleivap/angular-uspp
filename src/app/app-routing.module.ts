import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { TiktokComponent } from './comp/tiktok/tiktok.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'tiktok',component:TiktokComponent},
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
