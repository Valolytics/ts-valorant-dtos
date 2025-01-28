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

export interface Themes { [uuid: string]: Theme; }
export interface Roles { [uuid: string]: Role; }
export interface Agents { [uuid: string]: Agent; }
export interface Buddies { [uuid: string]: Buddy; }
export interface Bundles { [uuid: string]: Bundle; }
export interface Ceremonies { [uuid: string]: Ceremony; }
export interface CompetitiveTiers { [uuid: string]: CompetitiveTier; }
export interface ContentTiers { [uuid: string]: ContentTier; }
export interface Contracts { [uuid: string]: Contract; }
export interface Currencies { [uuid: string]: Currency; }
export interface Events { [uuid: string]: EventDto; }
export interface GameModes { [uuid: string]: GameMode; }
export interface Gears { [uuid: string]: Gear; }
export interface LevelBorders { [uuid: string]: LevelBorder; }
export interface Maps { [uuid: string]: MapDto; }
export interface PlayerCards { [uuid: string]: PlayerCard; }
export interface PlayerTitles { [uuid: string]: PlayerTitle; }
export interface Seasons { [uuid: string]: Season; }
export interface Sprays { [uuid: string]: Spray; }
export interface Weapons { [uuid: string]: Weapon; }

export const THEMES: Themes = mapToInstances(JsonThemes, Theme) as Themes;
export const ROLES: Roles = mapToInstances(JsonRoles, Role) as Roles;
export const AGENTS: Agents = mapToInstances(JsonAgents, Agent) as Agents;
export const BUDDIES: Buddies = mapToInstances(JsonBuddies, Buddy) as Buddies;
export const BUNDLES: Bundles = mapToInstances(JsonBundles, Bundle) as Bundles;
export const CEREMONIES: Ceremonies = mapToInstances(JsonCeremonies, Ceremony) as Ceremonies;
export const COMPETITIVE_TIERS: CompetitiveTiers = mapToInstances(JsonCompetitiveTiers, CompetitiveTier) as CompetitiveTiers;
export const CONTENT_TIERS: ContentTiers = mapToInstances(JsonContentTiers, ContentTier) as ContentTiers;
export const CONTRACTS: Contracts = mapToInstances(JsonContracts, Contract) as Contracts;
export const CURRENCIES: Currencies = mapToInstances(JsonCurrencies, Currency) as Currencies;
export const EVENTS: Events = mapToInstances(JsonEvents, EventDto) as Events;
export const GAME_MODES: GameModes = mapToInstances(JsonGameModes, GameMode) as GameModes;
export const GEARS: Gears = mapToInstances(JsonGears, Gear) as Gears;
export const LEVEL_BORDERS: LevelBorders = mapToInstances(JsonLevelBorders, LevelBorder) as LevelBorders;
export const MAPS: Maps = mapToInstances(JsonMaps, MapDto) as Maps;
export const PLAYER_CARDS: PlayerCards = mapToInstances(JsonPlayerCards, PlayerCard) as PlayerCards;
export const PLAYER_TITLES: PlayerTitles = mapToInstances(JsonPlayerTitles, PlayerTitle) as PlayerTitles;
export const SEASONS: Seasons = mapToInstances(JsonSeasons, Season) as Seasons;
export const SPRAYS: Sprays = mapToInstances(JsonSprays, Spray) as Sprays;
export const WEAPONS: Weapons = mapToInstances(JsonWeapons, Weapon) as Weapons;

function mapToInstances<T, U>(jsonObject: { [uuid: string]: T }, constructor: new (data: T) => U): { [uuid: string]: U } {
    return Object.fromEntries(
        Object.entries(jsonObject).map(([uuid, item]) => [uuid, new constructor(item)])
    );
}