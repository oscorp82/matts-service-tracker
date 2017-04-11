import { VehicleServiceObj } from './../../shared/vehicle-service';
import { Vehicle } from './../../shared/vehicle';
import { UserService } from './../../shared/user.service';
import { AngularFire } from 'angularfire2';
import { User } from './../../shared/user';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleSeviceService {

  user: User;
  constructor(private af: AngularFire, private userService: UserService) { }

  getVehicleServices(vehId: string) {
    return this.af.database.list(`vehicle-service/${vehId}/services`)
      .map(data => data.reverse());
  }

  addVehicleService(vehId: string, service: VehicleServiceObj) {
    const vehicleSerivces = this.af.database.list(`vehicle-service/${vehId}/services`)
    vehicleSerivces.push({
      description: service.description,
      date: service.date,
      cost: service.cost
    })
  }
}
