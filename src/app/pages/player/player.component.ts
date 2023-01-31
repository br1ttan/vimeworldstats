import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerGeneralDataService } from '@features/player';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map, switchMap, tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  public data$ = this.activatedRoute.params
    .pipe(
      map((params) => params['player'] as string),
      switchMap((result) => this.generalDataService.get(result)),
    )

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly generalDataService: PlayerGeneralDataService
  ) { }
}
