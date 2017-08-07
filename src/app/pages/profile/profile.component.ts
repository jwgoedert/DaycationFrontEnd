import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
views = ['Museums', 'Historic Sites','Parks'];
foods = ['Creole', 'Cajun', 'Mexican', 'Italian'];
moves = ['Car','Walk','Bike','Bus'];

  constructor() { }

  ngOnInit() {
  }
test3Clicked(){
  console.log("Test three clicked officially");

}
}
