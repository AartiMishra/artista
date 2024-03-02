import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Account, AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  values !: Account;
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
      'username': new FormControl(null),
      'fName': new FormControl(null),
      'lName': new FormControl(null),
      'cName': new FormControl(null),
      'phone': new FormControl(null),
      'alternatePhone': new FormControl(null),
      'address1': new FormControl(null),
      'address2': new FormControl(null),
      'state': new FormControl(null),
      'code': new FormControl(null),
    })
  }

  OnSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    console.log(form.value);
    this.authService.signup(form.value)

    form.reset()
  }

}
