import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IPlayer } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class OnlineModeratorsApi {
    constructor(
        private readonly http: HttpClient
    ) {}

    public get(): Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(environment.onlineModerators);
    }
}
