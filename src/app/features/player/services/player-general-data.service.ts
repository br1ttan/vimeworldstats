import { Injectable } from '@angular/core'
import { PlayerService } from './player.service';
import { Observable, map, switchMap, forkJoin } from 'rxjs';
import { IPlayerGeneralData } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class PlayerGeneralDataService {
    constructor(
        private readonly playerService: PlayerService
    ) { }

    public get(nickname: string): Observable<IPlayerGeneralData> {
        return this.playerService.getByNickname(nickname)
            .pipe(
                map((player) => player[0].id),
                switchMap((id) => forkJoin({
                    friends: this.playerService.getFriendsById(id),
                    stats: this.playerService.getStatisticById(id),
                    matchesList: this.playerService.getMatchesById(id),
                    status: this.playerService.getStatusById(id)
                }))
            )
    }
}
