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

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.daysToGo = this.calcDaysToGo();
    this.userSummaries = this.dataService.getAllSummaries()
  }

  calcDaysToGo() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();   //  today
    var secondDate = new Date(2018,0,31);  //  endOfChallenge

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays
  }

}
