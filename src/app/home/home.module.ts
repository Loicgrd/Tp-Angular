import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InternFormComponent } from './intern-form/intern-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    InternFormComponent
  ],
  imports: [
    CommonModule, //module permettant d'utiliser les conditions ( NgIf, NgForOf, DecimalPipe)
    RouterModule, //router pour le liens du formulaire obliger pour router le module du liens
    ReactiveFormsModule, //Module sur la gestion des formulaires
    HttpClientModule  // Module pour transmettre des requetes (injecteur de dépendances)
  ]
})

export class HomeModule { }





