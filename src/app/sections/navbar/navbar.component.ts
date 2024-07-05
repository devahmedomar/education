import { ViewportScroller } from '@angular/common';
import { Component ,HostListener,ElementRef } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isActive(sectionId: string): boolean {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 64 && rect.bottom >= 64; // Adjust the offset as needed
    }
    return false;
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
