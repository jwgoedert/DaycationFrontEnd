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
        'airport',
        'amusement_park',
        'aquarium',
        'art_gallery',
        'atm',
        'bakery',
        'bank',
        'bar',
        'bicycle_store',
        'book_store',
        'bowling_alley',
        'bus_station',
        'cafe',
        'campground',
        'casino',
        'cemetery',
        'church',
        'city_hall',
        'courthouse',
        'department_store',
        'embassy',
        'establishment',
        'fire_station',
        'florist',
        'food',
        'grocery_or_supermarket',
        'hindu_temple',
        'home_goods_store',
        'jewelry_store',
        'library',
        'liquor_store',
        'local_government_office',
        'lodging',
        'mosque',
        'movie_theater',
        'museum',
        'night_club',
        'park',
        'place_of_worship',
        'police',
        'post_office',
        'restaurant',
        'rv_park',
        'school',
        'shopping_mall',
        'spa',
        'stadium',
        'store',
        'subway_station',
        'synagogue',
        'train_station',
        'transit_station',
        'university',
        'zoo'];
    this.moves = ['bike', 'walk', 'car', 'bus'];
    this.foods = ['mexican', 'creole', 'cajun', 'french', 'barbecue', 'pizza', 'street', 'foodtruck'];
  }

}
