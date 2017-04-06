import { UserService } from './../shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseDatabaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),
    // RouterModule.forRoot([
    //   {},
    // ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
