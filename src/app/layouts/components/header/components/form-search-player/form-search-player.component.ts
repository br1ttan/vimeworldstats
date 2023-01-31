import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '@features/player';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'form-search-player',
  templateUrl: './form-search-player.component.html',
  styleUrls: ['./form-search-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchPlayerComponent {

  constructor(
    private readonly router: Router,
    private readonly playerService: PlayerService,
  ) { }

  public onFormSubmit(inputElement: HTMLInputElement): void {
    const nickname = inputElement.value;

    this.playerService.getByNickname(nickname)
      .pipe(
        filter((result) => result.length > 0),
        untilDestroyed(this)
      )
      .subscribe(() => {
          this.router.navigateByUrl(`player/${nickname}`);
          inputElement.value = '';
      });
  }
}
