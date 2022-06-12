import { Component } from '@angular/core';
import { TimersService } from 'src/app/services/timers.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  name: string;
  ts: TimersService;
  constructor(ts: TimersService) {
    this.name = '';
    this.ts = ts;
  }
  newCard() {
    console.log(`new card for ${this.name}`);
    this.ts.addTimer(this.name);
    this.name = '';
  }
}
