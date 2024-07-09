import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-opinion',
  templateUrl: './student-opinion.component.html',
  styleUrls: ['./student-opinion.component.css']
})
export class StudentOpinionComponent {
  DataOPenion:any=[];
  rates:any = [0,1,2,3,4];
  rate!:number  ;
  finalRateArray:any=[]


  constructor(private _DataService:DataService) {
   _DataService.getOpenionData().subscribe((res)=>{
    this.DataOPenion = res.data;
  let finalRate= this.rates.slice(this.rate);
  this.finalRateArray = finalRate;



  for(let i of this.DataOPenion ) {
    let rate1 = i.rate;
    this.rate = rate1;
    console.log(i.rate);

  }
   })
  }
  getRange(num: number): number[] {
    return Array(num).fill(0).map((x, i) => i);
  }

}
