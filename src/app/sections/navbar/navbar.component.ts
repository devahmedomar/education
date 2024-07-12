import { ViewportScroller } from '@angular/common';
import { Component ,HostListener,OnInit, AfterViewChecked  } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewChecked {
  isScrolled: boolean = false;
  isExpanded: boolean | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToSection(fragment);
        }
      }
    });
  }

  scrollToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  isActive(sectionId: string): boolean {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 63 && rect.bottom >= 100; // Adjust the offset as needed
    }
    return false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isExpanded = true;
    }, 1000);
  }

  ngAfterViewChecked(): void {
    if (this.isExpanded !== true) {
      this.isExpanded = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }
}