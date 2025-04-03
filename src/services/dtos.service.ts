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

    get default(): PlayerCard {
        return this.items["9fb348bc-41a0-91ad-8a3e-818035c4e561"];
    }
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

    get classic(): Weapon {
        return this.items["29a0cfab-485b-f5d5-779a-b59f85e204a8"];
    }
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