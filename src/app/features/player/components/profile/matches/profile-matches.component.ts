import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlayerMatches } from '@features/player';

@Component({
  selector: 'profile-matches',
  templateUrl: './profile-matches.component.html',
  styleUrls: ['./profile-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMatchesComponent {
  @Input()
  public data!: IPlayerMatches;
}
