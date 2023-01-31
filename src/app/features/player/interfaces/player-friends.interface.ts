import { IPlayer } from "./player.interface";

export interface IFriendsOfPlayer {
    readonly friends: IPlayer[],
    readonly user: IPlayer,
}
