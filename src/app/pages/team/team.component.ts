import { Component } from '@angular/core';
import { serviceLog } from './team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],



})
export class TeamComponent {

  constructor(private logservice:serviceLog) {

  }
  mylog() {
   this.logservice.log()
  }

}



