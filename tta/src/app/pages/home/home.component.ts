import { Component, OnInit } from '@angular/core';
import { Itimer } from 'src/app/interfaces/itimer';
import { TimersService } from 'src/app/services/timers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timers: Array<Itimer>;
  constructor(ts:TimersService) {
    this.timers = ts.getTimers();
  }

  ngOnInit(): void {
  }

}
