import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnauthroizeComponent } from './unauthroize/unauthroize.component';
// import { LoginComponent } from './registration-module/login/login.component';
// import { RegisterComponent } from './registration-module/register/register.component';
// import { ForgotPasswordComponent } from './registration-module/forgot-password/forgot-password.component';
// import { ChangePasswordComponent } from './registration-module/change-password/change-password.component';

@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      UnauthroizeComponent,
      // LoginComponent,
      // RegisterComponent,
      // ForgotPasswordComponent,
      // ChangePasswordComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
