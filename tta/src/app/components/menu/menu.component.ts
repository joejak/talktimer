import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ConfigService } from "src/app/config.service";

import { ThemeOption } from "../../../interfaces/theme-option";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @Input() options: Array<ThemeOption>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  timerMode:'single' | 'multiple';

  constructor(private themeService: ThemeService,
    private ConfigServ: ConfigService) {
    this.options = new Array<ThemeOption>();
    this.timerMode = 'single';
  }

  changeTheme(themeToSet:string) {
    this.themeChange.emit(themeToSet);
  }

  changeTimerMode(){
    this.ConfigServ.timerMode = this.timerMode;
  }
}
