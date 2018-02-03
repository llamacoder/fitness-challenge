import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Summary } from './summary'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  daysToGo:number = 7;
  userSummaries:Summary[] = [];
  thisUser:string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    //  see if user is logged in...
    console.log("getting thisUser")
    this.thisUser = JSON.parse(localStorage.getItem('thisUser'));
    console.log("thisUser " + this.thisUser)
    if (!this.thisUser) {
      alert('user is not logged in')
      window.location.assign('/login')
      return false
    }
    this.daysToGo = this.calcDaysToGo();
    this.dataService.getAllSummaries().subscribe((summaries) => {
      this.userSummaries = summaries
    })
  }

  onClick(target) {
    localStorage.setItem('userName',
          JSON.stringify(target.parentNode.firstElementChild.innerHTML));

    window.location.assign("/detail");
  }

  calcDaysToGo() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();   //  today
    var secondDate = new Date(2018,1,28);  //  endOfChallenge

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays
  }

}
