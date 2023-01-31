import { 
  ChangeDetectionStrategy, 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProfileImageService } from '@features/edit';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, filter, map, of, pipe, Subscription, switchMap, takeUntil, tap } from 'rxjs';

interface IRouteParam {
  readonly [nickname: string]: string
}

@UntilDestroy()
@Component({
  selector: 'profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBannerComponent {
  public data$ = this.activatedRoute.params
    .pipe(
      map((params) => params['player'] as string),
      switchMap((playerName) => this.profileImageService.get(playerName)),
      map(({profileImage}) => `url(${profileImage})`),
      catchError(() => of(null)),
      untilDestroyed(this)
    )
 
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly profileImageService: ProfileImageService
  ) { }
}
