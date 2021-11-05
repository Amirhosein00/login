import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.service';
import { IUser } from '../user.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  inputName !: string;
  inputId !:string;
  inputPass !: string;
  userComparison !: string;
  adminButon : boolean = true;



  constructor(private router: Router, private service: User, private authService: AuthService) {}

  ngOnInit(): void {
  }

  nameChange(e: Event) {
    this.inputName = (<HTMLInputElement>e.target).value;
  }
  idChange(e: Event) {
    this.inputId = (<HTMLInputElement>e.target).value;
  }
  passChange(e: Event) {
    this.inputPass = (<HTMLInputElement>e.target).value;
  }

  onUser() {

    if(this.inputName === 'admin' &&this.inputId === 'admin' && this.inputPass === 'admin'){
      this.router.navigate(['/admin']);
    }
   else if(this.service.users.find(user => user.name === this.inputName && user.id === this.inputId && user.password === this.inputPass)){
      this.router.navigate(['/user']);
    }
   else {
    alert('incorect user or password');
  }
  }

  onAddUser(){
    this.router.navigate(['/addUser']);
  }

  onForgetUser(){
    this.router.navigate(['/forgetUser']);
  }

  loginAdmin(){
    this.authService.logIN();
    this.adminButon = !this.adminButon;
  }
  cantLoginAdmin(){
    this.authService.logOut();
    this.adminButon = !this.adminButon;
  }

}
