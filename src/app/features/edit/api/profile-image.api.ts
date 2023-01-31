import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuthResponse } from "@features/auth";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProfileThings } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class ProfileImageApi {
    private dataBase = environment.dataBase;

    constructor(
        private readonly http: HttpClient
    ) {}

    public send(obj: IProfileThings): Observable<IProfileThings> {
        const username = obj.username;

        return this.http.post<IProfileThings>(`${this.dataBase}/${username}.json`, obj);
    }

    public deleteByUsername(username: string): Observable<unknown> {
        return this.http.delete(`${this.dataBase}/${username}.json`);
    }

    public getByUsername(username: string): Observable<IProfileThings> {
        return this.http.get<IProfileThings>(`${this.dataBase}/${username}.json`);
    }

    public getOwn(player: IAuthResponse): Observable<IProfileThings> {
        const onwerUsername = player.owner.username;

        return this.http.get<IProfileThings>(`${this.dataBase}/${onwerUsername}.json`);
    }
}
