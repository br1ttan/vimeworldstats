import { IPlayer } from "./player.interface";

export interface IPlayerStatistic {
    readonly stats: IStats,
    readonly user: IPlayer,
}

interface IStats {
    readonly ANN: ANN;
    readonly  BB: BB;
    readonly BP: BP;
    readonly BW: BW;
    readonly BWT: BWT;
    readonly CP: CP;
    readonly DR: DR;
    readonly DUELS: DUELS;
    readonly GG: GG;
    readonly HG: HG;
    readonly KPVP: KPVP;
    readonly MW: MW;
    readonly PRISON: PRISON;
    readonly SW: SW;
    readonly ARC: ARC;
    readonly BRIDGE: BRIDGE;
    readonly JUMPLEAGUE: JUMPLEAGUE;
    readonly MURDER: MURDER;
    readonly SHEEP: SHEEP;
    readonly TURFWARS: TURFWARS;
    readonly TNTTAG: TNTTAG;
    readonly TNTRUN: TNTRUN;
    readonly LUCKYWARS: LUCKYWARS;
    readonly ZOMBIECLAUS: ZOMBIECLAUS;
    readonly HIDE: HIDE;
    readonly SPEEDBUILDERS: SPEEDBUILDERS;
    readonly FALLGUYS: FALLGUYS;
    readonly TEAMFORTRESS: TEAMFORTRESS;
    readonly EGGWARS: EGGWARS;
}

interface Global {
    readonly kills: number;
    readonly bowkills: number;
    readonly wood: number;
    readonly ores: number;
    readonly nexus: number;
    readonly digged: number;
}

interface Monthly {
    readonly kills: number;
    readonly bowkills: number;
    readonly wood: number;
    readonly ores: number;
    readonly nexus: number;
    readonly digged: number;
}

interface Season {
    readonly monthly: Monthly;
}

interface ANN {
    readonly global: Global;
    readonly season: Season;
}

interface Global2 {
    readonly games: number;
    readonly wins: number;
}

interface Monthly2 {
    readonly games: number;
    readonly wins: number;
}

interface Season2 {
    readonly monthly: Monthly2;
}

interface BB {
    readonly global: Global2;
    readonly season: Season2;
}

interface Global3 {
    readonly games: number;
    readonly  wins: number;
    readonly levels: number;
}

interface Monthly3 {
    readonly games: number;
    readonly wins: number;
    readonly levels: number;
}

interface Season3 {
    readonly monthly: Monthly3;
}

interface BP {
    readonly global: Global3;
    readonly season: Season3;
}

interface Global4 {
    readonly kills: number;
    readonly deaths: number;
    readonly games: number;
    readonly wins: number;
    readonly bedBreaked: number;
}

interface Monthly4 {
    readonly kills: number;
    readonly deaths: number;
    readonly games: number;
    readonly wins: number;
    readonly bedBreaked: number;
}

interface Season4 {
    readonly monthly: Monthly4;
}

interface BW {
    readonly global: Global4;
    readonly season: Season4;
}

interface Global5 {
    readonly kills: number;
    readonly deaths: number;
    readonly games: number;
    readonly wins: number;
    readonly bedBreaked: number;
    readonly spent_coins: number;
}

interface Monthly5 {
    readonly kills: number;
    readonly deaths: number;
    readonly games: number;
    readonly wins: number;
    readonly bedBreaked: number;
    readonly spent_coins: number;
}

interface Season5 {
    readonly monthly: Monthly5;
}

interface BWT {
    readonly global: Global5;
    readonly season: Season5;
}

interface Global6 {
    readonly kills: number;
    readonly deaths: number;
    readonly games: number;
    readonly wins: number;
    readonly resourcePointsBreaked: number;
}

interface Monthly6 {
    kills: number;
    deaths: number;
    games: number;
    wins: number;
    resourcePointsBreaked: number;
}

interface Season6 {
    monthly: Monthly6;
}

interface CP {
    global: Global6;
    season: Season6;
}

interface Global7 {
    games: number;
    wins: number;
}

interface Monthly7 {
    games: number;
    wins: number;
}

interface Season7 {
    monthly: Monthly7;
}

interface DR {
    global: Global7;
    season: Season7;
}

interface Global8 {
    solo_wins: number;
    solo_games: number;
    team_wins: number;
    team_games: number;
    ranked_games: number;
    ranked_wins: number;
    total_wins: number;
    total_games: number;
    wins_classic: number;
    wins_bow: number;
    wins_op: number;
    wins_potion: number;
    wins_uhc: number;
    wins_bwh: number;
    maxstrike: number;
}

