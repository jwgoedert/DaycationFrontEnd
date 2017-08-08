import { Injectable } from '@angular/core';

@Injectable()
export class TripService {
  public events: Array<String>;
  public food: Array<String>;
  public move: Array<String>;
  public eventChoices: Array<String>;
  public foodChoices: Array<String>;
  public transPortChoices: Array<String>;

  constructor(
  ) {
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
    'beauty_salon',
    'bicycle_store',
    'book_store',
    'bowling_alley',
    'bus_station',
    'cafe',
    'campground',
    'car_dealer',
    'car_rental',
    'casino',
    'cemetery',
    'church',
    'city_hall',
    'clothing_store',
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
    'parking',
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
  this.move = ['bike', 'walk', 'drive', 'bus'
  ];
  }

}
