import { Directive, ElementRef, OnInit } from "@angular/core";
import { AuthService } from "@features";
import { ProfileImageService } from "@features/edit";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { switchMap, } from "rxjs";

@UntilDestroy()
@Directive({
    selector: '[banner]'
})
export class BannerDirective implements OnInit {
    constructor(
        private readonly hostRef: ElementRef,
        private readonly authService: AuthService,
        private readonly profileImageService: ProfileImageService,
    ) { }

    public ngOnInit(): void {
        this.initProfileImage();
    }

    private initProfileImage(): void {
        const hostElement = this.hostRef.nativeElement;

        this.authService.data$
            .pipe(
                switchMap((response) => this.profileImageService.getOwn(response!)),
                untilDestroyed(this)
            )
            .subscribe({
                next: (result) => {
                    hostElement.style.backgroundImage =
                        `url(${result?.profileImage})`;
                },
                error: () => null
            });
    }
}
