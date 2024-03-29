import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Poe } from '../types/poe-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoeService  {
  private _poes: Array<Poe> = []

  constructor() { }
    private _httpClient: HttpClient | undefined
}
   