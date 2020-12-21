import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:class-name
class login {
  email: string;
  password: any;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: login;
  // tslint:disable-next-line:typedef
  private loginForm: any;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // @ts-ignore
    this.login = {
      email: '',
      password: ''
    };
  }
  // tslint:disable-next-line:typedef
  onSubmit(userForm: any){
    console.log(this.loginForm.value);
  }
}
// tslint:disable-next-line:class-name
export class contact {
  email: string;
  password: any;
}

