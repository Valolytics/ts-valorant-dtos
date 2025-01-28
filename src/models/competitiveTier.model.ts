export class CompetitiveTier {
    uuid: string;
    assetObjectName: string;
    tiers: Tier[];
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.assetObjectName = data.assetObjectName;
        this.assetPath = data.assetPath;
        this.tiers = data.tiers.map((tier: any) => new Tier(tier));
    }
}

export class Tier {
    tier: number;
    tierName: string;
    division: string;
    divisionName: string;
    color: string;
    backgroundColor: string;
    smallIcon: string | null;
    largeIcon: string | null;
    rankTriangleDownIcon: string | null;
    rankTriangleUpIcon: string | null;

    constructor(data: any) {
        this.tier = data.tier;
        this.tierName = data.tierName;
        this.division = data.division;
        this.divisionName = data.divisionName;
        this.color = data.color;
        this.backgroundColor = data.backgroundColor;
        this.smallIcon = data.smallIcon;
        this.largeIcon = data.largeIcon;
        this.rankTriangleDownIcon = data.rankTriangleDownIcon;
        this.rankTriangleUpIcon = data.rankTriangleUpIcon;
    }
}