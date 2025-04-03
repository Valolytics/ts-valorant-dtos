import { Theme } from './theme.model';
import { THEMES } from '../services/dtos.service.js';

export class PlayerCard {
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: Theme | undefined;
    displayIcon: string;
    smallArt: string;
    wideArt: string;
    largeArt: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.isHiddenIfNotOwned = data.isHiddenIfNotOwned;
        this.themeUuid = THEMES.getByProperty("uuid", data.themeUuid);
        this.displayIcon = data.displayIcon;
        this.smallArt = data.smallArt;
        this.wideArt = data.wideArt;
        this.largeArt = data.largeArt;
        this.assetPath = data.assetPath;
    }
}