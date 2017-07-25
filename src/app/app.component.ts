import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:8080/v1';  // URL to web api
  // private heroesUrl = 'https://735cb16c.ngrok.io/v1';  // URL to web api
 constructor(
    public http: Http,
    private router: Router,
  ) {
  this.router = router;  
  this.http = http;
  }
  title = 'Friend';
  goToDashboard(){
    this.router.navigate(['profile']);
  }
  seedTest(){
    return this.http
    .get(`${this.heroesUrl}/seed`).map(info =>{
      console.log(info);
      return info;
    }).subscribe(newinfo=> {
      return newinfo;
    })
    
  }
  signUpTest(){
    return this.http
    .post(`${this.heroesUrl}/signup?user=jamestest4&pass=jamestest4`, Headers).map(info =>{
      console.log(info);
      return info;
    }).subscribe(newinfo=> {
      return newinfo;
    })

    

  }
}
