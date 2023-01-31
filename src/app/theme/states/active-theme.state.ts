import { Injectable } from '@angular/core';
import { ThemeEnum } from '@theme/enums';
import { NgxState, PrimitiveState } from 'ngx-base-state';

@NgxState()
@Injectable({
    providedIn: 'root'
})
export class ActiveThemeState extends PrimitiveState<ThemeEnum> { }
