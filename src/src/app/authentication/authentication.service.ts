import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  displayName?: string;
  password?: string;
}

export interface Account {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  address1: string;
  address2: string;
  state: string;
  code: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  user = new BehaviorSubject<any>(null);
  loggedData: { email: string; id: string; _token: string, _tokenExpirationData: string } | null = JSON.parse(localStorage.getItem('userData')!)
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient) { }

  login(account: Account) {

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.apiKey, {
      email: account.email,
      password: account.password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleErrors),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        )
      })
    )
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: Date;
    } = JSON.parse(localStorage.getItem('userData')!)

    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate));
    console.log(loadedUser.email);

    if (loadedUser.token) {
      this.user.next(loadedUser)
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      console.log(expirationDuration);

      this.autoLogout(expirationDuration)
    }
  }

  logout() {
    this.user.next(null);
    // this.router.navigate(['/acoount', 'login']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.loggedData = null
    this.tokenExpirationTimer = null
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);

    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  signup(account: any) {
    this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
      {
        email: account.email,
        password: account.password,
        returnSecureToken: true
      }
    ).subscribe(data => {
      console.log(data);

      this.userCreated(account.email, account.password, account.username, account.firstName, account.lastName, account.companyName, account.phoneNumber, account.alternatePhoneNumber, account.address1, account.address2, account.state, account.code)

    })
  }

  private userCreated(email: string, password: string, username: string, firstName: string, lastName: string, companyName: string, phoneNumber: string, alternatePhoneNumber: string, address1: string, address2: string, state: string, code: string) {
    this.http.post(`${environment.databaseApi}/users.json`, {
      [username]: {
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        phoneNumber: phoneNumber,
        alternatePhoneNumber: alternatePhoneNumber,
        address1: address1,
        address2: address2,
        state: state,
        code: code
      }
    }).subscribe(data => {
      console.log(data);
    })
  }
  private handleErrors(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured'
    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage)
    }


    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already'
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist'
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password'
        break
    }
    console.log(errorMessage);

    return throwError(errorMessage)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationData = new Date(new Date().getTime() + +expiresIn * 1000)
    const user = new User(email, userId, token, expirationData)
    this.user.next(user);
    // this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user))
  }

  getData(loggedData: any) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBUHG5LFJg2r_hhboaP48Ig4vldvya5gCQ', {
      idToken: loggedData._token
    })
  }
}
