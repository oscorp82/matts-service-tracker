import { VehicleServiceObj } from './../../shared/vehicle-service';
import { UserService } from './../../shared/user.service';
import { User } from './../../shared/user';
import { VehicleSeviceService } from './../vehicle-service/vehicle-sevice.service';
import { VehicleService } from './../vehicle/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'aap-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  idKey: string;
  vehicle: any;
  services: any;
  user: User;
  newCost: string;
  newDate: string;
  newDescrip: string;
  newService: VehicleServiceObj;

  constructor(private rt: ActivatedRoute, private router: Router,
    private vs: VehicleService, private vss: VehicleSeviceService,
    private uServ: UserService) { }

  ngOnInit() {
    this.uServ.user$.subscribe(user => this.user = user);

    this.idKey = this.rt.snapshot.params['vid'];
    this.vs.getVehicle(this.idKey)
      .first()
      .subscribe(veh => this.vehicle = veh);

    this.vss.getVehicleServices(this.idKey)
      .subscribe(vss => { this.services = vss; })
  }

  deleteThisVehicle() {
    var answer = confirm("Are you sure you want to delete this vehicle?");
    if (answer == true) {
      this.vs.deleteVehicle(this.idKey);
      this.router.navigate([""]);
    }
  }

  addVehicleService() {
    this.newService = new VehicleServiceObj();
    this.newService.description = this.newDescrip;
    this.newService.cost = this.newCost;
    this.newService.date = this.newDate;
    this.vss.addVehicleService(this.idKey, this.newService);
    this.newDescrip = '';
    this.newDate = '';
    this.newCost = '';
  }
}
