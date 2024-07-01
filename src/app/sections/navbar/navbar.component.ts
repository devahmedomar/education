import { Component ,HostListener, } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled: boolean = false;
  
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
