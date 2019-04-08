import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { Station } from 'src/app/models/station';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  stationsList: Station[] = [];
  constructor(private stationService: StationService) { }

  ngOnInit() {

    this.getStations();
  }

  
  getStations() {
    this.stationService.getStation()
      .subscribe(res => {
        this.stationService.stations = res as Station[];
      });
  }
  
  

}
