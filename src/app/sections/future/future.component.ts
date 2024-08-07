import { Component, ElementRef, HostListener } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent {
  inView: boolean = false;
  constructor(private elementRef: ElementRef,private dataSer:DataService) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
  }
  data:any;
  getGoals(){
    this.dataSer.getGoals().subscribe({
      next:(res)=>{
        this.data = (res.data);

      }
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getGoals();
  }
}
