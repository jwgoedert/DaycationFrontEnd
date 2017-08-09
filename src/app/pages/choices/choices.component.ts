import { Component, OnInit } from '@angular/core';
import { TripService } from '../../shared/services/trip.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent implements OnInit {
  public choices:Array<String>;
  constructor(
    public tripService:TripService,
  ) { 
    this.choices = tripService.events;
  }

  ngOnInit() {
  }

}
