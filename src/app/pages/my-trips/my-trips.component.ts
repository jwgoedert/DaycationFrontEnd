import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/services/trip.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {
  public prefs: Array<Array<String>>;

  constructor(
    public tripService: TripService,

  ) {
    this.prefs = [this.tripService.eventChoices, this.tripService.foodChoices, this.tripService.transportationChoices];
  }

  ngOnInit() {
    console.log(this.tripService.eventChoices);
  }

}
