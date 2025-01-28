export class Version {
    manifestId: string;
    branch: string;
    version: string;
    buildVersion: string;
    engineVersion: string;
    riotClientVersion: string;
    riotClientBuild: string;
    buildDate: string;

    constructor(data: any) {
        this.manifestId = data.manifestId;
        this.branch = data.branch;
        this.version = data.version;
        this.buildVersion = data.buildVersion;
        this.engineVersion = data.engineVersion;
        this.riotClientVersion = data.riotClientVersion;
        this.riotClientBuild = data.riotClientBuild;
        this.buildDate = data.buildDate;
    }
}