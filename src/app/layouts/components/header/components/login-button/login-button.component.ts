import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { AuthService, IAuthResponse } from '@features/auth';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonComponent {
  public authenticatedUser$ = this.authService.data$;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  public onProfileNavigateButtonClick(authenticatedUser: IAuthResponse): void {
    const nickname = authenticatedUser?.owner.username;

    this.router.navigateByUrl(`/player/${nickname}`);
  }

  public onLogoutButtonClick(): void {
    this.authService.logout();
  }
}
