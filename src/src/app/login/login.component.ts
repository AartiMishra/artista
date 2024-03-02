import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(" "),
      'password': new FormControl(null),
    })
  }

  OnSubmit(form: FormGroup) {
    console.log(this.loginForm);
    this.authService.login(form.value).subscribe(data => {
      console.log(data);

    });

  }

  onClickSignin() {
    this.router.navigate(['/signup'])
  }

  borderCheck(type: string) {
    if (this.loginForm.get(type)?.invalid && this.loginForm.get(type)?.touched) {
      return true
    } else {
      return false
    }
  }
}
