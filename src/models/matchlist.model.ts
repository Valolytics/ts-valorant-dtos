export class MatchlistEntry {
    matchId: string;
    gameStartTimeMillis: number;
    gameStartTime: Date;
    queueId: string;

    constructor(matchId: string, gameStartTimeMillis: number, queueId: string) {
        this.matchId = matchId;
        this.gameStartTimeMillis = gameStartTimeMillis;
        this.gameStartTime = new Date(gameStartTimeMillis);
        this.queueId = queueId;
    }
}

export class Matchlist {
    puuid: string;
    history: MatchlistEntry[];

    constructor(puuid: string, history: MatchlistEntry[]) {
        this.puuid = puuid;
        this.history = [];
        for (let entry of history) {
            this.history.push(new MatchlistEntry(entry.matchId, entry.gameStartTimeMillis, entry.queueId));
        }
    }
}