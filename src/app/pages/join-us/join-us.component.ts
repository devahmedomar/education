import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  AfterViewInit, ElementRef } from '@angular/core';
import  intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent  {

  formData = {
    name:'',
    email:'',
    phoneNumber:'',
    option:''

  }
  constructor(private elementRef: ElementRef,private http:HttpClient) {}

  ngAfterViewInit() {
    const inputElement = this.elementRef.nativeElement.querySelector('#phone');
    const iti = intlTelInput(inputElement, {
      initialCountry: 'auto',
      separateDialCode: true,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
    });

    // Handle change event to update input value with selected country dial code
    inputElement.addEventListener('countrychange', () => {
      const selectedCountry = iti.getSelectedCountryData();
      const dialCode = selectedCountry.dialCode;
      const number = iti.getNumber();
      const formattedNumber = `+${dialCode} ${number}`;
      inputElement.value = formattedNumber;
    });
  }

  onSubmit(data:{
    name:string,
    email:string,
    phone:string,
    option:string
  }) {
    console.log(data);


    this.http.post("https://ucti.com.sa/join-us-as-individual/",data).subscribe((response)=>{
      console.log("done");

    })

  }
}
