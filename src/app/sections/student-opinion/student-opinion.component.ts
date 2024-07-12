
import { DataService } from 'src/app/data.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-student-opinion',
  templateUrl: './student-opinion.component.html',
  styleUrls: ['./student-opinion.component.css'],
  
})
export class StudentOpinionComponent {

  DataOPenion:any=[];
  rates:any = [0,1,2,3,4];
  rate!:number  ;
  finalRateArray:any=[]
  inView: boolean = false;
  isPrevActive = false;
  isNextActive = false;

  prevSlide(): void {
    this.isPrevActive = true;
    this.isNextActive = false;
  }

  nextSlide(): void {
    this.isPrevActive = false;
    this.isNextActive = true;
  }
  activeSlide: number = 0;

  onSlideChange(event: any): void {
    // Bootstrap uses a 'slid.bs.carousel' event when a slide transition completes
    this.activeSlide = event.to; // Update activeSlide with the index of the newly active slide
  }


  constructor(private _DataService:DataService,private elementRef: ElementRef) {
   _DataService.getOpenionData().subscribe((res)=>{
    this.DataOPenion = res.data;
  let finalRate= this.rates.slice(this.rate);
  this.finalRateArray = finalRate;



  for(let i of this.DataOPenion ) {
    let rate1 = i.rate;
    this.rate = rate1;
    console.log(i.rate);

  }
   })
  }
  getRange(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }

  leftAnimationState = 'void';
  rightAnimationState = 'void';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  } 





  private isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
