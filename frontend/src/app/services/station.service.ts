import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Station } from '../models/station'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StationService {
  selectedStation: Station
  stations: Station[]

  //BASE DE LAS URLS DEL SERVIDOR
  readonly URL_API = 'http://localhost:3001/api/stations';
  
 
  constructor(private http: HttpClient) {
    this.selectedStation = new Station()
   }

  //CREATE STATION
  postStation (Station: Station){
    return this.http.post(this.URL_API, Station)
  }

  //GET STATIONS
  getStation():Observable<Station[]>{
    return this.http.get<Station[]>(this.URL_API)
  }

  //GET STATION'S DETAILS
  getStationDetail(_id: string): Observable<Station>{
    return this.http.get<Station>(this.URL_API + `/${_id}`)
  }

  //GET A BIKE'S DETAILS FROM A STATION
  getBikeDetail(_id: string): Observable<Station>{
    return this.http.get<Station>(this.URL_API + + `/bikedetail/${_id}`)
  }

  //ADD A BIKE TO AN STATION
  addBike(stationID: string, bikeID: string){
    return this.http.put(this.URL_API + '/', {"stationID": stationID, "BikeID": bikeID})
  }
}
