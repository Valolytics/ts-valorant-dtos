import { MapDto } from "./map.model";

export class Location {
    x: number;
    y: number;

    constructor(data: any) {
        this.x = data.x;
        this.y = data.y;
    }
}

export class NormalizedLocation {
    x: number;
    y: number;
    map: MapDto;

    constructor(data: any, map: MapDto) {
        const locationX = parseFloat((data.y * map.xMultiplier + map.xScalarToAdd).toFixed(6));
        const locationY = parseFloat((data.x * map.yMultiplier + map.yScalarToAdd).toFixed(6));
        this.x = locationX;
        this.y = locationY;
        this.map = map;
    }

    toUnnormalizedLocation() {
        const locationX = Math.round((this.y - this.map.yScalarToAdd) / this.map.yMultiplier);
        const locationY = Math.round((this.x - this.map.xScalarToAdd) / this.map.xMultiplier);
        return new Location({x: locationX, y: locationY});
    }

    toJSON() {
        return this.toUnnormalizedLocation();
    }
}