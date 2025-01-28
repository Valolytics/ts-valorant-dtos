import { MAPS } from '../services/dtos.service.js';
import { Location } from './location.model.js';

export class MapDto {
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    listViewIconTall: string;
    splash: string;
    stylizedBackgroundImage: string;
    premierBackgroundImage: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: number;
    yMultiplier: number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts: Callout[];
    isAvailableForBombGameMode: boolean;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.narrativeDescription = data.narrativeDescription;
        this.tacticalDescription = data.tacticalDescription;
        this.coordinates = data.coordinates;
        this.displayIcon = data.displayIcon;
        this.listViewIcon = data.listViewIcon;
        this.listViewIconTall = data.listViewIconTall;
        this.splash = data.splash;
        this.stylizedBackgroundImage = data.stylizedBackgroundImage;
        this.premierBackgroundImage = data.premierBackgroundImage;
        this.assetPath = data.assetPath;
        this.mapUrl = data.mapUrl;
        this.xMultiplier = data.xMultiplier;
        this.yMultiplier = data.yMultiplier;
        this.xScalarToAdd = data.xScalarToAdd;
        this.yScalarToAdd = data.yScalarToAdd;
        this.callouts = data.callouts ? data.callouts.map((callout: any) => new Callout(callout, data.xMultiplier, data.yMultiplier, data.xScalarToAdd, data.yScalarToAdd)) : null;
        this.isAvailableForBombGameMode = !['HURM', 'Poveglia'].includes(data.mapUrl.split('/')[3]);
    }

    static getMap(mapId: string): MapDto | null {
        for (const map of Object.values(MAPS)) {
            if (map.mapUrl === mapId) {
                return map;
            }
        }
        return null;
    }
}

export class Callout {
    regionName: string;
    superRegionName: string;
    location: Location

    constructor(data: any, xMultiplier: number, yMultiplier: number, xScalarToAdd: number, yScalarToAdd: number) {
        this.regionName = data.regionName;
        this.superRegionName = data.superRegionName;
        const x = data.location.y * xMultiplier + xScalarToAdd;
        const y = data.location.x * yMultiplier + yScalarToAdd;
        this.location = new Location({'x': x, 'y': y});
    }
}