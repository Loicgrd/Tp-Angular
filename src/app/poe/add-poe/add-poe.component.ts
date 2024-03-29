import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoeService } from '../services/poe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Poe } from '../types/poe-types';

@Component({
  selector: 'app-add-poe',
  templateUrl: './add-poe.component.html',
  styleUrl: './add-poe.component.scss'
})
export class AddPoeComponent {
  public poeForm: FormGroup = new FormGroup({}) //FormGRoup permet de manipuler le formulaire dans son ensemble




  constructor(
    private _router: Router,
    private _poeService: PoeService,
    private _formBuilder: FormBuilder

    ){}

ngOnInit(): void { //méthode appliqué a tous les composants et est executer immediatement après le constructeur de la classe (logique de contruction)
  this.poeForm = this._formBuilder.group({ //{} = objet
    poename: [ //tableau qui contient la aleur par défaut et un autre tableau controlant les validateurs
      '', //Default value (champ vide)
      [
        Validators.required, //Ajout de validateurs
        Validators.minLength(3), //Ajout de patterns et est non visible sur le code source ici
      ]
    ],
    poeduration: [
      '',
      [
        Validators.required,
        Validators.min(1)
      ]
    ]
  }) 
}    


onSubmit(): void{ //onSubmit : Lorsque la soumission du formulaire arrivera
  this._poeService.add(this.poeForm.value) //Ajout du service d'ajout de nom dans le tableau
    .subscribe((intern: Poe)=> {
      this._router.navigate(['/home'])
    })
  this._router.navigate(['/home']) //pour revenir vers home quand on ajoute quelqu'un a la liste
  }

}
