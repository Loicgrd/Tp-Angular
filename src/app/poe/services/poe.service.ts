import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Poe } from '../types/poe-types';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoeService implements IService<Poe> {
  private _poes: Array<Poe> = [
    {
    poename : 'cybersecurite',
    poeduration: 400
    }

  ]

  add(item: Poe): Observable<Poe> {
    //this._interns.push(item) //permet d'ajouter le nom au tableau d'interns
    return this._httpClient.post<Poe>( //permet de renvoyer l'observable sur la base de donnée (post permet d'envoyer un http)
      'http://localhost:3000/poes',
      item
    )
  }
  constructor(
    private _httpClient: HttpClient 
  ) { }
  findAll(): Observable<Poe[]> { //L'observable va capter quand changement de valeur et envoyer à un souscripteur (ici il observe le tableau d'intern) l'observable est un objet
    return this._httpClient.get<Poe[]>(
      'http://localhost:3000/poes'
    )
    .pipe(
      map((interns: Poe[]) => {//map va prendre la donné en vrac et va retourner la donnée trié
        return interns.sort((i1: Poe, i2: Poe) =>{ //sort va faire un tri en comparé le premier element au seconf, if 1>2
          return i1.poename.localeCompare(i2.poename) //localeCompare
        })
      })
    )
  }


  get poes(): Array<Poe> { //renvoir l'array intern (c'est une méthode de classe)
    return this._poes //this fait référence à l'instance de la classe
  }





  }
