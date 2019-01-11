import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  firstName: any;
  lastName: any;


  constructor(private authSerivce: AuthService, private router: Router) {

    // this.lastName = this.authSerivce.currentUser.lastName;
    // this.firstName = this.authSerivce.currentUser.firstName;

    this.lastName = 'lastname';
    this.firstName = 'firstname';

  }

  updateValues(formvalues) {
    console.log(formvalues);
    console.log(formvalues.firstName);
    console.log(formvalues.lastName);
    this.authSerivce.updateCurrentUser(formvalues.firstName, formvalues.lastName);
    this.router.navigate(['events']);

  }


}
