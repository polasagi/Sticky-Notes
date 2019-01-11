import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles : [`
  em {float:right; color:#E05C65; }
  `]
})
export class LoginComponent {
  mousehover;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formvalues) {
    // console.log(formvalues);
    this.authService.loginUser(formvalues.userName, formvalues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}

