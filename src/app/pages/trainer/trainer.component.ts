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
  id:string = '';

  constructor (public _ActivatedRoute:ActivatedRoute, public _DataService:DataService){
    this.id=this._ActivatedRoute.snapshot.params['id'];
    console.log(this.id);

    this._DataService.getTrainerDetails(this.id).subscribe((info)=>{
      this.trainersData = info.data; 
      console.log(this.trainersData)
    })

   
  };


  navigateToSection(section: string) {
    this.currentSection = section;
  }
  setCurrentTab(section: string) {
    this.currentTab = section;
  }



}


