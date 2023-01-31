import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { 
    IFriendsOfPlayer, 
    IPlayer, 
    IPlayerMatches, 
    IPlayerSession, 
    IPlayerStatistic 
} from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class PlayerApi {
    private readonly apiParameters = {
        friends: 'friends',
        session: 'session',
        stats: 'stats',
        matches: 'matches'
    }

    constructor(
        private readonly http: HttpClient
    ) { }

    public getByNickname(nickname: string): Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(`${environment.userName}/${nickname}`);
    }
    
    public getById(id: number): Observable<IPlayer> {
        return this.http.get<IPlayer>(`${environment.user}/${id}`);
    }
    
    public getFriendsById(id: number): Observable<IFriendsOfPlayer> {
        return this.http.get<IFriendsOfPlayer>(`${environment.user}/${id}/${this.apiParameters.friends}`);
    }
    
    public getStatusById(id: number): Observable<IPlayerSession> {
        return this.http.get<IPlayerSession>(`${environment.user}/${id}/${this.apiParameters.session}`);
    }
    
    public getStatisticById(id: number): Observable<IPlayerStatistic> {
        return this.http.get<IPlayerStatistic>(`${environment.user}/${id}/${this.apiParameters.stats}`);
    }
    
    public getMatchesById(id: number): Observable<IPlayerMatches> {
        return this.http.get<IPlayerMatches>(`${environment.user}/${id}/${this.apiParameters.matches}`);
    }
}
