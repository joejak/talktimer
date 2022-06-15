import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Itimer } from '../interfaces/itimer';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  timers: Array<Itimer>;
  observe: Observable<Array<Itimer>>;

  constructor(private ConfigServ: ConfigService) {
    this.timers = new Array<Itimer>();
    this.observe = new Observable<Array<Itimer>>();
  }

  addTimer(somename?:string){
    let randid = new Date().getTime();
    const t = {
      id: randid.toString(),
      name: somename ? somename : randid.toString(),
      time: 0,
      active: false,
    };
    this.timers.push(t);
    console.log(this.timers);
  }

  getTimer(id:string):Itimer{
    return this.timers.filter((t)=>{return t.id==id})[0];
  }

  getTimers():Array<Itimer>{
    return this.timers;
  }

  async startTimer(id:string){
    if(this.ConfigServ.getTimerMode() == 'single'){
      this.timers.forEach((t)=>{
        t.active = false;
      })
    }
    this.timers.filter((t)=>{
      return t.id == id
    })[0].active=true;
    return;
  }

  async stopTimer(id:string){
    this.getTimer(id).active = false;
  }
}
