import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/data/userdata.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {
  usernames: any = []
  emails: any = []
  email: string = ""
  signupForm!: FormGroup;
  localData !: any;
  userData: any;

  constructor(private userDataService: UserdataService) { }

  ngOnInit(): void {
    this.localData = JSON.parse(localStorage.getItem('userData')!)
    if (localStorage.getItem('userData')) {
      this.email = JSON.parse(localStorage.getItem('userData')!).email
      this.userDataService.getSpecificUserData(this.email).subscribe(data => {
        // console.log(data);
        this.userData = data;

        this.signupForm.setValue({
          email: data.email,
          password: data.password,
          username: data.username,
          fName: data.fName ? data.fName : null,
          lName: data.lName ? data.lName : null,
          cName: data.cName ? data.cName : null,
          phone: data.phone ? data.phone : null,
          alternatePhone: data.alternatePhone ? data.alternatePhone : null,
          address1: data.address1 ? data.address1 : null,
          address2: data.address2 ? data.address2 : null,
          state: data.state ? data.state : null,
          code: data.code ? data.code : null

        })
      })
    }
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null),
      'username': new FormControl(null,),
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
  borderCheck(type: string) {
    if (this.signupForm.get(type)?.invalid && this.signupForm.get(type)?.touched) {
      return true
    } else {
      return false
    }
  }

  OnSubmit(form: FormGroup) {
    console.log("submit");
    // console.log(form.value);
    let key = ""
    this.userDataService.getUserKey(form.value.email).subscribe(data => {
      key = data
      console.log(key);

    }, () => { }, () => {

      const obj = { email: form.value.email, password: form.value.password, username: form.value.username, fName: form.value.fName, lName: form.value.lName, cName: form.value.cName, phone: form.value.phone, alternatePhone: form.value.alternatePhone, address1: form.value.address1, address2: form.value.address2, state: form.value.state, code: form.value.code }
      console.log(obj);


      this.signupForm.setValue(obj)
      this.userDataService.updateFullUser(key, form.value.username, obj)


    });
  }
  onClickDelete() {
    this.userDataService.deleteAccount(this.localData._token, this.userData.key, this.userData.username)
  }
}
