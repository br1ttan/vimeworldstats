import { IPlayer } from "./player.interface"

export interface IPlayerSession {
    readonly user: IPlayer,
    readonly online: {
        readonly value: boolean,
        readonly message: string,
        readonly game: string
    }
}
