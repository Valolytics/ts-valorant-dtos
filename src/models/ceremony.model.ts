export class Ceremony {
    uuid: string;
    displayName: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.assetPath = data.assetPath;
    }
}