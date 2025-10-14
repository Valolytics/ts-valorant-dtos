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
