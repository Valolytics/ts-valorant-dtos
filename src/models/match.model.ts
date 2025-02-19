import { AGENTS, COMPETITIVE_TIERS, GEARS, PLAYER_CARDS, PLAYER_TITLES, WEAPONS } from "../services/dtos.service.js";
import { Ability, Agent } from "./agent.model.js";
import { PlayerCard } from "./playerCard.model.js";
import { PlayerTitle } from "./playerTitle.model.js";
import { Tier } from "./competitiveTier.model.js";
import { MapDto } from "./map.model.js";
import { Weapon } from "./weapon.model.js";
import { Gear } from "./gear.model.js";
import { NormalizedLocation } from "./location.model.js";

export class PremierMatchInfo {
    premierSeasonId: string | null;
    premierEventId: string | null;

    constructor(data: any) {
        if (data === null || data === undefined) {
            this.premierSeasonId = null;
            this.premierEventId = null;
        } else {
            this.premierSeasonId = data.premierSeasonId;
            this.premierEventId = data.premierEventId;
        }
    }
}

export class MatchInfo {
    matchId: string;
    mapId: string;
    gameVersion: string;
    gameLengthMillis: number;
    region: string;
    gameStartMillis: number;
    provisioningFlowId: string;
    isCompleted: boolean;
    customGameName: string;
    queueId: string;
    gameMode: string;
    isRanked: boolean;
    seasonId: string;
    premierMatchInfo?: PremierMatchInfo;
    map: MapDto | null;

    constructor(data: any) {
        this.matchId = data.matchId;
        this.mapId = data.mapId;
        this.gameVersion = data.gameVersion;
        this.gameLengthMillis = data.gameLengthMillis;
        this.region = data.region;
        this.gameStartMillis = data.gameStartMillis;
        this.provisioningFlowId = data.provisioningFlowId;
        this.isCompleted = data.isCompleted;
        this.customGameName = data.customGameName;
        this.queueId = data.queueId;
        this.gameMode = data.gameMode;
        this.isRanked = data.isRanked;
        this.seasonId = data.seasonId;
        this.premierMatchInfo = new PremierMatchInfo(data.premierMatchInfo);
        this.map = MapDto.getMap(data.mapId) ?? null;
    }

    toJSON() {
        return {
            matchId: this.matchId,
            mapId: this.mapId,
            gameVersion: this.gameVersion,
            gameLengthMillis: this.gameLengthMillis,
            region: this.region,
            gameStartMillis: this.gameStartMillis,
            provisioningFlowId: this.provisioningFlowId,
            isCompleted: this.isCompleted,
            customGameName: this.customGameName,
            queueId: this.queueId,
            gameMode: this.gameMode,
            isRanked: this.isRanked,
            seasonId: this.seasonId,
            premierMatchInfo: this.premierMatchInfo,
            map: this.map?.displayName,
        }
    }
}

export class AbilityCasts {
    grenadeCasts: number;
    ability1Casts: number;
    ability2Casts: number;
    ultimateCasts: number;

    constructor(data: any) {
        this.grenadeCasts = data.grenadeCasts;
        this.ability1Casts = data.ability1Casts;
        this.ability2Casts = data.ability2Casts;
        this.ultimateCasts = data.ultimateCasts;
    }
}

export class PlayerStats {
    score: number;
    roundsPlayed: number;
    kills: number;
    deaths: number;
    assists: number;
    playtimeMillis: number;
    abilityCasts: AbilityCasts | null;
    vlrRating: number | null;
    vlrRating2: number | null;

    constructor(data: any) {
        this.score = data.score;
        this.roundsPlayed = data.roundsPlayed;
        this.kills = data.kills;
        this.deaths = data.deaths;
        this.assists = data.assists;
        this.playtimeMillis = data.playtimeMillis;
        this.abilityCasts = data.abilityCasts ? new AbilityCasts(data.abilityCasts) : null;
        this.vlrRating = data.vlrRating;
        this.vlrRating2 = data.vlrRating2;
    }

    toJSON() {
        return {
            score: this.score,
            roundsPlayed: this.roundsPlayed,
            kills: this.kills,
            deaths: this.deaths,
            assists: this.assists,
            playtimeMillis: this.playtimeMillis,
            abilityCasts: this.abilityCasts,
            vlrRating: this.vlrRating,
            vlrRating2: this.vlrRating2
        }
    }
}

