import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


//Intermediaire entre front et back

@Injectable({
  providedIn: 'root'
})
export class InternService implements IService<Intern> { //on spécialise le type
  private _interns: Array<Intern> = [ //private permet d'encapsuler pour protéger l'attribut interns de toutes aggression externe
    {
      lastname: 'Gormand',
      firstname: 'Loic'
    },
    {
      lastname: "olastname",
      firstname: "ofirstname"
    },
  ]
  constructor(
    private _httpClient: HttpClient //
  ) { }

  findAll(): Observable<Intern[]> { //L'observable va capter quand changement de valeur et envoyer à un souscripteur (ici il observe le tableau d'intern) l'observable est un objet
    return this._httpClient.get<Intern[]>(
      'http://localhost:3000/interns'
    )
    .pipe(
      map((interns: Intern[]) => {//map va prendre la donné en vrac et va retourner la donnée trié
        return interns.sort((i1: Intern, i2: Intern) =>{ //sort va faire un tri en comparé le premier element au seconf, if 1>2
          return i1.lastname.localeCompare(i2.lastname) //localeCompare
        })
      })
    )
  }
  add(item: Intern): Observable<Intern> {
    //this._interns.push(item) //permet d'ajouter le nom au tableau d'interns
    return this._httpClient.post<Intern>( //permet de renvoyer l'observable sur la base de donnée (post permet d'envoyer un http)
      'http://localhost:3000/interns',
      item
    )
  }

  get interns(): Array<Intern> { //renvoir l'array intern (c'est une méthode de classe)
    return this._interns //this fait référence à l'instance de la classe
  }
}


