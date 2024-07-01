import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {
  currentSection: string = 'section1'; // Default section
  currentTab: string = 'section1'; // Default tab
  trainersData :any = [];
  trainerCv :string='' ;
  trainerImg :string='' ;

  constructor (public _DataService:DataService){
    this._DataService.getTrainersData().subscribe((info)=>{
      this.trainersData = info.data[0];
      this.trainerCv = this.trainersData.cv;
      this.trainerImg = this.trainersData.image;
      console.log(this.trainersData);
    })

   
  };


  navigateToSection(section: string) {
    this.currentSection = section;
    console.log('setting active tab',this.currentSection)
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }



}


