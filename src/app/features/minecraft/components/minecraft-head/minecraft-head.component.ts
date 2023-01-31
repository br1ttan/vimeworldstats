import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HeadTransformOptionsEnum } from '@features/minecraft/enums';

@Component({
  selector: 'minecraft-head',
  templateUrl: './minecraft-head.component.html',
  styleUrls: ['./minecraft-head.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinecraftHeadComponent {
  @Input()
  public transform!: HeadTransformOptionsEnum;

  @Input()
  public playerNickname?: string;
  
  @Input()
  public width = 48;
  
  @Input()
  public height = 48;

  public get transformSettings(): string {
    return `${this.transform}`;
  }

  public get playerImageUrl(): string {
    return `${this.vimeworldUrls.head}/${this.playerNickname}.png`;
  }
  
  public get playerBackgroundImageUrl(): string {
    return `url(${this.vimeworldUrls.skin}/${this.playerNickname}.png)`;
  }
  
  public get headWidth(): string {
    return `${this.width}px`;
  }
  
  public get headHeight(): string {
    return `${this.height}px`;
  }

  private readonly vimeworldUrls = {
    skin: 'https://skin.vimeworld.ru/raw/skin',
    head: 'https://skin.vimeworld.ru/head'
  }
}
