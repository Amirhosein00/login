export class AuthService {
  private loggedIn :boolean = false;

  public logIN(){
    this.loggedIn = true;
  }
  public logOut(){
    this.loggedIn = false;
  }

public isAuthenticated(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(this.loggedIn);
    }, 0);

  })
}
  constructor() { }
}
