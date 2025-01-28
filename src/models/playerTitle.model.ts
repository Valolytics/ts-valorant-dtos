export class PlayerTitle {
    uuid: string;
    displayName: string | null;
    titleText: string | null;
    isHiddenIfNotOwned: boolean;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.titleText = data.titleText;
        this.isHiddenIfNotOwned = data.isHiddenIfNotOwned;
        this.assetPath = data.assetPath;
    }
}