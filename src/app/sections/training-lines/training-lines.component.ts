import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-training-lines',
  templateUrl: './training-lines.component.html',
  styleUrls: ['./training-lines.component.css'],
})
export class TrainingLinesComponent  {
  eduRoutes: any = [];

  inView: boolean[] = [];
 
  constructor(
    private elementRef: ElementRef,
    public _DataService: DataService
  ) {
    this._DataService.getEduRoutesData().subscribe((info) => {
      this.eduRoutes = info.data;
      for (let i = 0; i < this.eduRoutes.length; i++) {}
    });
  }


  ngAfterViewInit() {
    this.checkInView();
    window.addEventListener('scroll', () => this.checkInView());
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkInView();
  }

  checkInView() {
    const viewportHeight = window.innerHeight;
    // Type assertion to ensure elements are treated as HTMLElements
    const elements = this.elementRef.nativeElement.querySelectorAll('.animat') as NodeListOf<HTMLElement>;

    this.inView = Array.from(elements).map((element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= viewportHeight - 100;
    });
  }





}
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentTop =
  //     this.elementRef.nativeElement.getBoundingClientRect().top;
  //   const viewportHeight = window.innerHeight;
  //   this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  // }