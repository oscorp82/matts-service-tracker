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

  constructor(private rt: ActivatedRoute, private router: Router, private vs: VehicleService) { }

  ngOnInit() {
    this.idKey = this.rt.snapshot.params['id'];
    this.vs.getVehicle(this.idKey)
      .first()
      .subscribe(veh => this.vehicle = veh);
  }

  deleteThisVehicle() {
    this.vs.deleteVehicle(this.idKey);
    this.router.navigate([""]);
  }

}
