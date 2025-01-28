import axios from 'axios';
import log from '../logger/index.js';
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

export let VERSION: Version;
export const THEMES: Themes = {}
export const ROLES: Roles = {}
export const AGENTS: Agents = {}
export const BUDDIES: Buddies = {}
export const BUNDLES: Bundles = {}
export const CEREMONIES: Ceremonies = {}
export const COMPETITIVE_TIERS: CompetitiveTiers = {}
export const CONTENT_TIERS: ContentTiers = {}
export const CONTRACTS: Contracts = {}
export const CURRENCIES: Currencies = {}
export const EVENTS: Events = {}
export const GAME_MODES: GameModes = {}
export const GEARS: Gears = {}
export const LEVEL_BORDERS: LevelBorders = {}
export const MAPS: Maps = {}
export const PLAYER_CARDS: PlayerCards = {}
export const PLAYER_TITLES: PlayerTitles = {}
export const SEASONS: Seasons = {}
export const SPRAYS: Sprays = {}
export const WEAPONS: Weapons = {}

let currentBranch = '';

export async function updateDtos() {
    try {
        let versionReponse = await axios.get('https://valorant-api.com/v1/version');
        VERSION = new Version(versionReponse.data.data);
        if (VERSION.branch !== currentBranch) {
            currentBranch = VERSION.branch;

            const themesResponse = await axios.get('https://valorant-api.com/v1/themes');
            themesResponse.data.data.forEach((theme: any) => {
                THEMES[theme.uuid] = new Theme(theme);
            });
            log.info(`${Object.keys(THEMES).length} themes updated.`);

            const agentsResponse = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
            agentsResponse.data.data.forEach((agent: any) => {
                ROLES[agent.role.uuid] = new Role(agent.role);
                AGENTS[agent.uuid] = new Agent(agent);
            });
            log.info(`${Object.keys(ROLES).length} roles updated.`);
            log.info(`${Object.keys(AGENTS).length} agents updated.`);

            const buddiesResponse = await axios.get('https://valorant-api.com/v1/buddies');
            buddiesResponse.data.data.forEach((buddy: any) => {
                BUDDIES[buddy.uuid] = new Buddy(buddy);
            });
            log.info(`${Object.keys(BUDDIES).length} buddies updated.`);

            const bundlesResponse = await axios.get('https://valorant-api.com/v1/bundles');
            bundlesResponse.data.data.forEach((bundle: any) => {
                BUNDLES[bundle.uuid] = new Bundle(bundle);
            });
            log.info(`${Object.keys(BUNDLES).length} bundles updated.`);

            const ceremoniesResponse = await axios.get('https://valorant-api.com/v1/ceremonies');
            ceremoniesResponse.data.data.forEach((ceremony: any) => {
                CEREMONIES[ceremony.uuid] = new Ceremony(ceremony);
            });
            log.info(`${Object.keys(CEREMONIES).length} ceremonies updated.`);

            const competitiveTiersResponse = await axios.get('https://valorant-api.com/v1/competitivetiers');
            competitiveTiersResponse.data.data.forEach((tier: any) => {
                COMPETITIVE_TIERS[tier.uuid] = new CompetitiveTier(tier);
            });
            log.info(`${Object.keys(COMPETITIVE_TIERS).length} competitive tiers updated.`);

            const contentTiersResponse = await axios.get('https://valorant-api.com/v1/contenttiers');
            contentTiersResponse.data.data.forEach((tier: any) => {
                CONTENT_TIERS[tier.uuid] = new ContentTier(tier);
            });
            log.info(`${Object.keys(CONTENT_TIERS).length} content tiers updated.`);

            const contractsResponse = await axios.get('https://valorant-api.com/v1/contracts');
            contractsResponse.data.data.forEach((contract: any) => {
                CONTRACTS[contract.uuid] = new Contract(contract);
            });
            log.info(`${Object.keys(CONTRACTS).length} contracts updated.`);

            const currenciesResponse = await axios.get('https://valorant-api.com/v1/currencies');
            currenciesResponse.data.data.forEach((currency: any) => {
                CURRENCIES[currency.uuid] = new Currency(currency);
            });
            log.info(`${Object.keys(CURRENCIES).length} currencies updated.`);

            const eventsResponse = await axios.get('https://valorant-api.com/v1/events');
            eventsResponse.data.data.forEach((event: any) => {
                EVENTS[event.uuid] = new EventDto(event);
            });
            log.info(`${Object.keys(EVENTS).length} events updated.`);

            const gameModesResponse = await axios.get('https://valorant-api.com/v1/gamemodes');
            gameModesResponse.data.data.forEach((gameMode: any) => {
                GAME_MODES[gameMode.uuid] = new GameMode(gameMode);
            });
            log.info(`${Object.keys(GAME_MODES).length} game modes updated.`);

            const gearsResponse = await axios.get('https://valorant-api.com/v1/gear');
            gearsResponse.data.data.forEach((gear: any) => {
                GEARS[gear.uuid] = new Gear(gear);
            });
            log.info(`${Object.keys(GEARS).length} gears updated.`);

            const levelBordersResponse = await axios.get('https://valorant-api.com/v1/levelborders');
            levelBordersResponse.data.data.forEach((border: any) => {
                LEVEL_BORDERS[border.uuid] = new LevelBorder(border);
            });
            log.info(`${Object.keys(LEVEL_BORDERS).length} level borders updated.`);

            const mapsResponse = await axios.get('https://valorant-api.com/v1/maps');
            mapsResponse.data.data.forEach((map: any) => {
                MAPS[map.uuid] = new MapDto(map);
            });
            log.info(`${Object.keys(MAPS).length} maps updated.`);

            const playerCardsResponse = await axios.get('https://valorant-api.com/v1/playercards');
            playerCardsResponse.data.data.forEach((card: any) => {
                PLAYER_CARDS[card.uuid] = new PlayerCard(card);
            });
            log.info(`${Object.keys(PLAYER_CARDS).length} player cards updated.`);

            const playerTitlesResponse = await axios.get('https://valorant-api.com/v1/playertitles');
            playerTitlesResponse.data.data.forEach((title: any) => {
                PLAYER_TITLES[title.uuid] = new PlayerTitle(title);
            });
            log.info(`${Object.keys(PLAYER_TITLES).length} player titles updated.`);

            const seasonsResponse = await axios.get('https://valorant-api.com/v1/seasons');
            seasonsResponse.data.data.forEach((season: any) => {
                SEASONS[season.uuid] = new Season(season);
            });
            log.info(`${Object.keys(SEASONS).length} seasons updated.`);

            const spraysResponse = await axios.get('https://valorant-api.com/v1/sprays');
            spraysResponse.data.data.forEach((spray: any) => {
                SPRAYS[spray.uuid] = new Spray(spray);
            });
            log.info(`${Object.keys(SPRAYS).length} sprays updated.`);

            const weaponsResponse = await axios.get('https://valorant-api.com/v1/weapons');
            weaponsResponse.data.data.forEach((weapon: any) => {
                WEAPONS[weapon.uuid] = new Weapon(weapon);
            });
            log.info(`${Object.keys(WEAPONS).length} weapons updated.`);
        }

    } catch (error) {
        console.error('Error updating dtos:', error);
    }

    setTimeout(updateDtos, 60000);
}