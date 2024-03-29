import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PoeModule } from './poe/poe.module';
import { PoeHomeComponent } from './poe/poe-home/poe-home.component';

@NgModule({
  declarations: [
    AppComponent,
    //PoeHomeComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    PoeModule, //Ajout du module POE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
