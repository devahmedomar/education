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
  //  get():Observable<any> {
  //   return this._HttpClient.get()

  //  }

   getTrainersData():Observable<any>
   {
    return this._HttpClient.get("https://ucti.com.sa/trainers/")
   }
   getEduRoutesData():Observable<any>
   {
    return this._HttpClient.get("https://ucti.com.sa/eduroutes/")
    }
    getEduRoutesDetails(id:string):Observable<any>
    {
     return this._HttpClient.get(`https://ucti.com.sa/eduroutes//${id}`)
    }
  getNewsData():Observable<any>
  {
    return this._HttpClient.get("https://ucti.com.sa/news/")
  }
  getNewsDetials(id:string):Observable<any> {
    return this._HttpClient.get(`https://ucti.com.sa/news/${id}/`)
  }

  getTrainerDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://ucti.com.sa/trainers//${id}/`)
  }

}
