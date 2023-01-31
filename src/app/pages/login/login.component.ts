import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, IAuthResponse } from '@features/auth';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public isSubmitted = false;
  public authenticatedUserSubject$!: IAuthResponse;

  constructor(
    private readonly authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.form = new FormGroup({
      token: new FormControl(null, [
        Validators.required
      ])
    })
  }

  public onFormSubmit(): void {
    const TOKEN = this.form.value.token;

    if (this.form.invalid) return;
    
    this.isSubmitted = true;

    this.authService.login(TOKEN)
      .pipe(
        untilDestroyed(this)
      )
      .subscribe({
        next: () => {
          this.form.reset();
          this.isSubmitted = false;
        },
        complete: () => this.isSubmitted = false
      })
  }
}
