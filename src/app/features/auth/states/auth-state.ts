import { Injectable } from '@angular/core';
import { NgxState, ObjectState } from 'ngx-base-state';
import { IAuthResponse } from '../interfaces';

@NgxState()
@Injectable({
    providedIn: 'root'
})
export class AuthState extends ObjectState<IAuthResponse | null> {
    public isAuthenticated(): boolean {
        return !!this.data;
    }

    constructor() {
        super();
    }
}
