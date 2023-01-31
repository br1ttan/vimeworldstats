import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IOnline } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class SeparatedOnlineApi {
    constructor(
        private readonly http: HttpClient
    ) {}

    public get(): Observable<IOnline> {
        return this.http.get<IOnline>(environment.separatedOnline);
    }
}
