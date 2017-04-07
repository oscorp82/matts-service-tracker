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


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user)
  }

}
