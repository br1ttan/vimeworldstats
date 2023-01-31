import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { IPlayerStatistic } from '@features/player';

@Component({
  selector: 'profile-statistic',
  templateUrl: './profile-statistic.component.html',
  styleUrls: ['./profile-statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStatisticComponent {
  @Input()
  public data!: IPlayerStatistic;
}
