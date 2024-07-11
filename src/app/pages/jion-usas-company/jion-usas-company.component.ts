import { Component } from '@angular/core';
import {AbstractControl, FormControl , FormGroup ,ValidatorFn, Validators} from '@angular/forms'
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-jion-usas-company',
  templateUrl: './jion-usas-company.component.html',
  styleUrls: ['./jion-usas-company.component.css']
})
export class JionUSasCompanyComponent {
  selectedOption :any =[];
  registerForm : FormGroup ;
  constructor( public DataService:DataService) {
    this.registerForm = new FormGroup({
      companyName : new FormControl('', [Validators.required , Validators.minLength(5) , Validators.maxLength(20)]),
      companyEmail : new FormControl('',  [Validators.required , Validators.email]),
      companyLocationSelect : new FormControl('' , Validators.required),
      companyRouteSelect : new FormControl('' , Validators.required),
      companyEmployee : new FormControl('' , [Validators.required,Validators.pattern(/^[0-9]+$/) ]),
    })
     }

     ngOnInit() {
      this.getData();
    }
     getData(){
      return this.DataService.getEduRoutesData().subscribe((info)=>{

        this.selectedOption = info.data ;
        console.log(this.selectedOption)
  
      })
  
     }
    }
