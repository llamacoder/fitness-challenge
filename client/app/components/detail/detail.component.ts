import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Detail } from './detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  goal:string = '';
  progressData = [];
  total:number = 0;
  userName:string = '';
  userID:number;
  tempDate = '';
  tempProgress = 100;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let dateObj = new Date();
    this.tempDate = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate()
    this.userName = JSON.parse(localStorage.getItem('userName'));

    this.dataService.getDetails(this.userName).subscribe((details) => {
      //  set the data bits
      this.goal = details[0].goal_text
      this.userID = details[0].user_id
      for (let i = 0; i < details.length; i++) {
        let obj = {}
        dateObj = new Date(details[i].date)
        let dateStr = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate()
        obj['date'] = dateStr
        obj['progress'] = details[i].progress
        this.progressData.unshift(obj)
        this.total += details[i].progress
      }
    })
  }

  onSave(progdate, prognum) {
    let newDate = new Date(progdate)
    newDate.setFullYear(new Date().getFullYear())
    this.dataService.saveProgress(newDate, prognum, this.userID).subscribe(results => {
    })
  }

  onHome() {
    window.location.assign('/');
    return false
  }

}
