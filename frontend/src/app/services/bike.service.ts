import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Bike } from '../models/bike'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  selectedBike: Bike;
  Bikes: Bike[];
  readonly URL_API = 'http://localhost:3000/api/bikes';

  constructor(private http: HttpClient) {
    this.selectedBike = new Bike;
   }

  //post BIKE
  postBike (Bike: Bike):Observable<Bike>{
    return this.http.post<Bike>(this.URL_API, Bike);
  }

  //GET BIKES
  getBikes():Observable<Bike[]>{
    return this.http.get<Bike[]>(this.URL_API);
  }
}
