import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  inView: boolean = false;
  constructor(private elementRef: ElementRef) {}

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentTop = this.elementRef.nativeElement.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      this.inView = componentTop <= viewportHeight - 100; // Adjust threshold as needed
    }
}