interface Monthly8 {
    solo_wins: number;
    solo_games: number;
    team_wins: number;
    team_games: number;
    ranked_games: number;
    ranked_wins: number;
    total_wins: number;
    total_games: number;
    wins_classic: number;
    wins_bow: number;
    wins_op: number;
    wins_potion: number;
    wins_uhc: number;
    wins_bwh: number;
    rate: number;
    max_rate: number;
}

interface Season8 {
    monthly: Monthly8;
}

interface DUELS {
    global: Global8;
    season: Season8;
}

interface Global9 {
    kills: number;
    wins: number;
    games: number;
    levels: number;
}

interface Monthly9 {
    kills: number;
    wins: number;
    games: number;
    levels: number;
}

interface Season9 {
    monthly: Monthly9;
}

interface GG {
    global: Global9;
    season: Season9;
}

interface Global10 {
    kills: number;
    wins: number;
    games: number;
}

interface Monthly10 {
    kills: number;
    wins: number;
    games: number;
}

interface Season10 {
    monthly: Monthly10;
}

interface HG {
    global: Global10;
    season: Season10;
}

interface Global11 {
    kills: number;
    deaths: number;
    points: number;
}

interface Monthly11 {
    kills: number;
    deaths: number;
}

interface Season11 {
    monthly: Monthly11;
}

interface KPVP {
    global: Global11;
    season: Season11;
}

interface Global12 {
    games: number;
    wins: number;
    mobsKilled: number;
    mobsSended: number;
    maxIncome: number;
}

interface Monthly12 {
    games: number;
    wins: number;
    mobsKilled: number;
    mobsSended: number;
}

interface Season12 {
    monthly: Monthly12;
}

interface MW {
    global: Global12;
    season: Season12;
}

interface Global13 {
    total_blocks: number;
    earned_money: number;
    kills: number;
    deaths: number;
    mobs: number;
    blocks: any;
}


interface Manual {
    total_blocks: number;
    earned_money: number;
    kills: number;
    deaths: number;
    mobs: number;
    blocks: any;
}

interface Season13 {
    manual: Manual;
}

interface PRISON {
    global: Global13;
    season: Season13;
}

interface Global14 {
    wins: number;
    games: number;
    kills: number;
    deaths: number;
    arrowsFired: number;
    blocksBroken: number;
    blocksPlaced: number;
    currentWinStreak: number;
    winStreak: number;
}

interface Monthly13 {
    wins: number;
    games: number;
    kills: number;
    deaths: number;
    arrowsFired: number;
    blocksBroken: number;
    blocksPlaced: number;
}

interface Season14 {
    monthly: Monthly13;
}

interface SW {
    global: Global14;
    season: Season14;
}

interface Global15 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
}

interface Monthly14 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
}

interface Season15 {
    monthly: Monthly14;
}

interface ARC {
    global: Global15;
    season: Season15;
}

interface Global16 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    points: number;
}

interface BRIDGE {
    global: Global16;
}

interface Global17 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    checkpoints: number;
}

interface JUMPLEAGUE {
    global: Global17;
}

interface Global18 {
    games: number;
    total_wins: number;
    wins_as_innocent: number;
    wins_as_maniac: number;
    wins_as_detective: number;
    kills: number;
}

interface MURDER {
    global: Global18;
}

interface Global19 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
}

interface SHEEP {
    global: Global19;
}

interface Global20 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
}

interface TURFWARS {
    global: Global20;
}

interface Global21 {
    games: number;
    wins: number;
    kills: number;
}

interface TNTTAG {
    global: Global21;
}

interface Global22 {
    games: number;
    wins: number;
    broken_blocks: number;
}

interface TNTRUN {
    global: Global22;
}

interface Global23 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    lucky_blocks: number;
}

interface LUCKYWARS {
    global: Global23;
}

interface Global24 {
    games: number;
    wins: number;
    kills: number;
    gifts: number;
}

interface ZOMBIECLAUS {
    global: Global24;
}

interface Global25 {
    games: number;
    total_wins: number;
    wins_as_seeker: number;
    wins_as_hider: number;
    kills: number;
}

interface HIDE {
    global: Global25;
}

interface Global26 {
    games: number;
    wins: number;
}

interface SPEEDBUILDERS {
    global: Global26;
}

interface Global27 {
    games: number;
    wins: number;
}

interface FALLGUYS {
    global: Global27;
}

interface Global28 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
}

interface TEAMFORTRESS {
    global: Global28;
}

interface Global29 {
    games: number;
    wins: number;
    kills: number;
    deaths: number;
    assists: number;
    monsters: number;
}

interface EGGWARS {
    global: Global29;
}
