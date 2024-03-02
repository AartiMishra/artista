import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account, AuthenticationService } from '../authentication/authentication.service';
import { UserdataService } from '../data/userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  values !: Account;
  usernames: any = []
  emails: any = []
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userDataService: UserdataService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.invalidEmail.bind(this)]),
      'password': new FormControl(null),
      'username': new FormControl(null, [this.invalidName.bind(this)]),
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
    this.userDataService.getUserEmails().subscribe(data => {
      this.emails = data;
      console.log(this.emails);

    })

    this.userDataService.getUsernames().subscribe(data => {
      this.usernames = data;

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

  borderCheck(type: string) {
    if (this.signupForm.get(type)?.invalid && this.signupForm.get(type)?.touched) {
      return true
    } else {
      return false
    }
  }
  //Invalid Name Validator

  invalidName(control: AbstractControl): any {
    if (this.usernames.includes(control.value)) {
      return { 'usernameExists': true }
    }
    return null
  }

  //Invalid email
  invalidEmail(control: AbstractControl): any {
    if (this.emails.includes(control.value)) {
      return { 'emailExits': true }
    }
    return null
  }

  //Invalid password
  invalidPassword(control: FormControl): any {
    if (control.value.length < 6) {
      return { 'passwordShort': true }
    }
    return null
  }

}
