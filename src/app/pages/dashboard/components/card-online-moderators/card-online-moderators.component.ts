import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HeadTransformOptionsEnum, IHeadSettings, OnlineModeratorsService } from '@features';

@UntilDestroy()
@Component({
  selector: 'card-online-moderators',
  templateUrl: './card-online-moderators.component.html',
  styleUrls: ['./card-online-moderators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOnlineModeratorsComponent {
  public get headTransformOptions(): HeadTransformOptionsEnum {
    return this.headSettings.transform;
  }

  public get headWidth(): number {
    return this.headSettings.width;
  }

  public get headHeigth(): number {
    return this.headSettings.height;
  }

  private headSettings: IHeadSettings = {
    width: 48,
    height: 48,
    transform: HeadTransformOptionsEnum.miniHead
  }

  public data$ = this.onlineModeratorsService.get();
  
  constructor(
    private readonly onlineModeratorsService: OnlineModeratorsService,
  ) {}
    
    public getRouterLink(nickname: string): string {
      return `/player/${nickname}`;
    }
}
