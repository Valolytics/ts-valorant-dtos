export class EventDto {
    uuid: string;
    displayName: string;
    shortDisplayName: string;
    startTime: string;
    endTime: string;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.shortDisplayName = data.shortDisplayName;
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.assetPath = data.assetPath;
    }
}