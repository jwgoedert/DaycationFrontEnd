import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/services/trip.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public views: Array<String>;
foods = ['Creole', 'Cajun', 'Mexican', 'Italian'];
moves = ['Car', 'Walk', 'Bike', 'Bus'];

  constructor(
    public tripService: TripService,
  ) {
    this.views = this.tripService.events;
  }

  ngOnInit() {
    console.log(this.views);
  }
test3Clicked() {
  console.log('Test three clicked officially');

}
}
