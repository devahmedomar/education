import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
DataService

@Component({
  selector: 'app-articles-page-preview',
  templateUrl: './articles-page-preview.component.html',
  styleUrls: ['./articles-page-preview.component.css']
})
export class ArticlesPagePreviewComponent implements OnInit {

  id :string = "";
  articles :any = {};
  moreArticles:any ={}
  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService) {

  }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id']
    this._DataService.getNewsDetials(this.id).subscribe((response)=> {
      this.articles = response.data;
      console.log(this.articles);

      this.moreArticles = response["More Articles"]
      console.log(this.moreArticles );

    })
  }


}
