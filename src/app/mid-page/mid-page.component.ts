import { Component, Input, OnInit } from '@angular/core';
import { DataService, DrawingData } from '../data/data.service';

@Component({
  selector: 'app-mid-page',
  templateUrl: './mid-page.component.html',
  styleUrls: ['./mid-page.component.css']
})
export class MidPageComponent implements OnInit {
  data: DrawingData[] = []
  @Input() category: string = "";
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getDrawingData(this.category).slice(0, 3);
  }

  getCategoryBg(category: string) {
    if (category === this.category) {
      return 'url(../../assets/mid-nav-bg.png)'
    } else {
      return 'transparent'
    }
  }


  onClickChangeCategory(category: string) {
    this.category = category
    console.log(this.category);
    this.data = this.dataService.getDrawingData(this.category).slice(0, 3);
  }
}
