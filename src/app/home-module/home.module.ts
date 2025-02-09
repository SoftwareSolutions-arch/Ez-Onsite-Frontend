import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutes } from './home.routing';
import { HomeService } from './home.service';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
