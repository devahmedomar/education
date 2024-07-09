import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  currentSection: string = 'section1'; // Default section
  currentTab: string = 'section1'; // Default tab
  CourseData :any = [];
  id:string = '';
  daysNum :Number | undefined ;
  lat:string='';
  long:string='';
  mapUrl:string='';
  st_day:string='';
  end_day:string='';
  extractedTime:string |undefined;
  dateTimeString:any|undefined;
  timeOfDay: string |undefined;

  constructor(public _ActivatedRoute:ActivatedRoute, public _DataService:DataService)
  {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getCourseDetails(this.id).subscribe((info)=>{

      this.CourseData = info.data;
      
      this. dateTimeString  = this.CourseData.date;

      this.st_day = this.CourseData.st_day;
      this.end_day = this.CourseData.end_day;

      let date1 :Date = new Date(this.st_day);
      let date2 :Date = new Date(this.end_day);

      let daysNumSec :any = date2.getTime()-date1.getTime();

      this.daysNum   = Math.floor(daysNumSec/(1000 * 60 * 60 * 24))   

      this.lat = this.CourseData.lat;
      this.long = this.CourseData.long;
      this.extractTime();
    })
  }

  extractTime() {
    // Step 1: Parse the date-time string into a Date object
    let dateTimeObject = new Date(this.dateTimeString);
    // Step 2: Extract hours, minutes, and seconds
    let hours = dateTimeObject.getHours().toString().padStart(2, '0');
    let minutes = dateTimeObject.getMinutes().toString().padStart(2, '0');
    let seconds = dateTimeObject.getSeconds().toString().padStart(2, '0');

    // Step 3: Construct the time string (HH:mm:ss)
    this.extractedTime = `${hours}:${minutes}:${seconds}`;
    console.log(this.extractedTime);
    const hoursNumber = parseInt(hours)
    console.log(hoursNumber);

    if ( hoursNumber >= 0 && hoursNumber < 12) {
      this.timeOfDay = 'صباحاّ';
    } else {
      this.timeOfDay = 'مساءّ';
    }
  }
 
  

  navigateToSection(section: string) {
    this.currentSection = section;
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }
}
