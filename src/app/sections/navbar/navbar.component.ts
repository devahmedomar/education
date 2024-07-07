import { ViewportScroller } from '@angular/common';
import { Component ,HostListener,ElementRef,OnInit, AfterViewInit, AfterViewChecked ,ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewChecked {
  isScrolled: boolean = false;
  isExpanded: boolean | undefined;
  constructor() {}
 


  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isActive(sectionId: string): boolean {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <=63 && rect.bottom >= 100; // Adjust the offset as needed
    }
    return false;
  }
  



  ngOnInit(): void {
    // Simulating async data fetching
    setTimeout(() => {
      this.isExpanded = true; // Updating property asynchronously
    }, 1000);
  }

  ngAfterViewChecked(): void {
    // Check if the value has changed and then update
    if (this.isExpanded !== true) {
      this.isExpanded = true;
    }
  }
  



  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect if user has scrolled down 100px from the top
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
