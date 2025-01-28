export class Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.description = data.description;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
    }
}