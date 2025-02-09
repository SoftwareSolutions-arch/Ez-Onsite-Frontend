import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthroizeComponent } from './unauthroize/unauthroize.component';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./registration-module/register-module.module').then(m => m.RegisterModule) },
  {path: 'home', loadChildren: () => import('./home-module/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  {path: '**', component: UnauthroizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
