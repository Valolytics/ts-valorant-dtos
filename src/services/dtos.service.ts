import { Role } from '../models/role.model.js';
import { Agent } from '../models/agent.model.js';
import { Buddy } from '../models/buddy.model.js';
import { Bundle } from '../models/bundle.model.js';
import { Ceremony } from '../models/ceremony.model.js';
import { CompetitiveTier, Tier } from '../models/competitiveTier.model.js';
import { ContentTier } from '../models/contentTier.model.js';
import { Contract } from '../models/contract.model.js';
import { Currency } from '../models/currency.model.js';
import { EventDto } from '../models/event.model.js';
import { GameMode } from '../models/gameMode.model.js';
import { Gear } from '../models/gear.model.js';
import { LevelBorder } from '../models/levelBorder.model.js';
import { MapDto } from '../models/map.model.js';
import { PlayerCard } from '../models/playerCard.model.js';
import { PlayerTitle } from '../models/playerTitle.model.js';
import { Season } from '../models/season.model.js';
import { Spray } from '../models/spray.model.js';
import { Weapon } from '../models/weapon.model.js';
import { Theme } from '../models/theme.model.js';

import JsonThemes from '../dtos/themes.json';
import JsonRoles from '../dtos/roles.json';
import JsonAgents from '../dtos/agents.json';
import JsonBuddies from '../dtos/buddies.json';
import JsonBundles from '../dtos/bundles.json';
import JsonCeremonies from '../dtos/ceremonies.json';
import JsonCompetitiveTiers from '../dtos/competitiveTiers.json';
import JsonContentTiers from '../dtos/contentTiers.json';
import JsonContracts from '../dtos/contracts.json';
import JsonCurrencies from '../dtos/currencies.json';
import JsonEvents from '../dtos/events.json';
import JsonGameModes from '../dtos/gameModes.json';
import JsonGears from '../dtos/gears.json';
import JsonLevelBorders from '../dtos/levelBorders.json';
import JsonMaps from '../dtos/maps.json';
import JsonPlayerCards from '../dtos/playerCards.json';
import JsonPlayerTitles from '../dtos/playerTitles.json';
import JsonSeasons from '../dtos/seasons.json';
import JsonSprays from '../dtos/sprays.json';
import JsonWeapons from '../dtos/weapons.json';

export class Collection<T> {
    protected items: { [uuid: string]: T };
  
    constructor(json: any, Constructor: new (data: any) => T) {
        this.items = mapToInstances(json, Constructor);
    }
  
    getByProperty<K extends keyof T>(property: K, value: T[K]): T | undefined {
        return Object.values(this.items).find(item => item[property] === value);
    }
  
    get all(): { [uuid: string]: T } {
        return this.items;
    }
}

export class Themes extends Collection<Theme> {
    constructor(json: any) {
        super(json, Theme);
    }
}
export class Roles extends Collection<Role> {
    constructor(json: any) {
        super(json, Role);
    }
}
export class Agents extends Collection<Agent> {
    constructor(json: any) {
        super(json, Agent);
    }

    get astra(): Agent { return this.items["41fb69c1-4189-7b37-f117-bcaf1e96f1bf"]; }
    get breach(): Agent { return this.items["5f8d3a7f-467b-97f3-062c-13acf203c006"]; }
    get brimstone(): Agent { return this.items["9f0d8ba9-4140-b941-57d3-a7ad57c6b417"]; }
    get chamber(): Agent { return this.items["22697a3d-45bf-8dd7-4fec-84a9e28c69d7"]; }
    get clove(): Agent { return this.items["1dbf2edd-4729-0984-3115-daa5eed44993"]; }
    get cypher(): Agent { return this.items["117ed9e3-49f3-6512-3ccf-0cada7e3823b"]; }
    get deadlock(): Agent { return this.items["cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"]; }
    get fade(): Agent { return this.items["dade69b4-4f5a-8528-247b-219e5a1facd6"]; }
    get gekko(): Agent { return this.items["e370fa57-4757-3604-3648-499e1f642d3f"]; }
    get harbor(): Agent { return this.items["95b78ed7-4637-86d9-7e41-71ba8c293152"]; }
    get iso(): Agent { return this.items["0e38b510-41a8-5780-5e8f-568b2a4f2d6c"]; }
    get jett(): Agent { return this.items["add6443a-41bd-e414-f6ad-e58d267f4e95"]; }
    get kayo(): Agent { return this.items["601dbbe7-43ce-be57-2a40-4abd24953621"]; }
    get killjoy(): Agent { return this.items["1e58de9c-4950-5125-93e9-a0aee9f98746"]; }
    get neon(): Agent { return this.items["bb2a4828-46eb-8cd1-e765-15848195d751"]; }
    get omen(): Agent { return this.items["8e253930-4c05-31dd-1b6c-968525494517"]; }
    get phoenix(): Agent { return this.items["eb93336a-449b-9c1b-0a54-a891f7921d69"]; }
    get raze(): Agent { return this.items["f94c3b30-42be-e959-889c-5aa313dba261"]; }
    get reyna(): Agent { return this.items["a3bfb853-43b2-7238-a4f1-ad90e9e46bcc"]; }
    get sage(): Agent { return this.items["569fdd95-4d10-43ab-ca70-79becc718b46"]; }
    get skye(): Agent { return this.items["6f2a04ca-43e0-be17-7f36-b3908627744d"]; }
    get sova(): Agent { return this.items["320b2a48-4d9b-a075-30f1-1f93a9b638fa"]; }
    get tejo(): Agent { return this.items["b444168c-4e35-8076-db47-ef9bf368f384"]; }
    get viper(): Agent { return this.items["707eab51-4836-f488-046a-cda6bf494859"]; }
    get vyse(): Agent { return this.items["efba5359-4016-a1e5-7626-b1ae76895940"]; }
    get waylay(): Agent { return this.items["df1cb487-4902-002e-5c17-d28e83e78588"]; }
    get yoru(): Agent { return this.items["7f94d92c-4234-0a36-9646-3a87eb8b5c89"]; }
}
export class Buddies extends Collection<Buddy> {
    constructor(json: any) {
        super(json, Buddy);
    }
}
export class Bundles extends Collection<Bundle> {
    constructor(json: any) {
        super(json, Bundle);
    }
}
export class Ceremonies extends Collection<Ceremony> {
    constructor(json: any) {
        super(json, Ceremony);
    }
}
export class CompetitiveTiers extends Collection<CompetitiveTier> {
    constructor(json: any) {
        super(json, CompetitiveTier);
    }

