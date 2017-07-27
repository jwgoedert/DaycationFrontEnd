import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TestsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'http://localhost:8080/v1';  // URL to web api
  constructor(
    public http: Http,
    private router: Router,
  ) {
    this.router = router;
    this.http = http;
  }
  title = 'Friend';
  goToDashboard(): void {
    this.router.navigate(['profile']);
  }
  seedTest(): Subscription {
    return this.http
      .get(`${this.heroesUrl}/seed`).map(info => {
        console.log(info);
        return info;
      }).subscribe(newinfo => {
        return newinfo;
      })

  }
  signUpTest(): Subscription {
    return this.http
      .post(`${this.heroesUrl}/signup?user=jamestest4&pass=jamestest4`, Headers).map(info => {
        console.log(info);
        return info;
      }).subscribe(newinfo => {
        return newinfo;
      })
  }
  geoLocationTest(): void {
    if ("geolocation" in navigator) {
      console.log("you are good to be located")
      this.getGeoCoords();
    } else {
      console.log("you're off the grid...no location available.")
    }
  }
  getGeoCoords(): void {
    console.log("GEOCOORDS");
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  success(pos): void {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

}
