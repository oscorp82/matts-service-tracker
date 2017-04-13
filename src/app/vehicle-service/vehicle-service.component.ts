import { ActivatedRoute, Router } from '@angular/router';
import { VehicleServiceObj } from './../../shared/vehicle-service';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aap-vehicle-service',
  templateUrl: './vehicle-service.component.html',
  styleUrls: ['./vehicle-service.component.css']
})
export class VehicleServiceComponent implements OnInit {
  partIdKey: string;
  vehIdKey: string;
  vehService: VehicleServiceObj;

  constructor(private rt: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.partIdKey = this.rt.snapshot.params['pid'];
    this.vehIdKey = this.rt.snapshot.params['vid'];
  }

}
