import { Role } from '../models/role.model.js';
import { Agent } from '../models/agent.model.js';
import { Buddy } from '../models/buddy.model.js';
import { Bundle } from '../models/bundle.model.js';
import { Ceremony } from '../models/ceremony.model.js';
import { CompetitiveTier } from '../models/competitiveTier.model.js';
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