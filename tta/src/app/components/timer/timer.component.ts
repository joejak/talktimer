import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() name!: string;
  time:string;
  spinnerColor: ThemePalette = 'primary';

  constructor() {
    this.time = "00:00";

  }

  ngOnInit(): void {
  }

}
