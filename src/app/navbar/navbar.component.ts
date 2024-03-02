import { Component, DoCheck } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserdataService } from '../data/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  checkLog = localStorage.getItem('userData');

  constructor(
    private authService: AuthenticationService,
    private userService: UserdataService,
    private router: Router) { }

  ngDoCheck(): void {
    this.checkLog = localStorage.getItem('userData');
  }

  onClickLogo() {
    this.router.navigate(['/']);
  }

  onClickLogout() {
    this.authService.logout()
  }
}
