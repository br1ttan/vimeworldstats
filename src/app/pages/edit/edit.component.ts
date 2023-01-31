import { 
  ChangeDetectionStrategy, 
  Component, 
  ElementRef, 
  ViewChild 
} from '@angular/core';

import { AuthService } from '@features/auth';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent {
  @ViewChild('bannerElement')
  private bannerElement!: ElementRef;

  public authenticatedUser$ = this.authService.data$;

  constructor(
    private readonly authService: AuthService,
  ) { }

  public setImageUrl(result: string): void {
    const banner = this.bannerElement.nativeElement;

    if (result) {
      banner.style.backgroundImage = `url(${result})`;
    }
  }
}
