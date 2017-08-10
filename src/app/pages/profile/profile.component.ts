import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/services/trip.service';
import { ProfileService } from '../../shared/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public events: Array<String>;
  public foods: Array<String>;
  public moves: Array<String>;
  public eventArr: Array<String> = [];
  public foodArr: Array<String> = [];
  public moveArr: Array<String> = [];
  public counter: number = 0;
  public check: string;
  public message: string;
  
  constructor(
    public tripService: TripService,
    public profileService: ProfileService,
    public router: Router,
  ) {
    this.router = router;
    this.profileService = profileService;
    this.events = this.tripService.events;
    this.foods = this.tripService.foods;
    this.moves = this.tripService.moves;
  }

  ngOnInit() {
  }

  async next() {
    console.log('this.counter', this.counter);
    if (this.counter === 2) {
      this.check = await this.profileService.addPreferences(this.eventArr, this.foodArr, this.moveArr);
      this.router.navigate(['dashboard']);
    } else {
      this.counter += 1;
    }
  }
  addEvent(event) {
    this.eventArr.push(event);
  }

  addFood(food) {
    this.foodArr.push(food);
  }

  addTransportation(move) {
    this.moveArr.push(move);
    this.next();
    this.counter++;
  }
}
