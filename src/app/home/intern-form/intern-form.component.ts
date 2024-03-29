import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';
import { Intern } from '../types/intern.type';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss'
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({}) //FormGRoup permet de manipuler le formulaire dans son ensemble

  constructor(
    private _formBuilder: FormBuilder, //builder
    private _internService : InternService,
    private _router: Router

  ) {}

ngOnInit(): void { //méthode appliqué a tous les composants et est executer immediatement après le constructeur de la classe (logique de contruction)
  this.internForm = this._formBuilder.group({ //{} = objet
    lastname: [ //tableau qui contient la aleur par défaut et un autre tableau controlant les validateurs
      '', //Default value (champ vide)
      [
        Validators.required, //Ajout de validateurs
        Validators.minLength(3), //Ajout de patterns et est non visible sur le code source ici
      ]
    ],
    firstname: [
      '',
      [
        Validators.required
      ]
    ]
  }) 
}

onSubmit(): void{ //onSubmit : Lorsque la soumission du formulaire arrivera
  this._internService.add(this.internForm.value) //Ajout du service d'ajout de nom dans le tableau
    .subscribe((intern: Intern)=> {
      this._router.navigate(['/home'])
    })
  this._router.navigate(['/home']) //pour revenir vers home quand on ajoute quelqu'un a la liste
  }
}


