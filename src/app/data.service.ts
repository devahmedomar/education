import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http"
import { get } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public _HttpClient:HttpClient) {
    
   }
   
   getTrainersData():Observable<any>
   {
    return this._HttpClient.get("http://51.20.43.250:8000/trainers/")
   }
   getEduRoutesData():Observable<any>
   {
    return this._HttpClient.get("http://51.20.43.250:8000/eduroutes/")
    }
  getNewsData():Observable<any> 
  {
    return this._HttpClient.get("http://51.20.43.250:8000/news/")
  }

  getTrainerDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`http://51.20.43.250:8000/trainers/${id}/`)
  }

}
