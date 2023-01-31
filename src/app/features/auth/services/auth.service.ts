import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthApi } from '../api/auth.api';
import { IAuthResponse } from '../interfaces';
import { AuthState } from '../states';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public readonly data$ = this.authState.data$;

    constructor(
        private readonly authApi: AuthApi,
        private readonly authState: AuthState
    ) { }

    private setResponseIfValid(response: IAuthResponse | null): void {
        if (response?.valid) {
            this.authState.updateWithPartial(response);
        }
    }

    public logout(): void {
        this.authState.set(null);
    }

    public login(token: string): Observable<IAuthResponse> {
        return this.authApi.login(token)
            .pipe(
                tap((response) => {
                    this.setResponseIfValid(response);
                })
            );
    }
}
