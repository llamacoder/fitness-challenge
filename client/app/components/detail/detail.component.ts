import { Component, OnInit } from '@angular/core';
import { Detail } from './detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  name:string = 'Fred';
  goal:string = '';
  progressData:Detail[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit() {
    this.name = 'Cokey';
    this.goal = '3000 body lifts in January';
    this.total = 600;
    this.progressData = [
      {date: 'Jan 6', progress:100},
      {date: 'Jan 5', progress:200},
      {date: 'Jan 3', progress:100},
      {date: 'Jan 2', progress:100},
      {date: 'Jan 1', progress:100}
    ]
  }

  onSave() {
    // console.log('inside save, date is ' + date + ' and progress is ' + progress)

    this.progressData.unshift({date:'1/2/2018', progress:100})
  }

}
