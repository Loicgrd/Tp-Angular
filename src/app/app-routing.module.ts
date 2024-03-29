import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';

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
  {
    path: '**', //permet d'avoir une redirection si l'url est modifié et faux
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
