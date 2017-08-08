import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {
  //test data for trip options
  trips=[['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],
['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],
['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],
['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],
['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1'],['Stop1','Stop1','Stop1']];


  constructor() { }

  ngOnInit() {
  }

}
