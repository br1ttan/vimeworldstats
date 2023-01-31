import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeadTransformOptionsEnum, IHeadSettings } from '@features';
import { IFriendsOfPlayer } from '@features/player';

@Component({
  selector: 'profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFriendsComponent {
  @Input()
  public data!: IFriendsOfPlayer;

  public get isData(): boolean {
    return !!this.data;
  }
  
  public get headTransformOptions(): HeadTransformOptionsEnum {
    return this.headSettings.transform;
  }

  public get headWidth(): number {
    return this.headSettings.width;
  }

  public get headHeight(): number {
    return this.headSettings.height;
  }

  private headSettings: IHeadSettings = {
    width: 48,
    height: 48,
    transform: HeadTransformOptionsEnum.miniHead
  }

  constructor(
    private readonly router: Router
  ) {}

  public onProfileNavigateButtonClick(nickname: string): void {
    this.router.navigateByUrl(`/player/${nickname}`);
  }
}
