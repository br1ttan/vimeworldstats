export interface IPlayer {
    readonly id: number,
    readonly username: string,
    readonly level: number,
    readonly levelPercentage: number,
    readonly rank: string,
    readonly playedSeconds: number,
    readonly lastSeen: number,
    readonly guild: IGuild | null,
}

export interface IGuild {
    readonly id: number,
    readonly name: string,
    readonly tag: unknown,
    readonly color: string,
    readonly level: number,
    readonly levelPercentage: number,
    readonly avatar_url: string
}
