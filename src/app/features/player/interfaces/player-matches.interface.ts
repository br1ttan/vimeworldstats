import { IPlayer } from "./player.interface";

export interface IPlayerMatches {
    readonly user: IPlayer;
    readonly request: Request;
    readonly matches: Match[];
}

interface Match {
    readonly id: string;
    readonly game: string;
    readonly map: Map;
    readonly date: number;
    readonly duration: number;
    readonly players: number;
    readonly win: boolean;
    readonly state: number;
}

interface Request {
    readonly count: number;
    readonly offset: number;
    readonly size: number;
}

interface Map {
    readonly id: string;
    readonly name: string;
    readonly teams: number;
    readonly playersInTeam: number;
}
