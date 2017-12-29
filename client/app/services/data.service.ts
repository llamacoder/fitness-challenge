import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('data service')
  }

  getAllSummaries() {
    return this.http.get('/summaries')
      .map(res => res.json())
  }

  getDetails(name) {
    let route = '/details/' + name
    console.log("inside getDetails, route is " + route)
    return this.http.get(route)
      .map(res => res.json())
  }

  saveProgress(date, progress, user) {
      return this.http.post('/details', {date: date, progress: progress, user_id: user})
          .map(res => res.json())
  }

  tryLogin(name, pswd) {
      return this.http.post('/login', {name: name, pswd: pswd})
          .map(res => res.json())
  }

}
