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
  // public response: number;
  public response: String;
  public id: number;

  constructor(
    public signupService: SignupService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
   async onSubmit(signUpForm: NgForm) {
    console.log("Form Value:",signUpForm.value);  // { first: '', last: '' }
    // console.log(signUpForm.valid);  // false
    
   this.id = await this.signupService.checkUser(signUpForm.value.name, signUpForm.value.password);
   await this.resultMessage();
   console.log("THIS IS ...", this.id) 
   // setTimeout(()=>{
    //   return this.showId();
    // },100) 
    // setTimeout(()=>  this.resultMessage(), 150);
    // this.id =  this.showId();
    console.log("id", this.id)
  }
  showId(): number{
    console.log("ReceivedID", this.signupService.id);
    return this.signupService.id;
  }
  resultMessage(): String{
    if (this.showId() === 0 ){
      console.log("you're already in the system");
      this.response = "You're in already";
      this.router.navigate(['dashboard']);
    }else{
      this.response = "Welcome!";
    }
    return this.response;
  }

}
