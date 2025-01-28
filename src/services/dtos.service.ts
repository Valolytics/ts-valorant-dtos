import axios from 'axios';
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
import { Version } from '../models/version.model.js';

interface Themes { [uuid: string]: Theme; }
interface Roles { [uuid: string]: Role; }
interface Agents { [uuid: string]: Agent; }
interface Buddies { [uuid: string]: Buddy; }
interface Bundles { [uuid: string]: Bundle; }
interface Ceremonies { [uuid: string]: Ceremony; }
interface CompetitiveTiers { [uuid: string]: CompetitiveTier; }
interface ContentTiers { [uuid: string]: ContentTier; }
interface Contracts { [uuid: string]: Contract; }
interface Currencies { [uuid: string]: Currency; }
interface Events { [uuid: string]: EventDto; }
interface GameModes { [uuid: string]: GameMode; }
interface Gears { [uuid: string]: Gear; }
interface LevelBorders { [uuid: string]: LevelBorder; }
interface Maps { [uuid: string]: MapDto; }
interface PlayerCards { [uuid: string]: PlayerCard; }
interface PlayerTitles { [uuid: string]: PlayerTitle; }
interface Seasons { [uuid: string]: Season; }
interface Sprays { [uuid: string]: Spray; }
interface Weapons { [uuid: string]: Weapon; }

let VERSION: Version;
const THEMES: Themes = {}
const ROLES: Roles = {}
const AGENTS: Agents = {}
const BUDDIES: Buddies = {}
const BUNDLES: Bundles = {}
const CEREMONIES: Ceremonies = {}
const COMPETITIVE_TIERS: CompetitiveTiers = {}
const CONTENT_TIERS: ContentTiers = {}
const CONTRACTS: Contracts = {}
const CURRENCIES: Currencies = {}
const EVENTS: Events = {}
const GAME_MODES: GameModes = {}
const GEARS: Gears = {}
const LEVEL_BORDERS: LevelBorders = {}
const MAPS: Maps = {}
const PLAYER_CARDS: PlayerCards = {}
const PLAYER_TITLES: PlayerTitles = {}
const SEASONS: Seasons = {}
const SPRAYS: Sprays = {}
const WEAPONS: Weapons = {}

export type DTOs = {
    THEMES: Themes;
    ROLES: Roles;
    AGENTS: Agents;
    BUDDIES: Buddies;
    BUNDLES: Bundles;
    CEREMONIES: Ceremonies;
    COMPETITIVE_TIERS: CompetitiveTiers;
    CONTENT_TIERS: ContentTiers;
    CONTRACTS: Contracts;
    CURRENCIES: Currencies;
    EVENTS: Events;
    GAME_MODES: GameModes;
    GEARS: Gears;
    LEVEL_BORDERS: LevelBorders;
    MAPS: Maps;
    PLAYER_CARDS: PlayerCards;
    PLAYER_TITLES: PlayerTitles;
    SEASONS: Seasons;
    SPRAYS: Sprays;
    WEAPONS: Weapons;
}

let currentBranch = '';

