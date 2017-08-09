import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public errorMessage: string;
  public id: number;

  constructor(
    public logInService: LogInService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async onSubmit(logInForm: NgForm) {
    this.id = await this.logInService.loginUser(logInForm.value.name, logInForm.value.password);
    console.log('THIS IS ...', this.id);
    console.log('id', this.id);
    if (this.id > 0) {
      this.router.navigate(['dashboard']);
    } else {
      logInForm.reset();
      this.errorMessage = 'Sorry the username or password is incorrect, please try again.';
    }
  }
}