export class Player {
    puuid: string;
    gameName: string;
    tagLine: string;
    team: Team | null;
    partyId: string;
    agent: Agent | null;
    stats: PlayerStats | null;
    competitiveTier: Tier;
    isObserver: boolean;
    playerCard: PlayerCard;
    playerTitle: PlayerTitle;
    accountLevel?: number;

    constructor(data: any, teams: { [teamId: string]: Team }) {
        this.puuid = data.puuid;
        this.gameName = data.gameName;
        this.tagLine = data.tagLine;
        this.team = teams[data.teamId] ?? null;
        if (data.teamId !== 'Neutral') {
            teams[data.teamId].players.push(this);
        }
        this.partyId = data.partyId;
        this.agent = data.characterId ? AGENTS[data.characterId] : null;
        this.stats = data.stats ? new PlayerStats(data.stats) : null;
        this.competitiveTier = Object.values(COMPETITIVE_TIERS)[Object.keys(COMPETITIVE_TIERS).length - 1].tiers[data.competitiveTier];
        this.isObserver = data.isObserver;
        this.playerCard = PLAYER_CARDS[data.playerCard];
        this.playerTitle = PLAYER_TITLES[data.playerTitle] ?? null;
        this.accountLevel = data.accountLevel;
    }

    getPlayerRoundStats(round: Round): PlayerRoundStats | null {
        return round.playerStats.find(playerStats => playerStats.player.puuid === this.puuid) ?? null;
    }

    toJSON() {
        return {
            puuid: this.puuid,
            gameName: this.gameName,
            tagLine: this.tagLine,
            teamId: this.team?.teamId ?? 'Neutral',
            partyId: this.partyId,
            characterId: this.agent?.uuid ?? null,
            stats: this.stats?.toJSON() ?? null,
            competitiveTier: this.competitiveTier.tier,
            isObserver: this.isObserver,
            playerCard: this.playerCard.uuid,
            playerTitle: this.playerTitle?.uuid ?? '',
            accountLevel: this.accountLevel,
        }
    }
}

export class Coach {
    puuid: string;
    team: Team | null;

    constructor(data: any, teams: { [teamId: string]: Team }) {
        this.puuid = data.puuid;
        this.team = teams[data.teamId];
    }

    toJSON() {
        return {
            puuid: this.puuid,
            teamId: this.team?.teamId,
        }
    }
}

export enum Side {
    ATTACK = 'Attack',
    DEFENSE = 'Defense',
}

export class Team {
    teamId: string;
    won: boolean;
    roundsPlayed: number;
    roundsWon: number;
    numPoints: number;
    players: Player[];

    constructor(data: any) {
        this.teamId = data.teamId;
        this.won = data.won;
        this.roundsPlayed = data.roundsPlayed;
        this.roundsWon = data.roundsWon;
        this.numPoints = data.numPoints;
        this.players = [];
    }

    side(roundNum: number): Side {
        if (roundNum < 12 || (roundNum >= 24 && (roundNum % 2 === 0))) {
            return this.teamId === 'Red' ? Side.ATTACK : Side.DEFENSE;
        } else {
            return this.teamId === 'Red' ? Side.DEFENSE : Side.ATTACK;
        }
    }

    toJSON() {
        return {
            teamId: this.teamId,
            won: this.won,
            roundsPlayed: this.roundsPlayed,
            roundsWon: this.roundsWon,
            numPoints: this.numPoints
        }
    }
}

export class PlayerLocation {
    player: Player;
    viewRadians: number;
    location: NormalizedLocation;

    constructor(data: any, players: { [puuid: string]: Player }, map: MapDto) {
        this.player = players[data.puuid];
        this.viewRadians = data.viewRadians;
        this.location = new NormalizedLocation(data.location, map);
    }

    toJSON() {
        return {
            puuid: this.player.puuid,
            viewRadians: this.viewRadians,
            location: this.location.toJSON(),
        }
    }
}

export class FinishingDamage {
    damageType: 'Ability' | 'Weapon' | 'Bomb';
    damageItem: Ability | Weapon | null;
    isSecondaryFireMode: boolean;

