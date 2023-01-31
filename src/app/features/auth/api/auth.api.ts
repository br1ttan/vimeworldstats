import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IAuthResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthApi {
    constructor(
        private readonly http: HttpClient
    ) {}

    public login(token: string): Observable<IAuthResponse> {
        return this.http.get<IAuthResponse>(`${environment.token}/${token}`);
    }
}
