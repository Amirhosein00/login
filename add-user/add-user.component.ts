import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../user.interface';
import { User } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() onAddUserClicked = new EventEmitter<IUser[]>();
  inputNameNew!:string;
  inputpassNew!:string;


  nameAdd(e: Event) {
    this.inputNameNew = (<HTMLInputElement>e.target).value;
  }
  passAdd(e: Event) {
    this.inputpassNew = (<HTMLInputElement>e.target).value;
  }

  constructor( private service: User) { }

  userss: IUser[] = [];
  ngOnInit(): void {
    this.userss = this.service.users;
  }
  onAddUsser( name : string , id: string ,password : string){

    let a: IUser = {
      name : name,
      id: id,
      password : password,
    };
    this.userss.push(a);
    this.onAddUserClicked.emit(this.userss);
    this.service.users = this.userss;
    console.log(this.service.users);


  }


}