    constructor(data: any, killer: Player) {
        if (data.damageItem?.toLowerCase() === '856d9a7e-4b06-dc37-15dc-9d809c37cb90') { // Chamber: Headhunter
            data.damageType = 'Ability';
            data.damageItem = 'Ability1';
        } else if (data.damageItem?.toLowerCase() === '39099fb5-4293-def4-1e09-2e9080ce7456') { // Chamber: Tour De Force
            data.damageType = 'Ability';
            data.damageItem = 'Ultimate';
        } else if (data.damageItem?.toLowerCase() === '95336ae4-45d4-1032-cfaf-6bad01910607') { // Neon: Overdrive
            data.damageType = 'Ability';
            data.damageItem = 'Ultimate';
        }
        this.damageType = data.damageType === '' ? 'Bomb' : data.damageType;
        this.damageItem = data.damageType === 'Ability' ? (killer.agent?.abilities[data.damageItem === 'GrenadeAbility' ? 'Grenade' : data.damageItem] ?? null)
            : ((data.damageType === 'Weapon' && data.damageItem !== '') ? WEAPONS[data.damageItem?.toLowerCase()] : null);
        this.isSecondaryFireMode = data.isSecondaryFireMode;
    }

    toJSON() {
        return {
            damageType: this.damageType,
            damageItem: this.damageItem instanceof Ability ? (this.damageItem.slot === 'Grenade' ? 'GrenadeAbility' : this.damageItem.slot) : (this.damageItem instanceof Weapon ? this.damageItem.uuid.toUpperCase() : ''),
            isSecondaryFireMode: this.isSecondaryFireMode,
        };
    }
}

export class Kill {
    timeSinceGameStartMillis: number;
    timeSinceRoundStartMillis: number;
    killer: Player;
    victim: Player;
    victimLocation: NormalizedLocation;
    assistants: Player[];
    playerLocations: {
        [puuid: string]: PlayerLocation;
    };
    finishingDamage: FinishingDamage;

    constructor(data: any, players: { [puuid: string]: Player }, map: MapDto) {
        this.timeSinceGameStartMillis = data.timeSinceGameStartMillis;
        this.timeSinceRoundStartMillis = data.timeSinceRoundStartMillis;
        this.killer = players[data.killer];
        this.victim = players[data.victim];
        this.victimLocation = new NormalizedLocation(data.victimLocation, map);
        this.assistants = data.assistants.map((assistant: string) => players[assistant]);
        this.playerLocations = {};
        data.playerLocations.forEach((playerLocation: any) => {
            this.playerLocations[playerLocation.puuid] = new PlayerLocation(playerLocation, players, map);
        });
        this.finishingDamage = new FinishingDamage(data.finishingDamage, players[data.killer]);
    }

    toJSON() {
        return {
            timeSinceGameStartMillis: this.timeSinceGameStartMillis,
            timeSinceRoundStartMillis: this.timeSinceRoundStartMillis,
            killer: this.killer.puuid,
            victim: this.victim.puuid,
            victimLocation: this.victimLocation.toJSON(),
            assistants: this.assistants.map(assistant => assistant.puuid),
            playerLocations: Object.values(this.playerLocations).map(playerLocation => playerLocation.toJSON()),
            finishingDamage: this.finishingDamage.toJSON(),
        }
    }
}

export class Damage {
    receiver: Player;
    damage: number;
    headshots: number;
    bodyshots: number;
    legshots: number;

    constructor(data: any, players: { [puuid: string]: Player }) {
        this.receiver = players[data.receiver];
        this.damage = data.damage;
        this.headshots = data.headshots;
        this.bodyshots = data.bodyshots;
        this.legshots = data.legshots;
    }

    toJSON() {
        return {
            receiver: this.receiver.puuid,
            damage: this.damage,
            legshots: this.legshots,
            bodyshots: this.bodyshots,
            headshots: this.headshots,
        }
    }
}

export class Economy {
    loadoutValue: number;
    weapon: Weapon | null;
    armor: Gear | null;
    remaining: number;
    spent: number;

    constructor(data: any) {
        this.loadoutValue = data.loadoutValue;
        this.weapon = data.weapon !== '' ? WEAPONS[data.weapon.toLowerCase()] : null;
        this.armor = data.armor !== '' ? GEARS[data.armor.toLowerCase()] : null;
        this.remaining = data.remaining;
        this.spent = data.spent;
    }

    toJSON() {
        return {
            loadoutValue: this.loadoutValue,
            weapon: this.weapon?.uuid.toUpperCase() ?? '',
            armor: this.armor?.uuid.toUpperCase() ?? '',
            remaining: this.remaining,
            spent: this.spent,
        }
    }
}

export class AbilityEffects {
    grenadeEffects: string | null;
    ability1Effects: string | null;
    ability2Effects: string | null;
    ultimateEffects: string | null;

