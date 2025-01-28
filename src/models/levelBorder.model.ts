export class LevelBorder {
    uuid: string;
    displayName: string;
    startingLevel: number;
    levelNumberAppearance: string;
    smallPlayerCardAppearance: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.startingLevel = data.startingLevel;
        this.levelNumberAppearance = data.levelNumberAppearance;
        this.smallPlayerCardAppearance = data.smallPlayerCardAppearance;
        this.assetPath = data.assetPath;
    }
}