import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StyleManagerService } from './style-manager.service';
import { ThemeOption } from '../../interfaces/theme-option';

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<ThemeOption>> {
    return this.http.get<Array<ThemeOption>>('./assets/themes.json');
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      'rel',
      `assets/${themeToSet}.css`
    );
  }
}
