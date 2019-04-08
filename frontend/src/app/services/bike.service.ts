import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Bike } from '../models/bike'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bike: Bike[]
  selectedbike: Bike
  readonly URL_API = 'http://localhost:3001/api/bikes';

  constructor(private http: HttpClient) {
    this.selectedbike = new Bike();
   }

  //GET AVAILABLE BIKES
  getAvailableBikes():Observable<Bike[]>{
    return this.http.get<Bike[]>(this.URL_API + `/available`);
  }

  //GET UNAVAILABLE BIKES
  getUnavailableBikes():Observable<Bike[]>{
    return this.http.get<Bike[]>(this.URL_API + `/unavailable`);
  }

  


}