    get episode1(): CompetitiveTier { return this.items["564d8e28-c226-3180-6285-e48a390db8b1"]; }
    get episode2(): CompetitiveTier { return this.items["23eb970e-6408-bc0b-3f20-d8fb0e0354ea"]; }
    get episode3(): CompetitiveTier { return this.items["edb72a72-7e6d-6010-9591-7c053bbdbf48"]; }
    get episode4(): CompetitiveTier { return this.items["e4e9a692-288f-63ca-7835-16fbf6234fda"]; }
    get episode5(): CompetitiveTier { return this.items["03621f52-342b-cf4e-4f86-9350a49c6d04"]; }
}
export class ContentTiers extends Collection<ContentTier> {
    constructor(json: any) {
        super(json, ContentTier);
    }
}
export class Contracts extends Collection<Contract> {
    constructor(json: any) {
        super(json, Contract);
    }
}
export class Currencies extends Collection<Currency> {
    constructor(json: any) {
        super(json, Currency);
    }
}
export class Events extends Collection<EventDto> {
    constructor(json: any) {
        super(json, EventDto);
    }
}
export class GameModes extends Collection<GameMode> {
    constructor(json: any) {
        super(json, GameMode);
    }
}
export class Gears extends Collection<Gear> {
    constructor(json: any) {
        super(json, Gear);
    }

    get light(): Gear { return this.items["4dec83d5-4902-9ab3-bed6-a7a390761157"]; }
    get regen(): Gear { return this.items["b1b9086d-41bd-a516-5d29-e3b34a6f1644"]; }
    get heavy(): Gear { return this.items["822bcab2-40a2-324e-c137-e09195ad7692"]; }
}
export class LevelBorders extends Collection<LevelBorder> {
    constructor(json: any) {
        super(json, LevelBorder);
    }
}
export class Maps extends Collection<MapDto> {
    constructor(json: any) {
        super(json, MapDto);
    }

    get abyss(): MapDto { return this.items["224b0a95-48b9-f703-1bd8-67aca101a61f"]; }
    get ascent(): MapDto { return this.items["7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"]; }
    get bind(): MapDto { return this.items["2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"]; }
    get breeze(): MapDto { return this.items["2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"]; }
    get district(): MapDto { return this.items["690b3ed2-4dff-945b-8223-6da834e30d24"]; }
    get drift(): MapDto { return this.items["2c09d728-42d5-30d8-43dc-96a05cc7ee9d"]; }
    get fracture(): MapDto { return this.items["b529448b-4d60-346e-e89e-00a4c527a405"]; }
    get glicth(): MapDto { return this.items["d6336a5a-428f-c591-98db-c8a291159134"]; }
    get haven(): MapDto { return this.items["2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"]; }
    get icebox(): MapDto { return this.items["e2ad5c54-4114-a870-9641-8ea21279579a"]; }
    get kasbah(): MapDto { return this.items["12452a9d-48c3-0b02-e7eb-0381c3520404"]; }
    get lotus(): MapDto { return this.items["2fe4ed3a-450a-948b-6d6b-e89a78e680a9"]; }
    get pearl(): MapDto { return this.items["fd267378-4d1d-484f-ff52-77821ed10dc2"]; }
    get piazza(): MapDto { return this.items["de28aa9b-4cbe-1003-320e-6cb3ec309557"]; }
    get range(): MapDto { return this.items["5914d1e0-40c4-cfdd-6b88-eba06347686c"]; }
    get split(): MapDto { return this.items["d960549e-485c-e861-8d71-aa9d1aed12a2"]; }
    get sunset(): MapDto { return this.items["92584fbe-486a-b1b2-9faa-39b0f486b498"]; }
    get training(): MapDto { return this.items["1f10dab3-4294-3827-fa35-c2aa00213cf3"]; }
}
export class PlayerCards extends Collection<PlayerCard> {
    constructor(json: any) {
        super(json, PlayerCard);
    }

