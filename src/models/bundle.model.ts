export class Bundle {
    uuid: string;
    displayName: string;
    displayNameSubText: string | null;
    description: string;
    extraDescription: string | null;
    promoDescription: string | null;;
    useAdditionalContext: boolean;
    displayIcon: string;
    displayIcon2: string;
    verticalPromoImage: string | null;;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.displayNameSubText = data.displayNameSubText;
        this.description = data.description;
        this.extraDescription = data.extraDescription;
        this.promoDescription = data.promoDescription;
        this.useAdditionalContext = data.useAdditionalContext;
        this.displayIcon = data.displayIcon;
        this.displayIcon2 = data.displayIcon2;
        this.verticalPromoImage = data.verticalPromoImage;
        this.assetPath = data.assetPath;
    }
}