import { IFriendsOfPlayer } from "./player-friends.interface";
import { IPlayerMatches } from "./player-matches.interface";
import { IPlayerSession } from "./player-session.interface";
import { IPlayerStatistic } from "./player-statistic.interface";

export interface IPlayerGeneralData {
    readonly friends: IFriendsOfPlayer,
    readonly stats: IPlayerStatistic,
    readonly matchesList: IPlayerMatches,
    readonly status: IPlayerSession
}
