import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  currentSection: string = 'section1'; // Default section
  currentTab: string = 'section1'; // Default tab

 
  

  navigateToSection(section: string) {
    this.currentSection = section;
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }
}
