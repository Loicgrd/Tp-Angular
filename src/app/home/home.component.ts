import { Component } from '@angular/core';
import { Intern } from './types/intern.type';
import { InternService } from './services/intern.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent 
{
  /**
   * @var Array<Intern>
   * Array of Intern to be desplayed
   */
  interns: Array<Intern> = [] //Array<Intern> est la même chose que Intern[] c'est ce qu'il va transmettre a la vue
  constructor(
    private _service: InternService
  ){} //Le constructeur permet d'injecter des dépendances (ici InternService)

  ngOnInit(): void 
  {//compilé juste après le constructeur (la logique est mise ici et pas dans le constructeur)
      this._service.findAll()//Ici on fait le souscripteur (il se soucrit à l'observable)
      .pipe( //le pipe permet de transmettre et de transformer les données
        take(1) //take(1) permet de prendre le premier élément et d'arréter les notifications (desouscription auto)

      )  
      .subscribe((interns: Intern[]) => { //=> est une fonction fléché
        this.interns = interns
      })
    }
}


