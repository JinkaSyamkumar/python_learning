import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class RasastackService {
  private baseURL = 'http://localhost:5013/conversations/jinksy02/respond';
  private baseURL2 = 'http://localhost:3000/items';
  constructor(private http: Http) {}


  public getResponse(query: string) {
    const data = {
      query: query
    };
    console.log('url - ' + this.baseURL + '- data is -' + JSON.stringify(data));
    return this.http
      .post(`${this.baseURL}`, data)
      .pipe(map(res => {
        console.log('res', res);
        console.log('res[ json', res.json());
        return res.json();
      }));
  }
  public getResponse3(query: string) {
    const data = {
      query: query
    };
    console.log('url - ' + this.baseURL + '- data is -' + JSON.stringify(data));
    return this.http
      .post(`${this.baseURL}`, data)
      .pipe(map(res => {
        console.log('res', res);
        console.log('res[ json', res.json());
        return res.json();
      }));
  }
  public getResponse2(query: string) {

    const search = new URLSearchParams();
    search.set('message', 'whats the weather');
    search.set('payload', '2');
    search.set('display_name', 'syam');
    search.set('uuid', '123456789');

    console.log('url - ' + this.baseURL + '- data is -' + JSON.stringify(search));
    return this.http
      .get(`${this.baseURL}`, {search: search})
      .pipe(map(res => {
        console.log(res.json());
        return res.json();
      }));

  }

}
