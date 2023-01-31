import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OnlineModeratorsApi } from "../api/online-moderators.api";
import { IPlayer } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class OnlineModeratorsService {
    constructor(
        private readonly onlineModeratorsApi: OnlineModeratorsApi
    ) {}

    public get(): Observable<IPlayer[]> {
        return this.onlineModeratorsApi.get();
    }
}
