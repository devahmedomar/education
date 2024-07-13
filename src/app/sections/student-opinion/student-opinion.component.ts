
import { DataService } from 'src/app/data.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-student-opinion',
  templateUrl: './student-opinion.component.html',
  styleUrls: ['./student-opinion.component.css'],
  animations: [
    trigger('slideIn', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ]),
    trigger('slideInRight', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
  
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


  ngOnInit() {
    this.checkScroll(); // Initial check
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-from-right, .animate-from-left');
    const viewportHeight = window.innerHeight;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight - 100 && rect.bottom >= 0) {
        el.classList.add('appear');
      } else {
        el.classList.remove('appear');
      }
    });
  }




 
}
