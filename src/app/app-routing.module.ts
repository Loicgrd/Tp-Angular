import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { PoeHomeComponent } from './poe/poe-home/poe-home.component';
import { PoeModule } from './poe/poe.module';

const routes: Routes = [
  {
    path: '',  //permet d'avoir une redirection vers home si une page n'existe pas (préférable de rediriger vers sa propre page 404)
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'intern-add', //Route pour le formulaire
    component: InternFormComponent ,
    pathMatch : 'full'
  },
  /*
  {
    path: '**', //permet d'avoir une redirection si l'url est modifié et faux
    redirectTo: 'home',
    pathMatch: 'full'
  },**/
  //Ajout des routes pour le formulaire des poe
  {
    path: 'poe-home',
    component: PoeHomeComponent,
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
