import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/services/trip.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent implements OnInit {
  public eventChoices: Array<String>;
  public mappedEventChoices: Array<Object>;
  public chosen: Array<String>;
  public place: number;
  public selected: String;
  constructor(
    public tripService: TripService,
    public router: Router,
  ) {
    this.router = router;
    this.eventChoices = tripService.events;
    this.mappedEventChoices = tripService.mappedEvents;
    this.chosen = [];
    this.place = 0;
    this.selected = 'red';
  }

  toggleColor(name) {
    name.selected ? name.selected = false : name.selected = true;
    console.log('name:', name);
  }
  addToChosen(name) {
    console.log('name in Chosen', name);
    this.chosen.push(name);
    if (this.place === 0) {
    this.tripService.eventChoices.push(name);
    console.log('events', this.tripService.eventChoices);
    }
    if (this.place === 1) {
    this.tripService.foodChoices.push(name);
    console.log('events', this.tripService.foodChoices);
    }
    if (this.place === 2) {
    this.tripService.transportationChoices.push(name);
    console.log('events', this.tripService.transportationChoices);
    }
    if (this.place > 2) {
    console.log('You chose:');
    console.log('e vent choices', this.tripService.eventChoices);
    console.log(this.tripService.foodChoices);
    console.log(this.tripService.transportationChoices);

    }
    console.log('CHOSEN', this.chosen);
  }
  nextStep() {
    this.chosen = [];
    if (this.place <= 1) {
      this.place++;
      console.log('place num', this.place);
    } else if (this.place > 1) {
      console.log('Trip choices complete-rerouting!');
      this.router.navigate(['mytrips']);
    console.log(this.tripService.eventChoices, this.tripService.foodChoices, this.tripService.transportationChoices);
      console.log('rerouted successfully');
    }
  }
  ngOnInit() {
  }

}
