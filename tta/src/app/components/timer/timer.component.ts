import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { min } from 'rxjs';
import { Itimer } from 'src/app/interfaces/itimer';
import { TimersService } from 'src/app/services/timers.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() timer!: Itimer;
  time:string;
  truetime:number;
  spinnerColor: ThemePalette = 'primary';
  spinnerValue: ProgressSpinnerMode;
  active: boolean;
  timeFactor: number;
  TS:TimersService;
  constructor(TS:TimersService) {
    this.TS = TS;
    this.time = "00:00";
    this.truetime = 0;
    this.active = false;
    this.spinnerValue = 'determinate';
    this.timeFactor = 100;
  }

  toggleActive(){
    if(this.isActive()){
      this.TS.stopTimer(this.timer.id);
    }
    else{
      this.TS.startTimer(this.timer.id);
      this.runTimer();
    }
  }

  isActive():boolean{
    return this.TS.getTimer(this.timer.id).active;
  }

  runTimer(){
    if(this.isActive()){
      this.spinnerValue = 'indeterminate';
      setTimeout(()=>{
        if(this.isActive()){
          this.truetime+=this.timeFactor;
          this.convertAndSetTrueTime2Time(this.truetime);
          this.runTimer();
        }
        else{
          this.spinnerValue = 'determinate';
        }
      }, this.timeFactor)
    }
  }

  async convertAndSetTrueTime2Time(t:number){
    let mins = Math.floor(t/60000);
    let seconds = Math.floor((t/1000)%60);
    this.time = this.pad(2, mins.toString())+":"+this.pad(2, seconds.toString());
  }

  pad(size:number, n:string){
    while(n.length<size){
      n = "0"+n;
    }
    return n;
  }

  ngOnInit(): void {
  }

}
