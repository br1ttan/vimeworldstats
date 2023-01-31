import { IGuild } from "@features/player"

export interface IAuthResponse {
  readonly owner: {
      readonly id: number,
      readonly username: string,
      readonly level: number,
      readonly levelPercentage: number,
      readonly rank: string,
      readonly playedSeconds: number,
      readonly guild: IGuild
  }
  readonly token: string,
  readonly valid: boolean,
  readonly type: string,
  readonly limit?: number,
}