    constructor(data: any) {
        this.grenadeEffects = data.grenadeEffects;
        this.ability1Effects = data.ability1Effects;
        this.ability2Effects = data.ability2Effects;
        this.ultimateEffects = data.ultimateEffects;
    }
}

export class PlayerRoundStats {
    player: Player;
    kills: Kill[];
    damage: Damage[];
    score: number;
    economy: Economy;
    ability: AbilityEffects;

    constructor(data: any, players: { [puuid: string]: Player }, map: MapDto) {
        this.player = players[data.puuid];
        this.kills = [];
        data.kills.forEach((kill: any) => {
            this.kills.push(new Kill(kill, players, map));
        });
        this.damage = [];
        data.damage.forEach((damage: any) => {
            this.damage.push(new Damage(damage, players));
        });
        this.score = data.score;
        this.economy = new Economy(data.economy);
        this.ability = new AbilityEffects(data.ability);
    }

    toJSON() {
        return {
            puuid: this.player.puuid,
            kills: this.kills.map(kill => kill.toJSON()),
            damage: this.damage.map(damage => damage.toJSON()),
            score: this.score,
            economy: this.economy.toJSON(),
            ability: this.ability,
        }
    }
}

export class Round {
    roundNum: number;
    roundResult: string;
    roundCeremony: string;
    winningTeam: Team;
    bombPlanter: Player | null;
    bombDefuser: Player | null;
    plantRoundTime: number | null;
    plantPlayerLocations: {
        [puuid: string]: PlayerLocation;
    } | null;
    plantLocation: NormalizedLocation | null;
    plantSite: string | null;
    defuseRoundTime: number | null;
    defusePlayerLocations: {
        [puuid: string]: PlayerLocation;
    } | null;
    defuseLocation: NormalizedLocation | null;
    playerStats: PlayerRoundStats[];
    roundResultCode: string;

    constructor(data: any, players: { [puuid: string]: Player }, teams: { [teamId: string]: Team }, map: MapDto) {
        this.roundNum = data.roundNum;
        this.roundResult = data.roundResult;
        this.roundCeremony = data.roundCeremony;
        this.winningTeam = teams[data.winningTeam];
        this.bombPlanter = players[data.bombPlanter];
        this.bombDefuser = players[data.bombDefuser];
        this.plantRoundTime = data.plantRoundTime;
        if (data.plantPlayerLocations) {
            this.plantPlayerLocations = {};
            data.plantPlayerLocations.forEach((plantPlayerLocation: any) => {
                this.plantPlayerLocations![plantPlayerLocation.puuid] = new PlayerLocation(plantPlayerLocation, players, map);
            });
        } else {
            this.plantPlayerLocations = null;
        }
        this.plantLocation = new NormalizedLocation(data.plantLocation, map);
        this.plantSite = data.plantSite;
        this.defuseRoundTime = data.defuseRoundTime;
        if (data.defusePlayerLocations) {
            this.defusePlayerLocations = {};
            data.defusePlayerLocations.forEach((defusePlayerLocation: any) => {
                this.defusePlayerLocations![defusePlayerLocation.puuid] = new PlayerLocation(defusePlayerLocation, players, map);
            });
        } else {
            this.defusePlayerLocations = null;
        }
        this.defuseLocation = new NormalizedLocation(data.defuseLocation, map);
        this.playerStats = [];
        data.playerStats.forEach((playerStat: any) => {
            this.playerStats.push(new PlayerRoundStats(playerStat, players, map));
        });
        this.roundResultCode = data.roundResultCode;
    }

    isKastRoundFor(puuid: string, kills: Kill[] = []): boolean {
        const playerstats = this.playerStats.find(playerStat => playerStat.player.puuid === puuid);
        if (!playerstats) { return false; }
        if (playerstats.kills.length > 0) {
            return true;
        }
        if (kills.length === 0) {
            kills = this.getKills();
        }
        if (this.didPlayerSurvived(puuid, kills)) {
            return true;
        }
        if (this.hasPlayerAssist(puuid, kills)) {
            return true;
        }
        if (this.gotPlayerTraded(puuid, kills)) {
            return true;
        }
        return false;
    }

    getKills(): Kill[] {
        const kills: Kill[] = [];
        this.playerStats.forEach(player => {
            kills.push(...player.kills);
        });
        return kills.sort((a, b) => a.timeSinceRoundStartMillis - b.timeSinceRoundStartMillis);
    }

