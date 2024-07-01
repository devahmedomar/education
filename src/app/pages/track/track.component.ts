import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  eduRoutesData : any = {};
  eduTrainers :any = [];
  trainerImg :string='' ;

  constructor(public _DataService:DataService)
  {
    this._DataService.getEduRoutesData().subscribe((info)=>{
      this.eduRoutesData = info.data[0];
      this.eduTrainers = info.data[0].trainers[0];
      console.log(this.eduTrainers)
      this.trainerImg = this.eduRoutesData.image;

      console.log(this.eduRoutesData)  
    })
  }
  handleClick(index: number) {
    console.log('Clicked on array index:', index);
    // Perform additional actions based on the clicked index
  }

}
