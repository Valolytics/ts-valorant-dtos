export class Contract {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    shipIt: boolean;
    useLevelVPCostOverride: boolean;
    levelVPCostOverride: number;
    freeRewardScheduleUuid: string;
    content: Content;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.displayIcon = data.displayIcon;
        this.shipIt = data.shipIt;
        this.useLevelVPCostOverride = data.useLevelVPCostOverride;
        this.levelVPCostOverride = data.levelVPCostOverride;
        this.freeRewardScheduleUuid = data.freeRewardScheduleUuid;
        this.content = new Content(data.content);
        this.assetPath = data.assetPath;
    }
}

export class Content {
    relationType: string | null;
    relationUuid: string | null;
    chapters: Chapter[];
    premiumRewardScheduleUuid: string | null;
    premiumVPCost: number;

    constructor(data: any) {
        this.relationType = data.relationType;
        this.relationUuid = data.relationUuid;
        this.chapters = data.chapters.map((chapter: any) => new Chapter(chapter));
        this.premiumRewardScheduleUuid = data.premiumRewardScheduleUuid;
        this.premiumVPCost = data.premiumVPCost;
    }
}

export class Chapter {
    isEpilogue: boolean;
    levels: Level[];
    freeRewards: Reward[] | null;

    constructor(data: any) {
        this.isEpilogue = data.isEpilogue;
        this.levels = data.levels.map((level: any) => new Level(level));
        this.freeRewards = data.freeRewards;
    }
}

export class Level {
    reward: Reward;
    xp: number;
    vpCost: number;
    isPurchasableWithVp: boolean;
    doughCost: number;
    isPurchasableWithDough: boolean;

    constructor(data: any) {
        this.reward = new Reward(data.reward);
        this.xp = data.xp;
        this.vpCost = data.vpCost;
        this.isPurchasableWithVp = data.isPurchasableWithVp;
        this.doughCost = data.doughCost;
        this.isPurchasableWithDough = data.isPurchasableWithDough;
    }
}

export class Reward {
    type: string;
    uuid: string;
    amount: number;
    isHighlighted: boolean;

    constructor(data: any) {
        this.type = data.type;
        this.uuid = data.uuid;
        this.amount = data.amount;
        this.isHighlighted = data.isHighlighted;
    }
}