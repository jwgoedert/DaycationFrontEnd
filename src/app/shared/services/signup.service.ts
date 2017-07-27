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
  public currentUser: String;
  constructor(
    public http: Http,
    public router: Router,
  ) { 
    this.router = router;
    this.http = http;
  }
  public checkUser(username: String, password: String): Promise<number> {
    return this.http
    .post(`${this.dbUrl}/signup?user=${username}&pass=${password}`, this.headers)
    .map(id => {
      this.id = JSON.parse(id["_body"]);
      console.log("ID is:", id);
      this.currentUser = username;
      return this.id;
    }).toPromise().then(id=>id);
  }


}
