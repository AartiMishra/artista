import { Component, OnInit } from '@angular/core';
import { DataService, DrawingData } from '../data/data.service';

@Component({
  selector: 'app-drawing-menu',
  templateUrl: './drawing-menu.component.html',
  styleUrls: ['./drawing-menu.component.css']
})
export class DrawingMenuComponent implements OnInit {
  data: DrawingData[] = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getDrawingData();
  }
}
