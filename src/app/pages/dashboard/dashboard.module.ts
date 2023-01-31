import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRouting } from './dasboard.routing';
import { CardOnlineGamesComponent, CardOnlineModeratorsComponent } from './components';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    DashboardComponent,
    CardOnlineGamesComponent,
    CardOnlineModeratorsComponent,
  ],
  imports: [
    CommonModule,
    DashBoardRouting,
    SharedModule,
    FeaturesModule
  ]
})
export class DashboardModule { }
