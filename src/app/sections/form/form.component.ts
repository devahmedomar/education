import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener } from '@angular/core';
import { error } from 'jquery';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inView: boolean = false;
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  }
  // formData={
  //   email:''
  // }

  // constructor(private http:HttpClient) {
  //   // console.log(this.formData.email);

  // }

  // onSubmit() {
  //   const baseUrl = "url"
  //   this.http.post(baseUrl,this.formData).subscribe((respone)=>{
  //     console.log("send data done");
  //   },(error)=>{
  //     console.log("not send yet");

  //   })
  // }





}
