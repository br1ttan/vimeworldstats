import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ITheme, THEME_ARRAY } from '@theme';
import { ThemeService } from 'src/app/theme/services/theme.service';

@Component({
  selector: 'themes-changer',
  templateUrl: './themes-changer.component.html',
  styleUrls: ['./themes-changer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemesChangerComponent {
  public readonly themeArray = THEME_ARRAY;
  
  constructor(
    private readonly themeService: ThemeService
  ) {}

  public onThemeButtonClick(theme: ITheme): void {
    this.themeService.setTheme(theme);
  }
}
