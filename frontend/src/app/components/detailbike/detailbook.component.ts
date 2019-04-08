import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { BikeService } from '../../services/bike.service';
import { Station } from 'src/app/models/station';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-detailbike',
  templateUrl: './detailbike.component.html',
  //styleUrls: ['./detailbike.component.scss']
})
export class DetailbikeComponent implements OnInit {

  station: Station;
  bikesList: Bike[] = [];
  bikeId: string;
  stationId: string;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService, private bikeService: BikeService) {
    this.station = new Station();
    this.stationId = "";
   }


  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = '';
      }
    });
    this.getBikeStationDetail(this.station._id);
    this.getBikes();
  }

  getBikeStationDetail(_id: string){
    this.stationService.getBikeDetail(_id)
    .subscribe(res =>{
      this.station = res;
      console.log(res);
      console.log(_id); 
      console.log(this.station);
    });
    this.stationId = _id;
  }

  getBikes(){
    this.bikeService.getBikes()
      .subscribe(res => {
        this.bikesList= res;
        console.log("Hola");
        console.log(res);
      });
  }

  addbike(form: NgForm){
    this.bikeId = form.value._id;
    console.log("Station" + this.stationId);
    console.log("Bike" + this.bikeId);

    this.stationService.addBike(this.stationId, this.bikeId)
    .subscribe(res => {
      M.toast({html: 'Bike guardado'});
      this.getBikeStationDetail(this.stationId);
      form.reset();
    });
  
  }
}
