import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  NewsData: any = [];
  //  Hours!:number;
  //  newsDataIndex!:number;
  constructor(public data: DataService) {
    data.getNewsData().subscribe((value) => {
      this.NewsData = value.data;
    //   console.log(value);

    //  this.newsDataIndex = this.NewsData.length;

    //   // console.log(this.newsDataIndex);

    //   let date = new Date(this.NewsData[2].date);
    //   this.Hours = date.getHours();
    //   // console.log(this.Hours);






    });




  }
}
