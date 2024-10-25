import { Component, OnInit } from '@angular/core';

interface range {
  min: number;
  max: number;
  step: number;
  value: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './solid.component.html',
  styleUrls: ['./solid.component.scss'],
})
export class SolidComponent implements OnInit {
  title = 'SOLID';

  range: range = {
    min: 50,
    max: 1000,
    step: 50,
    value: 100,
  };
  progress: number = 0;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.range = {
        min: 50,
        max: 1000,
        step: 50,
        value: 100,
      };
    }, 1000);
  }

  changeRange(e: any) {
    this.progress = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
    this.range.value = e.target.value;
  }
}
