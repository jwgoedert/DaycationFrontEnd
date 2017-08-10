import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user: String;

  constructor(
  ) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))[0].name;
  }

}
