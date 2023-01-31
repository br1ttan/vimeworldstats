import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { AuthService, IAuthResponse } from '@features/auth';
import { IProfileThings, ProfileImageService } from '@features/edit';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputComponent implements OnInit {
  @ViewChild('fileInput')
  private fileInput!: ElementRef;

  @Output()
  public imageUrl = new EventEmitter<string>();
  
  private profileImage!: string;
  public authenticatedUser!: IAuthResponse | null;
  public isSaveButtonDisabled = true;

  constructor(
    private readonly profileImageService: ProfileImageService,
    private readonly authService: AuthService,
    private readonly changeDetector: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.initAuthenticatedUser();
  }
  
  private initAuthenticatedUser(): void {
    this.authService.data$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(user => {
        this.authenticatedUser = user;
      });
  }
  
  public onSelectButtonClick(): void {
    const fileInput = this.fileInput.nativeElement;

    fileInput.click();
  }

  public onFileInputChange(
      event: Event,
      input: HTMLInputElement,
      div: HTMLDivElement
    ): void {
    const fakePathRegExp = (/C:\\fakepath\\/i);

    div.textContent = input.value.replace(fakePathRegExp, '');

    const reader = new FileReader();
    const target: any = event.target as HTMLInputElement;
    const selectedFile: Blob = target.files[0];

    if (selectedFile instanceof Blob) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onloadend = () => {
      this.imageUrl.emit(reader.result as string);
      this.isSaveButtonDisabled = false;
      this.profileImage = (reader.result as string);
    };
    reader.onerror = () => null;
  }

  public onSaveButtonClick(): void {
    let profileThings: IProfileThings = {
      username: this.authenticatedUser!.owner.username,
      profileImage: this.profileImage!
    }

   this.profileImageService.delete(profileThings.username)
    .pipe(
      switchMap(() => this.profileImageService.send(profileThings)),
      untilDestroyed(this),
    )
    .subscribe((result) => {
      this.isSaveButtonDisabled = !!result;

      this.changeDetector.markForCheck();
    });
  }

  public onDeleteButtonClick(): void {
    const username = this.authenticatedUser!.owner.username;
    const isConfirm = confirm('Видалити шапку?');

    if (!isConfirm) return; 
    
    this.profileImageService.delete(username)
    .pipe(
      untilDestroyed(this)
    )
    .subscribe();
  }
}
