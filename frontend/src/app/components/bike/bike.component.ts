import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Bike } from "../../models/bike";
import { Station } from "../../models/station";
import { BikeService } from 'src/app/services/bike.service';
import { StationService } from 'src/app/services/station.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})

export class BikeComponent implements OnInit {
  station: Station
  bikesList1: Bike[] = []  
  bikesList2: Bike[] = []
  selectedbike: Bike
  unavailablebikes: Bike[]

  stationID: string
  bikeID: string
  
  constructor(private bikeService: BikeService, private activatedRoute: ActivatedRoute, private stationService: StationService) { 
    this.station = new Station()
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = ''
      }
    });
    this.getAvailableBikes()
    this.getUnavailableBikes()
    this.getStationBikeDetail(this.station._id)    
  }

  getAvailableBikes(){
    this.bikeService.getAvailableBikes()
      .subscribe(res => {
        this.bikesList1= res;
        console.log(res);
      });
  }

  getUnavailableBikes(){
    this.bikeService.getUnavailableBikes()
      .subscribe(res => {
        this.bikesList2= res;
        console.log(res);
      });
  }
  
  getStationBikeDetail(_id: string){
    this.stationService.getStationBikeDetail(_id)
    .subscribe(res => {
      this.station = res
    })
    this.stationID = _id
  }

  addBike(_id: string){
    this.bikeID = _id;
    console.log("Station" + this.stationID);
    console.log("Student" + this.bikeID);

    this.stationService.addBike(this.stationID, this.bikeID)
    .subscribe(res => {
      this.getAvailableBikes();
      this.getStationBikeDetail(this.stationID);
    }); 
  
  }

  
}
