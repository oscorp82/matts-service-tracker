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
        path: "", children: [
          { path: "", component: HomeComponent },
          { path: ":id", component: VehicleComponent },

        ]
      },
      {
        path: "vehicle-services", children: [
          { path: "", component: VehicleComponent },
          { path: ":id", component: VehicleServiceComponent },
        ]
      },
      {
        path: "service-parts", children: [
          { path: "", component: VehicleServiceComponent },
          { path: ":id", component: ServicePartsComponent },
        ]
      },

      {
        path: "**", component: HomeComponent
      },
    ])
  ],
  providers: [UserService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
