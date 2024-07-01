import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  NewsData:any =[] ;
  constructor(public data:DataService) {
   data.getNewsData().subscribe((value)=>{
    this.NewsData = value.data;


   })


  }

}
