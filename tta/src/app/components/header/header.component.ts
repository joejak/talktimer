// @ts-nocheck
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ThemeOption } from "../../../interfaces/theme-option";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit  {
  options$ = this.themeService.getThemeOptions();
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
  }

  onChange() {
    this.options$ = this.themeService.getThemeOptions();
  }

  themeChangeHandler(themeToSet:string) {
    this.themeService.setTheme(themeToSet);
  }
}
