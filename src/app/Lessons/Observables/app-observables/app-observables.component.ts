import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-app-observables',
  templateUrl: './app-observables.component.html',
  styleUrls: ['./app-observables.component.css']
})
export class AppObservablesComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;
  constructor(private usersServie: UsersService) { }

  ngOnInit() {
    this.usersServie.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

}
