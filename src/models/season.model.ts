export class Season {
    uuid: string;
    displayName: string;
    type: string | null;
    startTime: string;
    endTime: string;
    parentUuid: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.type = data.type;
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.parentUuid = data.parentUuid;
        this.assetPath = data.assetPath;
    }
}