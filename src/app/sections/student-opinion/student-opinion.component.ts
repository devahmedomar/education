
import { DataService } from 'src/app/data.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-student-opinion',
  templateUrl: './student-opinion.component.html',
  styleUrls: ['./student-opinion.component.css'],
  // animations: [
  //   trigger('slideInFromLeft', [
  //     state('void', style({ transform: 'translateX(-100%)' })),
  //     state('*', style({ transform: 'translateX(0)' })),
  //     transition('void => *', animate('8s ease-out')),
  //     transition('* => void', animate('8s ease-out'))
  //   ]),
  //   trigger('slideInFromRight', [
  //     state('void', style({ transform: 'translateX(100%)' })),
  //     state('*', style({ transform: 'translateX(0)' })),
  //     transition('void => *', animate('4s ease-out')),
  //     transition('* => void', animate('4s ease-out'))
  //   ])
  // ]
  animations: [
    trigger('slideInFromLeft', [
      state('void', style({ transform: 'translateX(100%)',})),
      state('*', style({ transform: 'translateX(0)', })),
      transition('void => *', animate('3s ease-out')),
      transition('* => void', animate('3s ease-out'))
    ]),
    trigger('slideInFromRight', [
      state('void', style({ transform: 'translateX(-100%)', })),
      state('*', style({ transform: 'translateX(0)',})),
      transition('void => *', animate('2s ease-out')),
      transition('* => void', animate('2s ease-in'))
    ])
  ]
})
export class StudentOpinionComponent {

  DataOPenion:any=[];
  rates:any = [0,1,2,3,4];
  rate!:number  ;
  finalRateArray:any=[]


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


  @ViewChild('leftColumn', { static: true }) leftColumnElement!: ElementRef;
  @ViewChild('rightColumn', { static: true }) rightColumnElement!: ElementRef;



  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.leftColumnElement && this.isElementInViewport(this.leftColumnElement.nativeElement)) {
      this.leftAnimationState = 'in';
    } else {
      this.leftAnimationState = 'void';
    }

    if (this.rightColumnElement && this.isElementInViewport(this.rightColumnElement.nativeElement)) {
      this.rightAnimationState = 'in';
    } else {
      this.rightAnimationState = 'void';
    }
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
