import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AbstractControl, FormControl , FormGroup ,ValidatorFn, Validators} from '@angular/forms'

@Component({
  selector: 'app-jion-usas-company',
  templateUrl: './jion-usas-company.component.html',
  styleUrls: ['./jion-usas-company.component.css']
})
export class JionUSasCompanyComponent {







  registerForm : FormGroup ;
  constructor(private http:HttpClient) {
    this.registerForm = new FormGroup({
      name : new FormControl('', [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]),
      email : new FormControl('',  [Validators.required , Validators.email]),
      location : new FormControl('' , Validators.required),
      route : new FormControl('' , Validators.required),
      emp_no : new FormControl('' , [Validators.required,Validators.pattern(/^[0-9]+$/) ]),
    })
  }
  onSubmit(data:{
    name:string,
    email:string,
    location:string,
    emp_no:number,
    route:string,
    courses:string

  }) {

    console.log(data);


    this.http.post("https://ucti.com.sa/join-us-as-company/",data).subscribe((response)=>{


    })

  }
}

