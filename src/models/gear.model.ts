import { ShopData } from './shopData.model.js';

export class GearDetails {
    name: string;
    value: string;

    constructor(data: any) {
        this.name = data.name;
        this.value = data.value;
    }
}

export class Gear {
    uuid: string;
    displayName: string;
    description: string;
    descriptions: string[];
    details: GearDetails[];
    displayIcon: string;
    assetPath: string;
    shopData: ShopData | null;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.description = data.description;
        this.descriptions = data.descriptions;
        this.details = data.details;
        this.displayIcon = data.displayIcon;
        this.assetPath = data.assetPath;
        this.shopData = data.shopData ? new ShopData(data.shopData) : null;
    }
}