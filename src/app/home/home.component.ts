import { Vehicle } from './../../shared/vehicle';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'aap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  vehicles: any[];
  newVehicle: Vehicle = new Vehicle();
  newMake: string;
  newModel: string;
  newYear: string;

  constructor(private userService: UserService, private homeService: HomeService) { }

  ngOnInit() {
    this.userService.user$
      .map(user => this.user = user)
      .switchMap(_ => this.homeService.getVehicles())
      .subscribe(homeServiceData => {
        console.log("serve returned vehicles", homeServiceData)
        this.vehicles = homeServiceData;
      })
  }

  addVehicle() {
    this.newVehicle.make = this.newMake;
    this.newVehicle.model = this.newModel;
    this.newVehicle.year = this.newYear;
    this.homeService.addVehicle(this.newVehicle);
    this.newMake = '';
    this.newModel = '';
    this.newYear = '';
  }

}
