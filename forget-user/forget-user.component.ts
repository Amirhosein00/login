import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { User } from '../user.service';


@Component({
  selector: 'app-forget-user',
  templateUrl: './forget-user.component.html',
  styleUrls: ['./forget-user.component.css'],
})
export class ForgetUserComponent implements OnInit {
  usersOnLogin !: IUser[];
  findedUser !: IUser[];
  inputFindName!: string;
  inputFindId !:string;
  findedPass !: string ;

  constructor(private service: User) {}


  nameFind(e: Event) {
    this.inputFindName = (<HTMLInputElement>e.target).value;
  }
  idFind(e: Event) {
    this.inputFindId = (<HTMLInputElement>e.target).value;
  }

  ngOnInit(): void {
    this.usersOnLogin = this.service.users;

  }

  onFind() {
      this.service.users.find(user=> {if(user.name === this.inputFindName && user.id === this.inputFindId){
      this.findedPass = user.password;
    }
   else{
    alert('cant find user');
  }})


}
}
