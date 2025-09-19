export class FlexDto {
  uuid: string;
  displayName: string;
  displayNameAllCaps: string;
  displayIcon: string;
  assetPath: string;

  constructor(data: any) {
    this.uuid = data.uuid;
    this.displayName = data.displayName;
    this.displayNameAllCaps = data.displayNameAllCaps;
    this.displayIcon = data.displayIcon;
    this.assetPath = data.assetPath;
  }
}