import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent {
  data:any;
constructor(private dataSer:DataService){}
  getClients(){
    this.dataSer.getClients().subscribe({
      next:(res)=>{
        this.data = (res.data);

      }
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getClients();
  }

}
