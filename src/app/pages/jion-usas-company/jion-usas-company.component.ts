import { Component } from '@angular/core';
import {AbstractControl, FormControl , FormGroup ,ValidatorFn, Validators} from '@angular/forms'

@Component({
  selector: 'app-jion-usas-company',
  templateUrl: './jion-usas-company.component.html',
  styleUrls: ['./jion-usas-company.component.css']
})
export class JionUSasCompanyComponent {

  registerForm : FormGroup ;
  constructor() {
    this.registerForm = new FormGroup({
      companyName : new FormControl('', [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
      companyEmail : new FormControl('',  [Validators.required , Validators.email]),
      companyLocationSelect : new FormControl('' , Validators.required),
      companyRouteSelect : new FormControl('' , Validators.required),
      companyEmployee : new FormControl('' , [Validators.required,Validators.pattern(/^[0-9]+$/) ]),
    })
  }
}
