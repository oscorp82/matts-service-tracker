import { VehicleSeviceService } from './vehicle-service/vehicle-sevice.service';
import { VehicleService } from './vehicle/vehicle.service';
import { UserService } from './../shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleServiceComponent } from './vehicle-service/vehicle-service.component';
import { ServicePartsComponent } from './service-parts/service-parts.component';

var firebaseDatabaseConfig = {
  apiKey: "AIzaSyBgVypNqnFjFt5u__PwLAOwhibOIwWss1o",
  authDomain: "matt-service-tracker.firebaseapp.com",
  databaseURL: "https://matt-service-tracker.firebaseio.com",
  projectId: "matt-service-tracker",
  storageBucket: "matt-service-tracker.appspot.com",
  messagingSenderId: "553272991541"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleComponent,
    VehicleServiceComponent,
    ServicePartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseDatabaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "home", children: [
          { path: "", component: HomeComponent },
          { path: "vehicle/:vid", component: VehicleComponent },
        ]
      },
      {
        path: "vehicle", children: [
          { path: "", component: VehicleComponent },
          { path: ":sid", component: VehicleServiceComponent },
        ]
      },
      {
        path: "service", children: [
          { path: "", component: VehicleServiceComponent },
          { path: ":pid", component: ServicePartsComponent },
        ]
      },
      { path: "", redirectTo: "/home", pathMatch: 'full' },
      {
        path: "**", component: HomeComponent
      },
    ])
  ],
  providers: [UserService, VehicleService, VehicleSeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
