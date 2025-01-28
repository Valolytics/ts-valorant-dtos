export class Currency {
    uuid: string;
    displayName: string;
    displayNameSingular: string;
    displayIcon: string;
    largeIcon: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.displayNameSingular = data.displayNameSingular;
        this.displayIcon = data.displayIcon;
        this.largeIcon = data.largeIcon;
        this.assetPath = data.assetPath;
    }
}