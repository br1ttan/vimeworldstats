import { Injectable } from "@angular/core";
import { THEME_ARRAY } from "@theme/data";
import { ThemeEnum } from "@theme/enums";
import { ITheme } from "@theme/interfaces";
import { ActiveThemeState } from "@theme/states";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    public get active$(): Observable<ThemeEnum | null> {
        return this.activeThemeState.data$;
    } 

    public get active(): ThemeEnum | null {
        return this.activeThemeState.data;
    }

    private readonly localStorageThemeKey = 'themeColor';

    constructor(
        private readonly activeThemeState: ActiveThemeState
    ) {}

    public setTheme(theme: ITheme): void {
        if (this.active === theme.id) {
            return;
        }

        this.activeThemeState.set(theme.id);
        this.assignPaletteToBodyElement(theme);
        localStorage.setItem(this.localStorageThemeKey, theme.id);
    }

    public initDefault(): void {
        if (!localStorage.getItem(this.localStorageThemeKey)) {
            this.setTheme(THEME_ARRAY[0]);
        }

        const themeId = localStorage.getItem(this.localStorageThemeKey) as ThemeEnum;
        const theme = this.getById(themeId);
        this.setTheme(theme);
    }

    private getById(id: ThemeEnum): ITheme {
        return THEME_ARRAY
            .find((theme) => theme.id === id) as ITheme;
    }

    private assignPaletteToBodyElement(theme: ITheme): void {
        for (let [paletteColorKey, paletteColorValue] of Object.entries(theme.palette)) {
            document.body.style.setProperty(`--${paletteColorKey}`, paletteColorValue);
        }
    }
}
