import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeadTransformOptionsEnum, IHeadSettings } from '@features';
import { IPlayer } from '@features/player';

@Component({
  selector: 'profile-header-body',
  templateUrl: './profile-header-body.component.html',
  styleUrls: ['./profile-header-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderBodyComponent {
  @Input()
  public player!: IPlayer;

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
    width: 120,
    height: 120,
    transform: HeadTransformOptionsEnum.bigHead
  }
}
