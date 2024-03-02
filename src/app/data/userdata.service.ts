import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService) { }
  getAllUsersData() {
    const userArr: any = []
    return this.http.get(environment.databaseApi + '/users.json').pipe(
      map((data: any) => {
        // console.log(data);

        for (let key in data) {
          let newObj = data[key];
          for (let key1 in newObj) {
            newObj[key1]["key"] = key;
          }
          userArr.push(newObj);
        }
        return userArr
      })
    )
  }

  getUserEmails() {
    const emailsArr: any = []
    return this.getAllUsersData().pipe(
      map(data => {
        data.forEach((user: any) => {
          for (let key in user) {
            emailsArr.push(user[key].email)
          }
        })
        return emailsArr
      })
    )
  }
  getSpecificUserData(email: string) {
    let data: any;
    return this.getAllUsersData().pipe(
      map(users => {
        users.forEach((user: any) => {
          for (let key in user) {
            if (user[key].email === email) {
              data = user[key]
            }
          }
        })
        return data;
      })
    )
  }

  getUserKey(email: string) {
    let mainKey: any;
    return this.getAllUsersData().pipe(
      map(users => {
        users.forEach((user: any) => {
          for (let key in user) {
            // console.log(user[key]);
            if (user[key].email === email) {
              mainKey = user[key].key
            }

          }
        })
        return mainKey;
      })
    )
  }
  getUsernames() {
    const usernameArr: any = []
    return this.getAllUsersData().pipe(
      map(data => {
        data.forEach((user: any) => {
          for (let key in user) {
            usernameArr.push(key)
          }
        })
        return usernameArr
      })
    )
  }
  updateFullUser(key: string, name: string, value: any) {
    // console.log(`${environment.databaseApi}users /${key}.json`);

    this.http.patch(`${environment.databaseApi}users/${key}.json`, { [name]: value }).subscribe()
  }
  deleteAccount(token: string, key: string, name: string) {
    // this.logout()
    this.router.navigate(['/'])
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=' + environment.apiKey, {
      idToken: token
    }).subscribe()
    this.http.delete(`${environment.databaseApi}users/${key}/${name}.json`).subscribe()
    this.authService.logout();
  }
}
