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
  userName = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    this.userName = JSON.parse(localStorage.getItem('userName'));
    this.dataService.getDetails(this.userName).subscribe((details) => {
      //  set the data bits
      // this.userName = details[0].name
      this.goal = details[0].goal_text
      for (let i = 0; i < details.length; i++) {
        let obj = {}
        let dateObj = new Date(details[i].date)
        let dateStr = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate()
        obj['date'] = dateStr
        obj['progress'] = details[i].progress
        this.progressData.unshift(obj)
        this.total += details[i].progress
      }
    })
  }

  onSave() {
    // console.log('inside save, date is ' + date + ' and progress is ' + progress)

    this.progressData.unshift({date:'1/2/2018', progress:100})
  }

}
