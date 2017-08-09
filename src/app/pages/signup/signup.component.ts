import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../shared/services/signup.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public errorMessage: string;
  public id: number;

  constructor(
    public signupService: SignupService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  async onSubmit(signUpForm: NgForm) {
    this.id = await this.signupService.checkUser(signUpForm.value.name, signUpForm.value.password);

    if (this.id > 0) {
      this.router.navigate(['login']);
    } else {
      signUpForm.reset();
      this.errorMessage = 'Sorry that username is taken, please try another.';
    }
  }
}