    get default(): PlayerCard { return this.items["9fb348bc-41a0-91ad-8a3e-818035c4e561"]; }
}
export class PlayerTitles extends Collection<PlayerTitle> {
    constructor(json: any) {
        super(json, PlayerTitle);
    }
}
export class Seasons extends Collection<Season> {
    constructor(json: any) {
        super(json, Season);
    }
}
export class Sprays extends Collection<Spray> {
    constructor(json: any) {
        super(json, Spray);
    }
}
export class Weapons extends Collection<Weapon> {
    constructor(json: any) {
        super(json, Weapon);
    }

    get classic(): Weapon { return this.items["29a0cfab-485b-f5d5-779a-b59f85e204a8"]; }
    get shorty(): Weapon { return this.items["42da8ccc-40d5-affc-beec-15aa47b42eda"]; }
    get frenzy(): Weapon { return this.items["44d4e95c-4157-0037-81b2-17841bf2e8e3"]; }
    get ghost(): Weapon { return this.items["1baa85b4-4c70-1284-64bb-6481dfc3bb4e"]; }
    get sheriff(): Weapon { return this.items["e336c6b8-418d-9340-d77f-7a9e4cfe0702"]; }
    get stinger(): Weapon { return this.items["f7e1b454-4ad4-1063-ec0a-159e56b58941"]; }
    get spectre(): Weapon { return this.items["462080d1-4035-2937-7c09-27aa2a5c27a7"]; }
    get bucky(): Weapon { return this.items["910be174-449b-c412-ab22-d0873436b21b"]; }
    get judge(): Weapon { return this.items["ec845bf4-4f79-ddda-a3da-0db3774b2794"]; }
    get bulldog(): Weapon { return this.items["ae3de142-4d85-2547-dd26-4e90bed35cf7"]; }
    get guardian(): Weapon { return this.items["4ade7faa-4cf1-8376-95ef-39884480959b"]; }
    get phantom(): Weapon { return this.items["ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a"]; }
    get vandal(): Weapon { return this.items["9c82e19d-4575-0200-1a81-3eacf00cf872"]; }
    get marshal(): Weapon { return this.items["c4883e50-4494-202c-3ec3-6b8a9284f00b"]; }
    get outlaw(): Weapon { return this.items["5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c"]; }
    get operator(): Weapon { return this.items["a03b24d3-4319-996d-0f8c-94bbfba1dfc7"]; }
    get ares(): Weapon { return this.items["55d8a0f4-4274-ca67-fe2c-06ab45efdf58"]; }
    get odin(): Weapon { return this.items["63e6c2b6-4a8e-869c-3d4c-e38355226584"]; }
    get melee(): Weapon { return this.items["2f59173c-4bed-b6c3-2191-dea9b58be9c7"]; }
}

export const THEMES: Themes = new Themes(JsonThemes);
export const ROLES: Roles = new Roles(JsonRoles);
export const AGENTS: Agents = new Agents(JsonAgents);
export const BUDDIES: Buddies = new Buddies(JsonBuddies);
export const BUNDLES: Bundles = new Bundles(JsonBundles);
export const CEREMONIES: Ceremonies = new Ceremonies(JsonCeremonies);
export const COMPETITIVE_TIERS: CompetitiveTiers = new CompetitiveTiers(JsonCompetitiveTiers);
export const CONTENT_TIERS: ContentTiers = new ContentTiers(JsonContentTiers);
export const CONTRACTS: Contracts = new Contracts(JsonContracts);
export const CURRENCIES: Currencies = new Currencies(JsonCurrencies);
export const EVENTS: Events = new Events(JsonEvents);
export const GAME_MODES: GameModes = new GameModes(JsonGameModes);
export const GEARS: Gears = new Gears(JsonGears);
export const LEVEL_BORDERS: LevelBorders = new LevelBorders(JsonLevelBorders);
export const MAPS: Maps = new Maps(JsonMaps);
export const PLAYER_CARDS: PlayerCards = new PlayerCards(JsonPlayerCards);
export const PLAYER_TITLES: PlayerTitles = new PlayerTitles(JsonPlayerTitles);
export const SEASONS: Seasons = new Seasons(JsonSeasons);
export const SPRAYS: Sprays = new Sprays(JsonSprays);
export const WEAPONS: Weapons = new Weapons(JsonWeapons);

function mapToInstances<T, U>(jsonObject: { [uuid: string]: T }, constructor: new (data: T) => U): { [uuid: string]: U } {
    return Object.fromEntries(
        Object.entries(jsonObject).map(([uuid, item]) => [uuid, new constructor(item)])
    );
}