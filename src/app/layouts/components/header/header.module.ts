import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { FormSearchPlayerComponent } from './components/form-search-player/form-search-player.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ThemesChangerComponent } from './components/themes-changer/themes-changer.component';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FormSearchPlayerComponent,
        ThemesChangerComponent,
        LoginButtonComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent
    ],
})
export class HeaderModule {}
