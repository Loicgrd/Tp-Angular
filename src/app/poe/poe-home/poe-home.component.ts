import { Component } from '@angular/core';
import { PoeService } from '../services/poe.service';
import { Poe } from '../types/poe-types';
import { Router } from '@angular/router';

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

    ){}

}
   