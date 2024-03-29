import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Poe } from '../types/poe-types';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoeService  {
  private _poes: Array<Poe> = [
    {
    poename : 'cybersecurite',
    poeduration: 400
    }

  ]

  add(item: Poe): Observable<Poe> {
    this._poes.push(item) //permet d'ajouter le nom au tableau d'interns
    return of(item)
    
  }


  constructor() { }
    private _httpClient: HttpClient | undefined
}
   