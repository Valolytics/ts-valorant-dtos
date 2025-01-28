import { Theme } from './theme.model';
import { THEMES } from '../services/dtos.service.js';

export class Buddy {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: Theme | null;
    displayIcon: string;
    assetPath: string;
    levels: Level[];

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.isHiddenIfNotOwned = data.isHiddenIfNotOwned;
        this.themeUuid = data.themeUuid ? THEMES[data.themeUuid] : null;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
        this.levels = data.levels.map((level: any) => new Level(level));
    }
}

export class Level {
    uuid: string;
    charmLevel: string;
    hideIfNotOwned: boolean;
    displayName: string;
    displayIcon: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.charmLevel = data.charmLevel;
        this.hideIfNotOwned = data.hideIfNotOwned;
        this.displayName = data.displayName;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
    }
}