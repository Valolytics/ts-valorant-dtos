import { ShopData } from './shopData.model.js';
import { Theme } from './theme.model';
import { THEMES, WEAPONS } from '../services/dtos.service.js';

export class Weapon {
    uuid: string;
    displayName: string;
    category: WeaponCategory;
    defaultSkinUuid: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
    weaponStats: WeaponStats | null;
    shopData: ShopData | null;
    skins: Skin[];

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.category = data.category;
        this.defaultSkinUuid = data.defaultSkinUuid;
        this.displayIcon = data.displayIcon;
        this.killStreamIcon = data.killStreamIcon;
        this.assetPath = data.assetPath;
        this.weaponStats = data.weaponStats ? new WeaponStats(data.weaponStats) : null;
        this.shopData = data.shopData ? new ShopData(data.shopData) : null;
        this.skins = data.skins.map((skin: any) => new Skin(skin));
    }

    static getClassic(): Weapon {
        return WEAPONS['29a0cfab-485b-f5d5-779a-b59f85e204a8'];
    }
}

export enum WeaponCategory {
    Melee = 'EEquippableCategory::Melee',
    Sidearm = 'EEquippableCategory::Sidearm',
    SMG = 'EEquippableCategory::SMG',
    Shotgun = 'EEquippableCategory::Shotgun',
    Rifle = 'EEquippableCategory::Rifle',
    Sniper = 'EEquippableCategory::Sniper',
    Heavy = 'EEquippableCategory::Heavy',
}

export class WeaponStats {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string | null;
    fireMode: string | null;;
    altFireType: string | null;;
    adsStats: AdsStats | null;;
    altShotgunStats: AltShotgunStats | null;;
    airBurstStats: AirBurstStats | null;;
    damageRanges: DamageRange[];

    constructor(data: any) {
        this.fireRate = data.fireRate;
        this.magazineSize = data.magazineSize;
        this.runSpeedMultiplier = data.runSpeedMultiplier;
        this.equipTimeSeconds = data.equipTimeSeconds;
        this.reloadTimeSeconds = data.reloadTimeSeconds;
        this.firstBulletAccuracy = data.firstBulletAccuracy;
        this.shotgunPelletCount = data.shotgunPelletCount;
        this.wallPenetration = data.wallPenetration;
        this.feature = data.feature;
        this.fireMode = data.fireMode;
        this.altFireType = data.altFireType;
        this.adsStats = data.adsStats ? new AdsStats(data.adsStats) : null;
        this.altShotgunStats = data.altShotgunStats ? new AltShotgunStats(data.altShotgunStats) : null;
        this.airBurstStats = data.airBurstStats ? new AirBurstStats(data.airBurstStats) : null;
        this.damageRanges = data.damageRanges.map((range: any) => new DamageRange(range));
    }
}

export class AdsStats {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;

    constructor(data: any) {
        this.zoomMultiplier = data.zoomMultiplier;
        this.fireRate = data.fireRate;
        this.runSpeedMultiplier = data.runSpeedMultiplier;
        this.burstCount = data.burstCount;
        this.firstBulletAccuracy = data.firstBulletAccuracy;
    }
}

export class AltShotgunStats {
    shotgunPelletCount: number;
    burstRate: number;

    constructor(data: any) {
        this.shotgunPelletCount = data.shotgunPelletCount;
        this.burstRate = data.burstRate;
    }
}

export class AirBurstStats {
    shotgunPelletCount: number;
    burstDistance: number;

    constructor(data: any) {
        this.shotgunPelletCount = data.shotgunPelletCount;
        this.burstDistance = data.burstRate;
    }
}

export class DamageRange {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;

    constructor(data: any) {
        this.rangeStartMeters = data.rangeStartMeters;
        this.rangeEndMeters = data.rangeEndMeters;
        this.headDamage = data.headDamage;
        this.bodyDamage = data.bodyDamage;
        this.legDamage = data.legDamage;
    }
}

export class Skin {
    uuid: string;
    displayName: string;
    themeUuid: Theme;
    contentTierUuid: string | null;
    displayIcon: string | null;
    wallpaper: string | null;
    assetPath: string;
    chromas: Chroma[];
    levels: Level[];

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.themeUuid = THEMES[data.themeUuid];
        this.contentTierUuid = data.contentTierUuid;
        this.displayIcon = data.displayIcon;
        this.wallpaper = data.wallpaper;
        this.assetPath = data.assetPath;
        this.chromas = data.chromas.map((chroma: any) => new Chroma(chroma));
        this.levels = data.levels.map((level: any) => new Level(level));
    }
}

export class Chroma {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    fullRender: string;
    swatch: string | null;
    streamedVideo: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.displayIcon = data.displayIcon;
        this.fullRender = data.fullRender;
        this.swatch = data.swatch;
        this.streamedVideo = data.streamedVideo;
        this.assetPath = data.assetPath;
    }
}

export class Level {
    uuid: string;
    displayName: string;
    levelItem: string | null;
    displayIcon: string | null;
    streamedVideo: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.levelItem = data.levelItem;
        this.displayIcon = data.displayIcon;
        this.streamedVideo = data.streamedVideo;
        this.assetPath = data.assetPath;
    }
}