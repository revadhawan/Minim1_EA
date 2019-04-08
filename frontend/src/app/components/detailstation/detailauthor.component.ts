import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/models/station';

@Component({
  selector: 'app-detailstation',
  templateUrl: './detailstation.component.html',
  styleUrls: ['./detailstation.component.scss']
})
export class DetailstationComponent implements OnInit {

  station: Station;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService) {
    this.station = new Station();
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
    this.getStationDetail(this.station._id);
  }

 

  getStationDetail(_id: string){
    this.stationService.getStationDetail(_id)
    .subscribe(res =>{
      this.station = res;
      console.log(res);
      console.log(_id); 
      console.log(this.station);
    });
  }

}

