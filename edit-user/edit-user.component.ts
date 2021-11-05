import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../user.interface';
import { User } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  users !: IUser;

  constructor(private service: User, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.users = this.service.users.find(user => user.id === this.route.snapshot.params['id'])!;
  }



  onSaveChanges(name:string,id: string, pass: string){
    this.users.name = name;
    this.users.id = id;
    this.users.password = pass;
    this.router.navigate(['/admin']);

  }
  onBackAdmin(){
    this.router.navigate(['/admin']);

  }

}
