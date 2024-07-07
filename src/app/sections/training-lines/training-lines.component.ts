import { Component, HostListener } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-training-lines',
  templateUrl: './training-lines.component.html',
  styleUrls: ['./training-lines.component.css']
})
export class TrainingLinesComponent {


  eduRoutes :any =[];
  constructor(public _DataService:DataService )
  {
    this._DataService.getEduRoutesData().subscribe((info)=>{
      this.eduRoutes = info.data;

    })


  }

}
