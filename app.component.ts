import { Component } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';


  users: IUser[] = [];
  public userAdded(users: IUser[]){
    this.users = users;
}
}

