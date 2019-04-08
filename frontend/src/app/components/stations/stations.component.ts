import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { StationService} from '../../services/station.service';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';

@Component({
  selector: 'app-detailbike',
  templateUrl: './detailbike.component.html',
  styleUrls: ['./detailbike.component.scss']
})
export class StationsComponent implements OnInit {

  bike: Bike;

  constructor(private activatedRouter: ActivatedRoute, private bikeService: BikeService) {
    this.bike = new Bike();
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.bike._id = params['id'];
      }
      else{
        this.bike._id = '';
      }
    });
    this.getBikes(this.bike._id);
  }

 

  getBikes() {
    this.bikeService.()
      .subscribe(res => {
        this.bikeService.Bikes = res as Bike[];
      });
  }


}

