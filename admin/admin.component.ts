import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.service';
import { IUser } from '../user.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  usersOnLogin!: IUser[];
  showAdmin: boolean = true;
  showUsers: boolean = false;
  showButton1: boolean = true;

  constructor(
    private service: User,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {}

  hiddenAdmin() {
    this.showAdmin = false;
  }
  show() {
    this.usersOnLogin = this.service.users;
    this.showUsers = true;

    this.showButton1 = !this.showButton1;
    }
  hide() {
    this.showUsers = false;

    this.showButton1 =  !this.showButton1;
  }
}
