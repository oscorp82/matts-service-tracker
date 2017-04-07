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
  newVechicle: string;

  constructor(private userService: UserService, private homeService: HomeService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user)

    this.homeService.getVehicles().subscribe(homeServiceData => {
      this.vehicles = homeServiceData;
    })
  }

}
