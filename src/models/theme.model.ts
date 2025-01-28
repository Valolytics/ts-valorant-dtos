export class Theme {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    storeFeaturedImage: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.displayIcon = data.displayIcon;
        this.storeFeaturedImage = data.storeFeaturedImage;
        this.assetPath = data.assetPath;
    }
}