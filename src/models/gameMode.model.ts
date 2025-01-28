export class GameMode {
    uuid: string;
    displayName: string;
    duration: string | null;
    economyType: string;
    allowsMatchTimeouts: boolean;
    isTeamVoiceAllowed: boolean;
    isMinimapHidden: boolean;
    orbCount: number;
    roundsPerHalf: number;
    teamRoles: string[] | null;
    gameFeatureOverrides: GameFeatureOverride[] | null;
    gameRuleBoolOverrides: GameRuleBoolOverride[] | null;
    displayIcon: string | null;
    listViewIconTall: string | null;
    assetPath: string;

    constructor(data: any) {
        this.uuid = data.uuid;
        this.displayName = data.displayName;
        this.duration = data.duration;
        this.economyType = data.economyType;
        this.allowsMatchTimeouts = data.allowsMatchTimeouts;
        this.isTeamVoiceAllowed = data.isTeamVoiceAllowed;
        this.isMinimapHidden = data.isMinimapHidden;
        this.orbCount = data.orbCount;
        this.roundsPerHalf = data.roundsPerHalf;
        this.teamRoles = data.teamRoles;
        this.gameFeatureOverrides = data.gameFeatureOverrides ? data.gameFeatureOverrides.map((gameFeatureOverride: any) => new GameFeatureOverride(gameFeatureOverride)) : null;
        this.gameRuleBoolOverrides = data.gameRuleBoolOverrides ? data.gameRuleBoolOverrides.map((gameRuleBoolOverride: any) => new GameRuleBoolOverride(gameRuleBoolOverride)) : null;
        this.displayIcon = data.displayIcon;
        this.listViewIconTall = data.listViewIconTall;
        this.assetPath = data.assetPath;
    }
}

export class GameFeatureOverride {
    featureName: string;
    state: boolean;

    constructor(data: any) {
        this.featureName = data.featureName;
        this.state = data.state;
    }
}

export class GameRuleBoolOverride {
    ruleName: string;
    state: boolean;

    constructor(data: any) {
        this.ruleName = data.ruleName;
        this.state = data.state;
    }
}