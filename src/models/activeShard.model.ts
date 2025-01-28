export class ActiveShard {
    puuid: string;
    game: string;
    activeShard: string;

    constructor(puuid: string, game: string, activeShard: string) {
        this.puuid = puuid;
        this.game = game;
        this.activeShard = activeShard;
    }
}