export class ContentTier {
    uuid: string;
    displayName: string;
    devName: string;
    rank: number;
    juiceValue: number;
    juiceCost: number;
    highlightColor: string;
    displayIcon: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.devName = data.devName;
        this.rank = data.rank;
        this.juiceValue = data.juiceValue;
        this.juiceCost = data.juiceCost;
        this.highlightColor = data.highlightColor;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
    }
}