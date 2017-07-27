import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
  geoLocationTest(){
    if("geolocation" in navigator){
      console.log("you are good to be located")
      this.getGeoCoords();
    } else {
      console.log("you're off the grid...no location available.")
    }
  }
  getGeoCoords(){
    console.log("GEOCOORDS");
    // console.log(navigator.geolocation.getCurrentPosition(pos => console.log(pos)));
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("inside navigator");
//   console.log(`${position.coords.latitude},${position.coords.longitude}`);
// });
navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);

  }
options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

 success(pos) {
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
