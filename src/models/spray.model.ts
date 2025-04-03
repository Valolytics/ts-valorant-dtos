import { Theme } from './theme.model';
import { THEMES } from '../services/dtos.service.js';

export class Spray {
    uuid: string;
    displayName: string;
    category: string | null;
    themeUuid: Theme | undefined;
    isNullSpray: boolean;
    hideIfNotOwned: boolean;
    displayIcon: string;
    fullIcon: string | null;
    fullTransparentIcon: string | null;
    animationPng: string | null;
    animationGif: string | null;
    assetPath: string;
    levels: Level[];

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.category = data.category;
        this.themeUuid = THEMES.getByProperty("uuid", data.themeUuid);
        this.isNullSpray = data.isNullSpray;
        this.hideIfNotOwned = data.hideIfNotOwned;
        this.displayIcon = data.displayIcon;
        this.fullIcon = data.fullIcon;
        this.fullTransparentIcon = data.fullTransparentIcon;
        this.animationPng = data.animationPng;
        this.animationGif = data.animationGif;
        this.assetPath = data.assetPath;
        this.levels = data.levels.map((level: any) => new Level(level));
    }
}

export class Level {
    uuid: string;
    sprayLevel: number;
    displayName: string;
    displayIcon: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.sprayLevel = data.sprayLevel;
        this.displayName = data.displayName;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
    }
}