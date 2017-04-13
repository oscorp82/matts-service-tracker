import { VehicleSeviceService } from './vehicle-sevice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleServiceObj } from './../../shared/vehicle-service';
import { UserService } from './../../shared/user.service';
import { User } from "../../shared/user";
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
  user: User;

  constructor(private rt: ActivatedRoute, private router: Router,
    private vss: VehicleSeviceService, private uServ: UserService) { }

  ngOnInit() {
    this.uServ.user$.subscribe(user => this.user = user);
    
    // Had to do it this way since subscribing to the params would come in after we needed
    // them for the call to getVehicleService().
    this.rt.params
      .do(params => {
        this.partIdKey = params.pid;
        this.vehIdKey = params.vid;
        console.log("params=", params.pid, params.vid)
      })
      .switchMap(_ => this.vss.getVehicleService(this.vehIdKey, this.partIdKey))
      .do(console.log)
      .first()
      .subscribe(serv => this.vehService = serv);
    console.log("got service=", this.vehService);
  }

}
