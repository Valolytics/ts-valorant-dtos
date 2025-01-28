import { PlayerCard } from "./playerCard.model";

export class Account {
    puuid: string;
    gameName: string;
    tagLine: string;
    playerCard: string | null;
    region: string | null;

    constructor(puuid: string, gameName: string, tagLine: string, playerCard: string | null = null, region: string | null = null) {
        this.puuid = puuid;
        this.gameName = gameName;
        this.tagLine = tagLine;
        this.playerCard = playerCard;
        this.region = region;
    }
}