export async function getDTOs(): Promise<DTOs | undefined> {
    try {
        let versionReponse = await axios.get('https://valorant-api.com/v1/version');
        VERSION = new Version(versionReponse.data.data);
        if (VERSION.branch !== currentBranch) {
            currentBranch = VERSION.branch;

            const themesResponse = await axios.get('https://valorant-api.com/v1/themes');
            themesResponse.data.data.forEach((theme: any) => {
                THEMES[theme.uuid] = new Theme(theme);
            });

            const agentsResponse = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
            agentsResponse.data.data.forEach((agent: any) => {
                ROLES[agent.role.uuid] = new Role(agent.role);
                AGENTS[agent.uuid] = new Agent(agent);
            });

            const buddiesResponse = await axios.get('https://valorant-api.com/v1/buddies');
            buddiesResponse.data.data.forEach((buddy: any) => {
                BUDDIES[buddy.uuid] = new Buddy(buddy);
            });

            const bundlesResponse = await axios.get('https://valorant-api.com/v1/bundles');
            bundlesResponse.data.data.forEach((bundle: any) => {
                BUNDLES[bundle.uuid] = new Bundle(bundle);
            });

            const ceremoniesResponse = await axios.get('https://valorant-api.com/v1/ceremonies');
            ceremoniesResponse.data.data.forEach((ceremony: any) => {
                CEREMONIES[ceremony.uuid] = new Ceremony(ceremony);
            });

            const competitiveTiersResponse = await axios.get('https://valorant-api.com/v1/competitivetiers');
            competitiveTiersResponse.data.data.forEach((tier: any) => {
                COMPETITIVE_TIERS[tier.uuid] = new CompetitiveTier(tier);
            });

            const contentTiersResponse = await axios.get('https://valorant-api.com/v1/contenttiers');
            contentTiersResponse.data.data.forEach((tier: any) => {
                CONTENT_TIERS[tier.uuid] = new ContentTier(tier);
            });

            const contractsResponse = await axios.get('https://valorant-api.com/v1/contracts');
            contractsResponse.data.data.forEach((contract: any) => {
                CONTRACTS[contract.uuid] = new Contract(contract);
            });

            const currenciesResponse = await axios.get('https://valorant-api.com/v1/currencies');
            currenciesResponse.data.data.forEach((currency: any) => {
                CURRENCIES[currency.uuid] = new Currency(currency);
            });

            const eventsResponse = await axios.get('https://valorant-api.com/v1/events');
            eventsResponse.data.data.forEach((event: any) => {
                EVENTS[event.uuid] = new EventDto(event);
            });

            const gameModesResponse = await axios.get('https://valorant-api.com/v1/gamemodes');
            gameModesResponse.data.data.forEach((gameMode: any) => {
                GAME_MODES[gameMode.uuid] = new GameMode(gameMode);
            });

            const gearsResponse = await axios.get('https://valorant-api.com/v1/gear');
            gearsResponse.data.data.forEach((gear: any) => {
                GEARS[gear.uuid] = new Gear(gear);
            });

            const levelBordersResponse = await axios.get('https://valorant-api.com/v1/levelborders');
            levelBordersResponse.data.data.forEach((border: any) => {
                LEVEL_BORDERS[border.uuid] = new LevelBorder(border);
            });

            const mapsResponse = await axios.get('https://valorant-api.com/v1/maps');
            mapsResponse.data.data.forEach((map: any) => {
                MAPS[map.uuid] = new MapDto(map);
            });

            const playerCardsResponse = await axios.get('https://valorant-api.com/v1/playercards');
            playerCardsResponse.data.data.forEach((card: any) => {
                PLAYER_CARDS[card.uuid] = new PlayerCard(card);
            });

            const playerTitlesResponse = await axios.get('https://valorant-api.com/v1/playertitles');
            playerTitlesResponse.data.data.forEach((title: any) => {
                PLAYER_TITLES[title.uuid] = new PlayerTitle(title);
            });

            const seasonsResponse = await axios.get('https://valorant-api.com/v1/seasons');
            seasonsResponse.data.data.forEach((season: any) => {
                SEASONS[season.uuid] = new Season(season);
            });

            const spraysResponse = await axios.get('https://valorant-api.com/v1/sprays');
            spraysResponse.data.data.forEach((spray: any) => {
                SPRAYS[spray.uuid] = new Spray(spray);
            });

            const weaponsResponse = await axios.get('https://valorant-api.com/v1/weapons');
            weaponsResponse.data.data.forEach((weapon: any) => {
                WEAPONS[weapon.uuid] = new Weapon(weapon);
            });
        }

        return {
            AGENTS,
            BUDDIES,
            BUNDLES,
            CEREMONIES,
            COMPETITIVE_TIERS,
            CONTENT_TIERS,
            CONTRACTS,
            CURRENCIES,
            EVENTS,
            GAME_MODES,
            GEARS,
            LEVEL_BORDERS,
            MAPS,
            PLAYER_CARDS,
            PLAYER_TITLES,
            ROLES,
            SEASONS,
            SPRAYS,
            THEMES,
            WEAPONS
        }

    } catch (error) {
        console.error('Error updating dtos:', error);
    }
}