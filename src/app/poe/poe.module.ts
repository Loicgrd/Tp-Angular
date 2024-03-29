import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './poe/home/home.component';
import { PoeHomeComponent } from './poe-home/poe-home.component';
import { AddPoeComponent } from './add-poe/add-poe.component';



@NgModule({
  declarations: [
    HomeComponent,
    PoeHomeComponent,
    AddPoeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoeModule { }
