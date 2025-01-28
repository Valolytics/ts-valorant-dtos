import { Role } from './role.model';
import { AGENTS, ROLES } from '../services/dtos.service.js';

export class Agent {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: string[] | null;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    recruitmentData: RecruitmentData | null;
    abilities: {
        [slot: string]: Ability;
    };
    voiceLine: VoiceLine | null;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.description = data.description;
        this.developerName = data.developerName;
        this.characterTags = data.characterTags;
        this.displayIcon = data.displayIcon;
        this.displayIconSmall = data.displayIconSmall;
        this.bustPortrait = data.bustPortrait;
        this.fullPortrait = data.fullPortrait;
        this.fullPortraitV2 = data.fullPortraitV2;
        this.killfeedPortrait = data.killfeedPortrait;
        this.background = data.background;
        this.backgroundGradientColors = data.backgroundGradientColors;
        this.assetPath = data.assetPath;
        this.isFullPortraitRightFacing = data.isFullPortraitRightFacing;
        this.isPlayableCharacter = data.isPlayableCharacter;
        this.isAvailableForTest = data.isAvailableForTest;
        this.isBaseContent = data.isBaseContent;
        this.role = ROLES[data.role.uuid];
        this.recruitmentData = data.recruitmentData ? new RecruitmentData(data.recruitmentData) : null;
        this.abilities = {};
        data.abilities.forEach((ability: any) => {
            this.abilities[ability.slot] = new Ability(ability);
        });
        this.voiceLine = data.voiceLine ? new VoiceLine(data.voiceLine) : null;
    }
}

export class RecruitmentData {
    counterId: string;
    milestoneId: string;
    milestoneThreshold: number;
    useLevelVpCostOverride: boolean;
    levelVpCostOverride: number;
    startDate: string;
    endDate: string;

    constructor(data: any) {
        this.counterId = data.counterId;
        this.milestoneId = data.milestoneId;
        this.milestoneThreshold = data.milestoneThreshold;
        this.useLevelVpCostOverride = data.useLevelVpCostOverride;
        this.levelVpCostOverride = data.levelVpCostOverride;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
    }
}

export class Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string | null;

    constructor(data: any) {
        this.slot = data.slot;
        this.displayName = data.displayName;
        this.description = data.description;
        this.displayIcon = data.displayIcon;
    }

    static getAbilityByAbilityDisplayIcon(abilityDisplayIcon: string | null): Ability | null {
        if (!abilityDisplayIcon) return null;
        const agentUuid: string = abilityDisplayIcon.split('/')[4]
        return Object.values(AGENTS[agentUuid].abilities).find((ability: Ability) => ability.displayIcon === abilityDisplayIcon) ?? null;
    }
}

export class VoiceLine {
    minDuration: number;
    maxDuration: number;
    mediaList: Media[];

    constructor(data: any) {
        this.minDuration = data.minDuration;
        this.maxDuration = data.maxDuration;
        this.mediaList = data.mediaList.map((media: any) => new Media(media));
    }
}

export class Media {
    id: number;
    wwise: string;
    wave: string;

    constructor(data: any) {
        this.id = data.id;
        this.wwise = data.wwise;
        this.wave = data.wave;
    }
}