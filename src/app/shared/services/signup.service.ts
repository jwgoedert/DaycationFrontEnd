import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SignupService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private dbUrl = 'http://localhost:8080/v1';  // URL to web api
  public id: number;
  constructor(
    public http: Http,
    public router: Router,
  ) { 
    this.router = router;
    this.http = http;
  }
  public checkUser(username: String, password: String): Subscription {
    return this.http
    .post(`${this.dbUrl}/signup?user=${username}&pass=${password}`, this.headers)
    .map(id => {
      console.log("ID is:", id);
      return id;
    }).subscribe(id =>{
      // console.log("ID", id);
      // console.log("ID Type:", typeof(id));
      // console.log("Keys", typeof(Object.keys(id)[0]));
      // this.id = id.status;
      this.id = JSON.parse(id["_body"]);
      console.log("TYPEof Body:", typeof this.id);
      console.log(this.id);
      return this.id;
    })
  }


}
