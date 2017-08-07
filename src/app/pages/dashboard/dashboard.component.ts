import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../shared/services/signup.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user: String;
  

  constructor(
    public signupService: SignupService,
  ) {
    this.signupService = signupService;
   }

  ngOnInit() {
    this.user = ` ${this.signupService.currentUser}`;
  }

}
