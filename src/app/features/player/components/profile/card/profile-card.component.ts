import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFriendsOfPlayer, IPlayer, IPlayerSession } from '@features/player';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {
  @Input()
  public player!: IPlayer;

  @Input()
  public session!: IPlayerSession;

  @Input()
  public friends!: IPlayer[];
}
