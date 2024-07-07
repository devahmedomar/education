import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jion-usas-company',
  templateUrl: './jion-usas-company.component.html',
  styleUrls: ['./jion-usas-company.component.css']
})
export class JionUSasCompanyComponent {

  formData = {
    cName:'',
    cEmial:'',
    loption:'',
    eNumber:'',
    courseName:'',





  }
  constructor(private http:HttpClient) {}

  onSubmit() {

    // const baseUrl ="https://ucti.com.sa/join-us-as-company/"
  this.http.post("https://ucti.com.sa/join-us-as-company/",this.formData)
}
}
