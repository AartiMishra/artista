import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {
  condition = false
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.router.url)
  }
  ngOnInit(): void {
    this.getCondition()
  }

  ngDoCheck(): void {
    this.getCondition()

  }

  getCondition() {
    if (this.router.url === '/account') {
      this.condition = true;
    } else {

      this.condition = false;
    }

  }
}
