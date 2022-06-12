import { Component, EventEmitter, Input, Output } from "@angular/core";

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

  constructor(private themeService: ThemeService) {
    this.options = new Array<ThemeOption>();
  }

  changeTheme(themeToSet:string) {
    this.themeChange.emit(themeToSet);
  }
}
