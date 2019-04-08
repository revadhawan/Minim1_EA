import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AddbikeComponent } from './components/addbike/addbike.component';
//import { AddstationComponent } from './components/addstation/addstation.component';
//import { DetailstationComponent } from './components/detailstation/detailstation.component';
//import { DetailbikeComponent } from './components/detailbike/detailbike.component';
import { MainComponent } from './components/main/main.component';
//import { StationsComponent } from './components/stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    //AddbikeComponent,
    //AddstationComponent,
    //DetailstationComponent,
    //DetailbikeComponent,
    MainComponent,
    //StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
