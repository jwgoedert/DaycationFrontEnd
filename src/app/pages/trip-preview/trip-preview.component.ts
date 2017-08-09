import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss']
})
export class TripPreviewComponent implements OnInit {
  stops=['stop1','stop2','stop3','stop4','stop5','stop6']
  constructor() { }

  ngOnInit() {
  }

}
