import { Injectable } from "@angular/core";
import { IAuthResponse } from "@features/auth";
import { map, Observable } from "rxjs";
import { ProfileImageApi } from "../api";
import { IProfileThings } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class ProfileImageService {
    constructor(
        private readonly profileImageApi: ProfileImageApi
    ) {}

    public send(obj: IProfileThings): Observable<IProfileThings> {
        return this.profileImageApi.send(obj)
            .pipe(
                map((response) => {
                    return {
                        id: response.name,
                        ...obj
                    }
                })
            );
    }

    public delete(username: string): Observable<unknown> {
        return this.profileImageApi.deleteByUsername(username);
    }

    public get(username: string): Observable<IProfileThings> {
        return this.profileImageApi.getByUsername(username)
            .pipe(
                map((response) => {
                    return Object.values(response)[0];
                })
            );
    }

    public getOwn(player: IAuthResponse): Observable<IProfileThings> {
        return this.profileImageApi.getOwn(player)
            .pipe(
                map((response) => {
                    return Object.values(response)[0];
                })
            );
    }
}
