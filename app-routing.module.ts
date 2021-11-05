import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ForgetUserComponent } from './forget-user/forget-user.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'user', component:UserComponent},
{path:'admin', component:AdminComponent, children:[
  {path:'EditUser/:id/edit', component:EditUserComponent}
], canActivate:[AuthGuard]},
{path:'addUser', component:AddUserComponent},
{path:'forgetUser', component:ForgetUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
