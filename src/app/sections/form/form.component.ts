import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'jquery';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // formData={
  //   email:''
  // }

  constructor(private http:HttpClient) {
    // console.log(this.formData.email);

  }

  // onSubmit() {
  //   const baseUrl = "url"
  //   this.http.post(baseUrl,this.formData).subscribe((respone)=>{
  //     console.log("send data done");
  //   },(error)=>{
  //     console.log("not send yet");

  //   })
  // }





}
