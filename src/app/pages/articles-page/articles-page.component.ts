import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent {
  NewsData:any =[] ;
  constructor(public data:DataService) {
   data.getNewsData().subscribe((value)=>{
    this.NewsData = value.data;
    console.log(this.NewsData);
    

   })

}
}
