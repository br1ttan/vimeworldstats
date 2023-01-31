import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SeparatedOnlineService } from '@features';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface ILocalGameData {
  readonly gameName: string,
  readonly gameOnline: number
}

@UntilDestroy()
@Component({
  selector: 'card-online-games',
  templateUrl: './card-online-games.component.html',
  styleUrls: ['./card-online-games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOnlineGamesComponent implements OnInit {
  public data!: ILocalGameData[];
  public dataTottalyOnline!: number;

  constructor(
    private readonly separatedOnlineService: SeparatedOnlineService,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initOnlineInEveryGame();
  }

  public initOnlineInEveryGame(): void {
    this.separatedOnlineService.get()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe((result) => {
        this.data = [
          {
            gameName: 'Лоббі',
            gameOnline: result.separated.lobby,
          },
          {
            gameName: 'Prison',
            gameOnline: result.separated.prison
          },
          {
            gameName: 'LuckyWars',
            gameOnline: result.separated.luckywars
          },
          {
            gameName: 'BedWars',
            gameOnline: result.separated.bw
          },
          {
            gameName: 'EggWars',
            gameOnline: result.separated.eggwars
          },
          {
            gameName: 'Murder Mystery',
            gameOnline: result.separated.murder
          },
          {
            gameName: 'BuildBattle',
            gameOnline: result.separated.bb
          },
          {
            gameName: 'Duels',
            gameOnline: result.separated.duels
          },
          {
            gameName: 'MobWars',
            gameOnline: result.separated.mw
          },
          {
            gameName: 'SkyWars',
            gameOnline: result.separated.sw
          },
          {
            gameName: 'Speed Builders',
            gameOnline: result.separated.speedbuilders
          },
          {
            gameName: 'Annihilation',
            gameOnline: result.separated.ann
          },
          {
            gameName: 'KitPvP',
            gameOnline: result.separated.kpvp
          },
          {
            gameName: 'HungerGames',
            gameOnline: result.separated.hg
          },
          {
            gameName: 'GunGame',
            gameOnline: result.separated.gg
          },
          {
            gameName: 'BlockParty',
            gameOnline: result.separated.bp
          },
          {
            gameName: 'The Bridge',
            gameOnline: result.separated.bridge
          },
          {
            gameName: 'Hide and Seek',
            gameOnline: result.separated.hide
          },
          {
            gameName: 'Jump League',
            gameOnline: result.separated.jumpleague
          },
          {
            gameName: 'TNT Run',
            gameOnline: result.separated.tntrun
          },
        ]
        this.dataTottalyOnline = result.total;

        this.changeDetector.markForCheck();
      })
    }
}
