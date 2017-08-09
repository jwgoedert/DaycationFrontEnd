import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../../config';

@Injectable()
export class ProfileService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
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
  public addPreferences(username: String, password: String): Promise<number> {
    return this.http
      .post(`${this.config.serverUrl}/login?user=${username}&pass=${password}`, this.headers)
      .map(user => {
        this.id = JSON.parse(user['_body']).length ? JSON.parse(user['_body'])[0].id : 0;
        localStorage.setItem('user', user['_body']);
        return this.id;
      }).toPromise().then(id => id);
  }
}
