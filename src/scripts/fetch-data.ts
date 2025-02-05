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