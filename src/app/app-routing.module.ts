import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnauthroizeComponent } from './unauthroize/unauthroize.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./registration-module/register-module.module').then(m => m.RegisterModule) },
  {path: 'home', component: HomeComponent},
  {path: '**', component: UnauthroizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