    didPlayerSurvived(puuid: string, kills: Kill[] = []): boolean {
        if (kills.length === 0) {
            kills = this.getKills();
        }
        return kills.length > 0 && Object.keys(kills[kills.length - 1].playerLocations).some(p => p === puuid);
    }

    hasPlayerAssist(puuid: string, kills: Kill[] = []): boolean {
        if (kills.length === 0) {
            kills = this.getKills();
        }
        return kills.some(kill => kill.assistants.some(assistant => assistant.puuid === puuid));
    }

    gotPlayerTraded(puuid: string, kills: Kill[] = []): boolean {
        if (kills.length === 0) {
            kills = this.getKills();
        }
        const death = kills.filter(kill => kill.victim.puuid === puuid);
        return kills.some(kill => death?.some(d => d.killer.puuid === kill.victim.puuid && d.timeSinceRoundStartMillis+5000 > kill.timeSinceRoundStartMillis));
    }

    toJSON() {
        return {
            roundNum: this.roundNum,
            roundResult: this.roundResult,
            roundCeremony: this.roundCeremony,
            winningTeam: this.winningTeam.teamId,
            bombPlanter: this.bombPlanter?.puuid ?? null,
            bombDefuser: this.bombDefuser?.puuid ?? null,
            plantRoundTime: this.plantRoundTime,
            plantPlayerLocations: this.plantPlayerLocations ? Object.values(this.plantPlayerLocations).map(plantPlayerLocation => plantPlayerLocation.toJSON()) : null,
            plantLocation: this.plantLocation?.toJSON(),
            plantSite: this.plantSite,
            defuseRoundTime: this.defuseRoundTime,
            defusePlayerLocations: this.defusePlayerLocations ? Object.values(this.defusePlayerLocations).map(defusePlayerLocation => defusePlayerLocation.toJSON()) : null,
            defuseLocation: this.defuseLocation?.toJSON(),
            playerStats: this.playerStats.map(playerStat => playerStat.toJSON()),
            roundResultCode: this.roundResultCode,
        }
    }
}

export class MatchDto {
    matchInfo: MatchInfo;
    players: {
        [puuid: string]: Player;
    };
    observers: {
        [puuid: string]: Player;
    };
    coaches: {
        [puuid: string]: Coach;
    };
    teams: {
        [teamId: string]: Team;
    };
    roundResults: Round[];

    constructor(data: any) {
        this.matchInfo = new MatchInfo(data.matchInfo);
        this.teams = {};
        data.teams.forEach((team: any) => {
            this.teams[team.teamId] = new Team(team);
        });
        
        this.players = {};
        this.observers = {};
        data.players.forEach((player: any) => {
            if (player.isObserver) {
                this.observers[player.puuid] = new Player(player, this.teams);
            } else {
                this.players[player.puuid] = new Player(player, this.teams);
            }
        });
        
        this.coaches = {};
        data.coaches.forEach((coach: any) => {
            this.coaches[coach.puuid] = new Coach(coach, this.teams);
        });
        
        this.roundResults = [];
        const map = MapDto.getMap(data.matchInfo.mapId);
        if (map) {
            data.roundResults.forEach((round: any) => {
                this.roundResults.push(new Round(round, this.players, this.teams, map));
            });
        }
    }

    toJSON() {
        return {
            matchInfo: this.matchInfo.toJSON(),
            players: [
                ...Object.values(this.players).map(player => player.toJSON()),
                ...Object.values(this.observers).map(observer => observer.toJSON())
            ] ,
            coaches: Object.values(this.coaches).map(coach => coach.toJSON()),
            teams: Object.values(this.teams).map(team => team.toJSON()),
            roundResults: this.roundResults.map(round => round.toJSON()),
        }
    }
}

export class Match {
    match_id: string;
    game_start: number;
    map: string | null;
    data: MatchDto;

    constructor(data: MatchDto) {
        this.match_id = data.matchInfo.matchId;
        this.game_start = data.matchInfo.gameStartMillis;
        const mapName: string | undefined = MapDto.getMap(data.matchInfo.mapId)?.displayName;
        if (!mapName) {
            throw new Error('Map not found');
        }
        this.map = mapName;
        this.data = new MatchDto(data);
    }

    toJSON() {
        return {
            match_id: this.match_id,
            game_start: this.game_start,
            map: this.map,
            data: this.data.toJSON(),
        }
    }
}