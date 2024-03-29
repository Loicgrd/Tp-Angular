import { Component } from '@angular/core';
import { PoeService } from '../services/poe.service';
import { Poe } from '../types/poe-types';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'poe-home',
  templateUrl: './poe-home.component.html',
  styleUrl: './poe-home.component.scss'
})
export class PoeHomeComponent {

  poes: Array<Poe> = []


  constructor(
      private _router: Router,
      private _poeservice: PoeService,
      //private _service: PoeService

    ){}

    ngOnInit(): void 
    {//compilé juste après le constructeur (la logique est mise ici et pas dans le constructeur)
        this._poeservice.findAll()//Ici on fait le souscripteur (il se soucrit à l'observable)
        .pipe( //le pipe permet de transmettre et de transformer les données
          take(1) //take(1) permet de prendre le premier élément et d'arréter les notifications (desouscription auto)
  
        )  
        .subscribe((poes: Poe[]) => { //=> est une fonction fléché
          this.poes = poes
        })
      }


}
   