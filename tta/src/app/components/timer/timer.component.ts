import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() name!: string;
  spinnerColor: ThemePalette = 'primary';

  constructor() {


  }

  ngOnInit(): void {
  }

}
