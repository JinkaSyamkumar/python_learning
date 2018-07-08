import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class RasastackService {
  private baseURL: string = "http://localhost:5008/conversations/default/respond";

  constructor(private http: Http){}
  public getResponse(query: string){
    
    let data = {
      query : query

    }
    console.log("url - "+this.baseURL+"- data is -"+ JSON.stringify(data))
    return this.http
      .post(`${this.baseURL}`, data)
      .pipe(map(res => {
        return res.json()
      }))
  }
  // public getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Authorization', `Bearer ${this.token}`);
  //   return headers;
  // }
}