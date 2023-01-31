import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SeparatedOnlineApi } from "../api";
import { IOnline } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class SeparatedOnlineService {
    constructor(
        private readonly separatedOnlineApi: SeparatedOnlineApi
    ) {}
    
    public get(): Observable<IOnline> {
        return this.separatedOnlineApi.get();
    }
}
