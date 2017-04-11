import { Observable } from 'rxjs';
import { Vehicle } from './../../shared/vehicle';
import { User } from '../../shared/user';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { UserService } from '../../shared/user.service';

@Injectable()
export class HomeService {
  user: User;
  constructor(private af: AngularFire, private userService: UserService) { }

  getVehicles() {
    //this.userService.user$.subscribe(user => this.user = user);
    console.log("userService.user=", this.userService.user)
    return this.af.database.list(`user-vehicles/${this.userService.user.uid}/vehicles`)
      .map(data => data.reverse());
  }

  addVehicle(vehicle: Vehicle) {
    if (!vehicle.make || !vehicle.model || !vehicle.year) {
      alert("Need make, model, and year :-)")
      return;
    }
    const vehicles = this.af.database.list(`user-vehicles/${this.userService.user.uid}/vehicles`);

    vehicles.push({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
    });

    console.log('new vehicle:', JSON.stringify({
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
    }));
  }

}
