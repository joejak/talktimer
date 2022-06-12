import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itimer } from '../interfaces/itimer';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  timers: Array<Itimer>;
  observe: Observable<Array<Itimer>>;
  constructor() {
    this.timers = new Array<Itimer>();
    this.observe = new Observable<Array<Itimer>>();
  }

  addTimer(somename?:string){
    let randid = new Date().getTime();
    const t = {
      id: randid.toString(),
      name: somename ? somename : randid.toString(),
      time: 0
    };
    this.timers.push(t);
    console.log(this.timers);
  }

  getTimers():Array<Itimer>{
    return this.timers;
  }
}
