import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoeService } from '../services/poe.service';

@Component({
  selector: 'app-add-poe',
  templateUrl: './add-poe.component.html',
  styleUrl: './add-poe.component.scss'
})
export class AddPoeComponent {


  constructor(
    private _router: Router
  ){}
}
