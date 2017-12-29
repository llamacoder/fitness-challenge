import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tempName = 'name'
  tempPswd = 'password'

  constructor(private dataService:DataService) { }

  ngOnInit() {
    localStorage.setItem('thisUser', '');
  }

  onLogin(name, pswd) {
    // this.dataService.tryLogin(name, pswd).subscribe(results => {
        let nameStr = '"' + name + '"'
        localStorage.setItem('thisUser', nameStr);
        window.location.assign("/");
        return false
      // })
  }

}
