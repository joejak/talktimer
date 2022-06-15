import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  timerMode: 'single' | 'multiple'
  constructor() {
    this.timerMode = 'single';
  }

  getTimerMode(){
    return this.timerMode; 
  }
}
