import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-observables',
  templateUrl: './user-observables.component.html',
  styleUrls: ['./user-observables.component.css']
})
export class UserObservablesComponent implements OnInit {
  id: number;


  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }
  onActivate() {
    this.usersService.userActivated.next(this.id);
  }
}
