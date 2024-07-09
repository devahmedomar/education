import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  trainers :any = [] ;
  id:string = '';

  constructor(public _ActivatedRoute:ActivatedRoute, public _DataService:DataService){
    this._DataService.getTrainersData().subscribe((info)=>{
      this.trainers = info.data;
      console.log(this.trainers);

    })
}
}
