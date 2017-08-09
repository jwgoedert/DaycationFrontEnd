import { Injectable } from '@angular/core';

@Injectable()
export class TripService {
  public events: Array<String>;
  public foods: Array<String>;
  public moves: Array<String>;
  public eventChoices: Array<String>;
  public foodChoices: Array<String>;
  public transportationChoices: Array<String>;
  constructor(
  ) {
    this.eventChoices = [];
    this.foodChoices = [];
    this.transportationChoices = [];
    this.events =
      [
        'amusement_park',
        'aquarium',
        'art_gallery',
        'bar',
        'book_store',
        'bowling_alley',
        'cafe',
        'campground',
        'casino',
        'cemetery',
        'church',
        'embassy',
        'establishment',
        'food',
        'hindu_temple',
        'library',
        'lodging',
        'mosque',
        'movie_theater',
        'museum',
        'night_club',
        'park',
        'place_of_worship',
        'restaurant',
        'shopping_mall',
        'spa',
        'stadium',
        'store',
        'synagogue',
        'university',
        'zoo'];
    this.moves = ['bike', 'walk', 'car', 'bus'];
    this.foods = ['mexican', 'creole', 'cajun', 'french', 'barbecue', 'pizza', 'street', 'foodtruck'];
  }

}
