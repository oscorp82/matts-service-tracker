import { Vehicle } from './../../shared/vehicle';
import { User } from '../../shared/user';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { UserService } from '../../shared/user.service';

@Injectable()
export class HomeService {
  user;

  constructor(private af: AngularFire, private userService: UserService) { }

  getVehicles() {
    this.userService.user$.subscribe(user => this.user = user)
    return this.af.database.list(`user-vehicles/${this.user.uid}/vehicles`)
      .map(data => data.reverse());
  }

  addVehicle(vehicle: Vehicle) {
    this.userService.user$.subscribe(user => this.user = user)
    if (!vehicle.make || !vehicle.model || !vehicle.year) {
      return;
    }
    const vehicles = this.af.database.list(`user-vehicles/${this.user.uid}/vehicles`);
    vehicles.push({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
    });
  }

}
