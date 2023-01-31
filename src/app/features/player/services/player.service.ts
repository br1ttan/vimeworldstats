import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { PlayerApi } from "../api";
import { IFriendsOfPlayer, IPlayer, IPlayerMatches, IPlayerSession, IPlayerStatistic } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    constructor(
        private readonly playerApi: PlayerApi
    ) { }

    public getByNickname(nickname: string): Observable<IPlayer[]> {
        return this.playerApi.getByNickname(nickname);
    }
    
    public getById(id: number): Observable<IPlayer> {
        return this.playerApi.getById(id);
    }
    
    public getFriendsById(id: number): Observable<IFriendsOfPlayer> {
        return this.playerApi.getFriendsById(id);
    }
    
    public getStatusById(id: number): Observable<IPlayerSession> {
        return this.playerApi.getStatusById(id);
    }
    
    public getStatisticById(id: number): Observable<IPlayerStatistic> {
        return this.playerApi.getStatisticById(id);
    }
    
    public getMatchesById(id: number): Observable<IPlayerMatches> {
        return this.playerApi.getMatchesById(id);
    }
}
