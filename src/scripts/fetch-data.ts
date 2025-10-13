import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';

const ENDPOINTS = [
    { name: "themes", url: "https://valorant-api.com/v1/themes" },
    { name: "agents", url: "https://valorant-api.com/v1/agents?isPlayableCharacter=true" },
    { name: "buddies", url: "https://valorant-api.com/v1/buddies" },
    { name: "bundles", url: "https://valorant-api.com/v1/bundles" },
    { name: "ceremonies", url: "https://valorant-api.com/v1/ceremonies" },
    { name: "competitiveTiers", url: "https://valorant-api.com/v1/competitivetiers" },
    { name: "contentTiers", url: "https://valorant-api.com/v1/contenttiers" },
    { name: "contracts", url: "https://valorant-api.com/v1/contracts" },
    { name: "currencies", url: "https://valorant-api.com/v1/currencies" },
    { name: "events", url: "https://valorant-api.com/v1/events" },
    { name: "flex", url: "https://valorant-api.com/v1/flex" },
    { name: "gameModes", url: "https://valorant-api.com/v1/gamemodes" },
    { name: "gears", url: "https://valorant-api.com/v1/gear" },
    { name: "levelBorders", url: "https://valorant-api.com/v1/levelborders" },
    { name: "maps", url: "https://valorant-api.com/v1/maps" },
    { name: "playerCards", url: "https://valorant-api.com/v1/playercards" },
    { name: "playerTitles", url: "https://valorant-api.com/v1/playertitles" },
    { name: "seasons", url: "https://valorant-api.com/v1/seasons" },
    { name: "sprays", url: "https://valorant-api.com/v1/sprays" },
    { name: "weapons", url: "https://valorant-api.com/v1/weapons" },
];

const OUTPUT_DIR = path.join(__dirname, '../dtos');

interface ApiResponse {
    data: any[];
    [key: string]: any;
}

async function saveResponseToFile(name: string, data: ApiResponse): Promise<void> {
    const toSave: { [uuid: string]: any } = {};
    
    for (const item of data.data) {
        toSave[item.uuid] = item;
    }

    // Veto hardcoded data addition
    // TODO: Remove when API is updated
    if (name == "agents" && !("92eeef5d-43b5-1d4a-8d03-b3927a09034b" in toSave)) {
        toSave["92eeef5d-43b5-1d4a-8d03-b3927a09034b"] = {
            "uuid": "92eeef5d-43b5-1d4a-8d03-b3927a09034b",
            "displayName": "Veto",
            "description": "Empowered by an unstoppable DNA mutation, Senegalese enforcer Veto defies the rules of engagement by nullifying his opponent's powers and technology. On Veto's battlefield, gunplay is your only guarantee.",
            "developerName": "Pine",
            "releaseDate": "2025-10-06T22:00:00Z",
            "characterTags": null,
            "displayIcon": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/displayicon.png",
            "displayIconSmall": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/displayiconsmall.png",
            "bustPortrait": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/fullportrait.png",
            "fullPortrait": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/fullportrait.png",
            "fullPortraitV2": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/fullportrait.png",
            "killfeedPortrait": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/killfeedportrait.png",
            "background": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/background.png",
            "backgroundGradientColors": [
                "90e3fdff",
                "557f8cff",
                "2b4e7cff",
                "1e3344ff"
            ],
            "assetPath": "ShooterGame/Content/Characters/Pine/Pine_PrimaryAsset",
            "isFullPortraitRightFacing": true,
            "isPlayableCharacter": true,
            "isAvailableForTest": true,
            "isBaseContent": false,
            "role": {
                "uuid": "5fc02f99-4091-4486-a531-98459a3e95e9",
                "displayName": "Sentinel",
                "description": "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
                "displayIcon": "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
                "assetPath": "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
            },
            "recruitmentData": null,
            "abilities": [
                {
                "slot": "Ability1",
                "displayName": "Chokehold",
                "description": "EQUIP a viscous fragment of your mutation. FIRE to throw. The fragment deploys upon impact, creating a trap to hold enemies in place. Held enemies are Deafened and Decayed. Enemies can destroy the trap before activation.",
                "displayIcon": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ability1/displayicon.png"
                },
                {
                "slot": "Ability2",
                "displayName": "Interceptor",
                "description": "EQUIP the Interceptor. FIRE to place the Interceptor at projected location. Once placed, RE-USE to activate. Once active, it will destroy any utility that would BOUNCE off a player and/or be destroyed naturally by gunfire. Enemies can destroy the Interceptor.",
                "displayIcon": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ability2/displayicon.png"
                },
                {
                "slot": "Grenade",
                "displayName": "Crosscut",
                "description": "EQUIP a vortex. FIRE to place on the ground. While in range and looking at the vortex, REACTIVATE to teleport to the vortex. During the BUY PHASE, the vortex can be reclaimed to be REDEPLOYED.",
                "displayIcon": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/grenade/displayicon.png"
                },
                {
                "slot": "Ultimate",
                "displayName": "Evolution",
                "description": "INSTANTLY begin to fully mutate, gaining a combat stim, regeneration, and becoming IMMUNE to all forms of debuffs.",
                "displayIcon": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ultimate/displayicon.png"
                }
            ],
            "voiceLine": null
        }
    }

    if (name === 'agents') {
        const roles: { [uuid: string]: any } = {};
        for (const agent of data.data) {
            roles[agent.role.uuid] = agent.role;
        }
        await saveResponseToFile('roles', { data: Object.values(roles) });
    }

    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    const filePath = path.join(OUTPUT_DIR, `${name}.json`);
    await fs.writeFile(filePath, JSON.stringify(toSave, null, 2));
    console.log(`Saved: ${filePath}`);
}

async function fetchDataAndSave(): Promise<void> {
    for (const endpoint of ENDPOINTS) {
        try {
            console.log(`Fetching: ${endpoint.url}`);
            const response = await axios.get(endpoint.url);
            await saveResponseToFile(endpoint.name, response.data);
        } catch (error) {
            console.error(`Error fetching ${endpoint.name}:`, error instanceof Error ? error.message : error);
        }
    }
}

fetchDataAndSave().then(() => {
    console.log('All data fetched and saved');
}).catch(console.error);