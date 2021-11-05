import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { User } from './user.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ForgetUserComponent } from './forget-user/forget-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AddUserComponent,
    ForgetUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [User,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
