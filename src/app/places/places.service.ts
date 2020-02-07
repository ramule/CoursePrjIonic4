import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Mumbai',
      'Mumbai is an economic capital city of india',
      './assets/mumbai.jpg',
      1000
    ),
    new Place(
      'p2',
      'Delhi',
      'Delhi is a capital of india',
      './assets/delhi.jpg',
      2000
    ),
    new Place(
      'p2',
      'Pune',
      'Pune is the second largest city in the Indian state of Maharashtra',
      './assets/pune.jpg',
      2000
    )
  ];

  constructor() {}

  get places() {
    return [...this._places];
  }

  getPlaces(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
