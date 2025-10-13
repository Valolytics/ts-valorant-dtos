import os
import json
import requests

ENDPOINTS = [
    # {"name": "version", "url": "https://valorant-api.com/v1/version"},
    {"name": "themes", "url": "https://valorant-api.com/v1/themes"},
    {"name": "agents", "url": "https://valorant-api.com/v1/agents?isPlayableCharacter=true"},
    {"name": "buddies", "url": "https://valorant-api.com/v1/buddies"},
    {"name": "bundles", "url": "https://valorant-api.com/v1/bundles"},
    {"name": "ceremonies", "url": "https://valorant-api.com/v1/ceremonies"},
    {"name": "competitiveTiers", "url": "https://valorant-api.com/v1/competitivetiers"},
    {"name": "contentTiers", "url": "https://valorant-api.com/v1/contenttiers"},
    {"name": "contracts", "url": "https://valorant-api.com/v1/contracts"},
    {"name": "currencies", "url": "https://valorant-api.com/v1/currencies"},
    {"name": "events", "url": "https://valorant-api.com/v1/events"},
    {"name": "flex", "url": "https://valorant-api.com/v1/flex"},
    {"name": "gameModes", "url": "https://valorant-api.com/v1/gamemodes"},
    {"name": "gears", "url": "https://valorant-api.com/v1/gear"},
    {"name": "levelBorders", "url": "https://valorant-api.com/v1/levelborders"},
    {"name": "maps", "url": "https://valorant-api.com/v1/maps"},
    {"name": "playerCards", "url": "https://valorant-api.com/v1/playercards"},
    {"name": "playerTitles", "url": "https://valorant-api.com/v1/playertitles"},
    {"name": "seasons", "url": "https://valorant-api.com/v1/seasons"},
    {"name": "sprays", "url": "https://valorant-api.com/v1/sprays"},
    {"name": "weapons", "url": "https://valorant-api.com/v1/weapons"},
]

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'dtos')

def save_response_to_file(name, data):
    to_save = {}
    for item in data["data"]:
        to_save[item["uuid"]] = item
        
    # Veto hardcoded data addition
    # TODO: Remove when API is updated
    if (name == "agents" and "92eeef5d-43b5-1d4a-8d03-b3927a09034b" not in to_save):
        to_save["92eeef5d-43b5-1d4a-8d03-b3927a09034b"] = {
            "uuid": "92eeef5d-43b5-1d4a-8d03-b3927a09034b",
            "displayName": "Veto",
            "description": "Empowered by an unstoppable DNA mutation, Senegalese enforcer Veto defies the rules of engagement by nullifying his opponent's powers and technology. On Veto's battlefield, gunplay is your only guarantee.",
            "developerName": "Pine",
            "releaseDate": "2025-10-06T22:00:00Z",
            "characterTags": None,
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
            "isFullPortraitRightFacing": True,
            "isPlayableCharacter": True,
            "isAvailableForTest": True,
            "isBaseContent": False,
            "role": {
                "uuid": "5fc02f99-4091-4486-a531-98459a3e95e9",
                "displayName": "Sentinel",
                "description": "Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.",
                "displayIcon": "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
                "assetPath": "ShooterGame/Content/Characters/_Core/Roles/Sentinel_PrimaryDataAsset"
            },
            "recruitmentData": None,
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
            "voiceLine": None
        }
    
    if name == "agents":
        roles = {}
        for agent in data["data"]:
            roles[agent["role"]["uuid"]] = agent["role"]
            save_response_to_file("roles", {"data": list(roles.values())})
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    file_path = os.path.join(OUTPUT_DIR, f"{name}.json")
    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(to_save, file, indent=2)
    print(f"Saved: {file_path}")

def fetch_data_and_save():
    for endpoint in ENDPOINTS:
        try:
            print(f"Fetching: {endpoint['url']}")
            response = requests.get(endpoint['url'])
            response.raise_for_status()
            save_response_to_file(endpoint['name'], response.json())
        except requests.RequestException as e:
            print(f"Error fetching {endpoint['name']}: {e}")

if __name__ == "__main__":
    fetch_data_and_save()
    print("All data fetched and saved.")
