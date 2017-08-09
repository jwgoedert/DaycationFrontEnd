import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../../config';

@Injectable()
export class SignupService {
  private headers = new Headers({'Content-Type': 'application/json'});
  // private dbUrl = 'https://3cdc0929.ngrok.io/v1'; // ||'http://localhost:8080/v1';  // URL to web api
  public id: number;
  constructor(
    public http: Http,
    public router: Router,
    public config: Config,
  ) {
    this.router = router;
    this.http = http;
    this.config = config;
  }
  public checkUser(username: String, password: String): Promise<number> {
    return this.http
    .post(`${this.config.serverUrl}/signup?user=${username}&pass=${password}`, this.headers)
    .map(id => {
      this.id = JSON.parse(id['_body']);
      return this.id;
    }).toPromise().then(id => id);
  }
}
