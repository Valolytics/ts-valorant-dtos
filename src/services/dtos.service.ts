import { Role } from '../models/role.model.js';
import { Agent } from '../models/agent.model.js';
import { Buddy } from '../models/buddy.model.js';
import { Bundle } from '../models/bundle.model.js';
import { Ceremony } from '../models/ceremony.model.js';
import { CompetitiveTier } from '../models/competitiveTier.model.js';
import { ContentTier } from '../models/contentTier.model.js';
import { Contract } from '../models/contract.model.js';
import { Currency } from '../models/currency.model.js';
import { EventDto } from '../models/event.model.js';
import { FlexDto } from '../models/flex.model.js';
import { GameMode } from '../models/gameMode.model.js';
import { Gear } from '../models/gear.model.js';
import { LevelBorder } from '../models/levelBorder.model.js';
import { MapDto } from '../models/map.model.js';
import { PlayerCard } from '../models/playerCard.model.js';
import { PlayerTitle } from '../models/playerTitle.model.js';
import { Season } from '../models/season.model.js';
import { Spray } from '../models/spray.model.js';
import { Weapon } from '../models/weapon.model.js';
import { Theme } from '../models/theme.model.js';

import JsonThemes from '../dtos/themes.json';
import JsonRoles from '../dtos/roles.json';
import JsonAgents from '../dtos/agents.json';
import JsonBuddies from '../dtos/buddies.json';
import JsonBundles from '../dtos/bundles.json';
import JsonCeremonies from '../dtos/ceremonies.json';
import JsonCompetitiveTiers from '../dtos/competitiveTiers.json';
import JsonContentTiers from '../dtos/contentTiers.json';
import JsonContracts from '../dtos/contracts.json';
import JsonCurrencies from '../dtos/currencies.json';
import JsonEvents from '../dtos/events.json';
import JsonFlex from '../dtos/flex.json';
import JsonGameModes from '../dtos/gameModes.json';
import JsonGears from '../dtos/gears.json';
import JsonLevelBorders from '../dtos/levelBorders.json';
import JsonMaps from '../dtos/maps.json';
import JsonPlayerCards from '../dtos/playerCards.json';
import JsonPlayerTitles from '../dtos/playerTitles.json';
import JsonSeasons from '../dtos/seasons.json';
import JsonSprays from '../dtos/sprays.json';
import JsonWeapons from '../dtos/weapons.json';

export class Collection<T> {
    protected items: { [uuid: string]: T };
  
    constructor(json: any, Constructor: new (data: any) => T) {
        this.items = mapToInstances(json, Constructor);
    }
  
    getByProperty<K extends keyof T>(property: K, value: T[K]): T | undefined {
        return Object.values(this.items).find(item => item[property] === value);
    }
  
    get all(): { [uuid: string]: T } {
        return this.items;
    }
}

export class Themes extends Collection<Theme> {
    constructor(json: any) {
        super(json, Theme);
    }
}
export class Roles extends Collection<Role> {
    constructor(json: any) {
        super(json, Role);
    }
}
export class Agents extends Collection<Agent> {
    constructor(json: any) {
        super(json, Agent);
    }

    get astra(): Agent { return this.items["41fb69c1-4189-7b37-f117-bcaf1e96f1bf"]; }
    get breach(): Agent { return this.items["5f8d3a7f-467b-97f3-062c-13acf203c006"]; }
    get brimstone(): Agent { return this.items["9f0d8ba9-4140-b941-57d3-a7ad57c6b417"]; }
    get chamber(): Agent { return this.items["22697a3d-45bf-8dd7-4fec-84a9e28c69d7"]; }
    get clove(): Agent { return this.items["1dbf2edd-4729-0984-3115-daa5eed44993"]; }
    get cypher(): Agent { return this.items["117ed9e3-49f3-6512-3ccf-0cada7e3823b"]; }
    get deadlock(): Agent { return this.items["cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"]; }
    get fade(): Agent { return this.items["dade69b4-4f5a-8528-247b-219e5a1facd6"]; }
    get gekko(): Agent { return this.items["e370fa57-4757-3604-3648-499e1f642d3f"]; }
    get harbor(): Agent { return this.items["95b78ed7-4637-86d9-7e41-71ba8c293152"]; }
    get iso(): Agent { return this.items["0e38b510-41a8-5780-5e8f-568b2a4f2d6c"]; }
    get jett(): Agent { return this.items["add6443a-41bd-e414-f6ad-e58d267f4e95"]; }
    get kayo(): Agent { return this.items["601dbbe7-43ce-be57-2a40-4abd24953621"]; }
    get killjoy(): Agent { return this.items["1e58de9c-4950-5125-93e9-a0aee9f98746"]; }
    get neon(): Agent { return this.items["bb2a4828-46eb-8cd1-e765-15848195d751"]; }
    get omen(): Agent { return this.items["8e253930-4c05-31dd-1b6c-968525494517"]; }
    get phoenix(): Agent { return this.items["eb93336a-449b-9c1b-0a54-a891f7921d69"]; }
    get raze(): Agent { return this.items["f94c3b30-42be-e959-889c-5aa313dba261"]; }
    get reyna(): Agent { return this.items["a3bfb853-43b2-7238-a4f1-ad90e9e46bcc"]; }
    get sage(): Agent { return this.items["569fdd95-4d10-43ab-ca70-79becc718b46"]; }
    get skye(): Agent { return this.items["6f2a04ca-43e0-be17-7f36-b3908627744d"]; }
    get sova(): Agent { return this.items["320b2a48-4d9b-a075-30f1-1f93a9b638fa"]; }
    get tejo(): Agent { return this.items["b444168c-4e35-8076-db47-ef9bf368f384"]; }
    get viper(): Agent { return this.items["707eab51-4836-f488-046a-cda6bf494859"]; }
    get vyse(): Agent { return this.items["efba5359-4016-a1e5-7626-b1ae76895940"]; }
    get waylay(): Agent { return this.items["df1cb487-4902-002e-5c17-d28e83e78588"]; }
    get yoru(): Agent { return this.items["7f94d92c-4234-0a36-9646-3a87eb8b5c89"]; }
}
export class Buddies extends Collection<Buddy> {
    constructor(json: any) {
        super(json, Buddy);
    }
}
export class Bundles extends Collection<Bundle> {
    constructor(json: any) {
        super(json, Bundle);
    }
}
export class Ceremonies extends Collection<Ceremony> {
    constructor(json: any) {
        super(json, Ceremony);
    }

    get ace(): Ceremony { return this.items["1e71c55c-476e-24ac-0687-e48b547dbb35"]; }
    get closer(): Ceremony { return this.items["b41f4d69-4f9d-ffa9-2be8-e2878cf7f03b"]; }
    get clutch(): Ceremony { return this.items["a6100421-4ecb-bd55-7c23-e4899643f230"]; }
    get flawless(): Ceremony { return this.items["eb651c62-421f-98fc-8008-68bee9ec942d"]; }
    get teamAce(): Ceremony { return this.items["87c91747-4de4-635e-a64b-6ba4faeeae78"]; }
    get thrifty(): Ceremony { return this.items["bf94f35e-4794-8add-dc7d-fb90a08d3d04"]; }
}
export class CompetitiveTiers extends Collection<CompetitiveTier> {
    constructor(json: any) {
        super(json, CompetitiveTier);
    }

    get episode1(): CompetitiveTier { return this.items["564d8e28-c226-3180-6285-e48a390db8b1"]; }
    get episode2(): CompetitiveTier { return this.items["23eb970e-6408-bc0b-3f20-d8fb0e0354ea"]; }
    get episode3(): CompetitiveTier { return this.items["edb72a72-7e6d-6010-9591-7c053bbdbf48"]; }
    get episode4(): CompetitiveTier { return this.items["e4e9a692-288f-63ca-7835-16fbf6234fda"]; }
    get episode5(): CompetitiveTier { return this.items["03621f52-342b-cf4e-4f86-9350a49c6d04"]; }
}
export class ContentTiers extends Collection<ContentTier> {
    constructor(json: any) {
        super(json, ContentTier);
    }
}
export class Contracts extends Collection<Contract> {
    constructor(json: any) {
        super(json, Contract);
    }
}
export class Currencies extends Collection<Currency> {
    constructor(json: any) {
        super(json, Currency);
    }

    get valorantPoints(): Currency { return this.items["85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741"]; }
    get kingdomCredits(): Currency { return this.items["85ca954a-41f2-ce94-9b45-8ca3dd39a00d"]; }
    get freeAgents(): Currency { return this.items["f08d4ae3-939c-4576-ab26-09ce1f23bb37"]; }
    get radianitePoints(): Currency { return this.items["e59aa87c-4cbf-517a-5983-6e81511be9b7"]; }
}
export class Events extends Collection<EventDto> {
    constructor(json: any) {
        super(json, EventDto);
    }

    get champions(): EventDto { return this.items["96682481-4f7b-6322-18bb-f1a76f91a35f"]; }
    get lunarCelebrationEventPass(): EventDto { return this.items["024d36a7-46e3-8a29-30c6-09a7fb81bebe"]; }
    get recallPass2022(): EventDto { return this.items["700c7584-43b8-3e48-bde7-fa88f33da72f"]; }
    get champions2023EventPass(): EventDto { return this.items["de4b227a-479a-a885-c2e3-7c9f066b8492"]; }
    get horizonEventPass2023(): EventDto { return this.items["aa924ba5-440b-e620-fc96-d192b3eea137"]; }
    get scalesOfFortuneEventPass(): EventDto { return this.items["5e96c1d7-427c-fea3-f8f0-77afce50170b"]; }
    get collisionEventPass(): EventDto { return this.items["9a251c8f-4d56-76df-b338-13add9b4820f"]; }
    get yearEndEventPass(): EventDto { return this.items["8ef68504-420f-bc8a-beae-a4acaabee3dd"]; }
    get bornToBurnEventPass(): EventDto { return this.items["3ad0e339-4968-61f1-9564-f99d59e0dbc9"]; }
    get crossover(): EventDto { return this.items["7cfe1d41-463f-8ecd-1065-26bd66d8b138"]; }
    get fiveYearsEventPass(): EventDto { return this.items["64e83b27-4348-aa5b-16c4-f185748e3415"]; }
    get yr1AnniversaryPass(): EventDto { return this.items["3bd00051-4518-411d-046d-a7a554850267"]; }
    get riotXArcanePass(): EventDto { return this.items["cee09894-41d6-7000-848b-ea9de6c28f44"]; }
}
export class Flex extends Collection<FlexDto> {
    constructor(json: any) {
        super(json, FlexDto);
    }

    get boltPrism(): FlexDto { return this.items["80a11c6a-4d28-bfad-5594-2e9369b7787a"]; }
    get colonD(): FlexDto { return this.items["cb4bf100-4590-c564-c805-67bcf98b7baa"]; }
    get killbanner(): FlexDto { return this.items["38dafc48-4668-6f70-1e8c-bf939841cf7e"]; }
    get champions2025Trophy(): FlexDto { return this.items["e2207345-4fc9-6967-f800-b18e9d87921a"]; }
    get statCom(): FlexDto { return this.items["af52b5a0-4a4c-03b2-c9d7-8187a08a2675"]; }
    get helix(): FlexDto { return this.items["f3d05346-4ca8-0f25-6e8e-38bbe0d5bcf0"]; }
    get stellarDendrite(): FlexDto { return this.items["d3f8f048-4e9c-939d-7233-67892d8b925f"]; }
    get spikeRushCup(): FlexDto { return this.items["361edf14-4ae3-3831-eeec-5ea715097341"]; }
    get tactibear(): FlexDto { return this.items["903aafe1-4f32-d020-6150-51bf2f4888ad"]; }
    get none(): FlexDto { return this.items["90f0a554-41b3-355b-6846-74a27aa3f7b9"]; }
    get fiveYears(): FlexDto { return this.items["a348bfba-429d-8cf3-e671-1db93db5f793"]; }
    get sharkX(): FlexDto { return this.items["a99fca6c-4943-5dca-faf0-53990dddbaf6"]; }
}
export class GameModes extends Collection<GameMode> {
    constructor(json: any) {
        super(json, GameMode);
    }

    get standard(): GameMode { return this.items["96bd3920-4f36-d026-2b28-c683eb0bcac5"]; }
    get deathmatch(): GameMode { return this.items["a8790ec5-4237-f2f0-e93b-08a8e89865b2"]; }
    get botMatch(): GameMode { return this.items["d2d0f229-4514-517a-b10a-aaa0ef0d4a67"]; }
    get escalation(): GameMode { return this.items["a4ed6518-4741-6dcb-35bd-f884aecdc859"]; }
    get teamDeathmatch(): GameMode { return this.items["e086db66-47fd-e791-ca81-06a645ac7661"]; }
    get basicTraining(): GameMode { return this.items["2b470a47-40e0-ad02-73b4-7f8585fa108c"]; }
    get onboarding(): GameMode { return this.items["d2b4e425-4cab-8d95-eb26-bb9b444551dc"]; }
    get replication(): GameMode { return this.items["4744698a-4513-dc96-9c22-a9aa437e4a58"]; }
    get spikeRush(): GameMode { return this.items["e921d1e6-416b-c31f-1291-74930c330b7b"]; }
    get theRange(): GameMode { return this.items["e2dc3878-4fe5-d132-28f8-3d8c259efcc6"]; }
    get snowballFight(): GameMode { return this.items["57038d6d-49b1-3a74-c5ef-3395d9f23a97"]; }
    get swiftplay(): GameMode { return this.items["5d0f264b-4ebe-cc63-c147-809e1374484b"]; }
}
export class Gears extends Collection<Gear> {
    constructor(json: any) {
        super(json, Gear);
    }

    get light(): Gear { return this.items["4dec83d5-4902-9ab3-bed6-a7a390761157"]; }
    get regen(): Gear { return this.items["b1b9086d-41bd-a516-5d29-e3b34a6f1644"]; }
    get heavy(): Gear { return this.items["822bcab2-40a2-324e-c137-e09195ad7692"]; }
}
export class LevelBorders extends Collection<LevelBorder> {
    constructor(json: any) {
        super(json, LevelBorder);
    }

    get level1(): LevelBorder { return this.items["ebc736cd-4b6a-137b-e2b0-1486e31312c9"]; }
    get level20(): LevelBorder { return this.items["5156a90d-4d65-58d0-f6a8-48a0c003878a"]; }
    get level40(): LevelBorder { return this.items["9c4afb15-40d7-3557-062a-4bb198cb9958"]; }
    get level60(): LevelBorder { return this.items["e6238102-425c-a647-6685-e6af7f8982d9"]; }
    get level80(): LevelBorder { return this.items["49413ac2-4ed5-6953-5791-db838ccb58f3"]; }
    get level100(): LevelBorder { return this.items["e05371e3-4ec4-a53e-168a-c49346a75c19"]; }
    get level120(): LevelBorder { return this.items["7e7feff1-44c2-301e-767d-d9b2b1cd9051"]; }
    get level140(): LevelBorder { return this.items["53d4ed03-4b29-5913-aeda-80a41afcef3a"]; }
    get level160(): LevelBorder { return this.items["6f610ab6-4a21-63fd-ac19-4a9204bc2721"]; }
    get level180(): LevelBorder { return this.items["547ac9dd-495d-f11d-d921-3fbd14604ae0"]; }
    get level200(): LevelBorder { return this.items["bd1082ab-462c-3fb8-e049-28a9750acf0f"]; }
    get level220(): LevelBorder { return this.items["37a36996-41f3-6e26-c00b-46bf7c037482"]; }
    get level240(): LevelBorder { return this.items["5d0d6c6c-4f0a-dc65-e506-b786cc27dbe1"]; }
    get level260(): LevelBorder { return this.items["3635b061-4bf9-b937-55fe-44a4dd0ed3dc"]; }
    get level280(): LevelBorder { return this.items["ae5eda0d-476b-a159-959c-df93374f4a69"]; }
    get level300(): LevelBorder { return this.items["3d90bc3a-4626-71d6-a17c-93ae14d05fb0"]; }
    get level320(): LevelBorder { return this.items["674bbd9e-4a4f-208a-75fa-1d9dd7d7008f"]; }
    get level340(): LevelBorder { return this.items["d84cf377-4c21-1cdf-0260-4e8ebd9825f5"]; }
    get level360(): LevelBorder { return this.items["6c1fb61e-46e5-2908-5048-d4866cb64c3d"]; }
    get level380(): LevelBorder { return this.items["af1852a5-4e66-02a6-2ae3-ab8c885efb80"]; }
    get level400(): LevelBorder { return this.items["cbd1914e-43f8-7ae5-38c4-228bcbe58756"]; }
    get level420(): LevelBorder { return this.items["c8a4abff-4ace-f0a3-c9f3-db936791a697"]; }
    get level440(): LevelBorder { return this.items["086dd1ab-4889-793a-4b33-0a99e311fa25"]; }
    get level460(): LevelBorder { return this.items["08ab72f1-4fce-ddb5-5fd5-22abd3bc9d49"]; }
    get level480(): LevelBorder { return this.items["6694d7f7-4ab9-8545-5921-35a9ea8cec24"]; }
}
export class Maps extends Collection<MapDto> {
    constructor(json: any) {
        super(json, MapDto);
    }

    get abyss(): MapDto { return this.items["224b0a95-48b9-f703-1bd8-67aca101a61f"]; }
    get ascent(): MapDto { return this.items["7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"]; }
    get bind(): MapDto { return this.items["2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"]; }
    get breeze(): MapDto { return this.items["2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"]; }
    get district(): MapDto { return this.items["690b3ed2-4dff-945b-8223-6da834e30d24"]; }
    get drift(): MapDto { return this.items["2c09d728-42d5-30d8-43dc-96a05cc7ee9d"]; }
    get fracture(): MapDto { return this.items["b529448b-4d60-346e-e89e-00a4c527a405"]; }
    get glicth(): MapDto { return this.items["d6336a5a-428f-c591-98db-c8a291159134"]; }
    get haven(): MapDto { return this.items["2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"]; }
    get icebox(): MapDto { return this.items["e2ad5c54-4114-a870-9641-8ea21279579a"]; }
    get kasbah(): MapDto { return this.items["12452a9d-48c3-0b02-e7eb-0381c3520404"]; }
    get lotus(): MapDto { return this.items["2fe4ed3a-450a-948b-6d6b-e89a78e680a9"]; }
    get pearl(): MapDto { return this.items["fd267378-4d1d-484f-ff52-77821ed10dc2"]; }
    get piazza(): MapDto { return this.items["de28aa9b-4cbe-1003-320e-6cb3ec309557"]; }
    get range(): MapDto { return this.items["5914d1e0-40c4-cfdd-6b88-eba06347686c"]; }
    get split(): MapDto { return this.items["d960549e-485c-e861-8d71-aa9d1aed12a2"]; }
    get sunset(): MapDto { return this.items["92584fbe-486a-b1b2-9faa-39b0f486b498"]; }
    get training(): MapDto { return this.items["1f10dab3-4294-3827-fa35-c2aa00213cf3"]; }
}
export class PlayerCards extends Collection<PlayerCard> {
    constructor(json: any) {
        super(json, PlayerCard);
    }

    get default(): PlayerCard { return this.items["9fb348bc-41a0-91ad-8a3e-818035c4e561"]; }
}
export class PlayerTitles extends Collection<PlayerTitle> {
    constructor(json: any) {
        super(json, PlayerTitle);
    }
}
export class Seasons extends Collection<Season> {
    constructor(json: any) {
        super(json, Season);
    }

    get closedBeta(): Season { return this.items["0df5adb9-4dcb-6899-1306-3e9860661dd3"]; }
    get e1(): Season { return this.items["fcf2c8f4-4324-e50b-2e23-718e4a3ab046"]; }
    get e1a1(): Season { return this.items["3f61c772-4560-cd3f-5d3f-a7ab5abda6b3"]; }
    get e1a2(): Season { return this.items["0530b9c4-4980-f2ee-df5d-09864cd00542"]; }
    get e1a3(): Season { return this.items["46ea6166-4573-1128-9cea-60a15640059b"]; }
    get e2(): Season { return this.items["71c81c67-4fae-ceb1-844c-aab2bb8710fa"]; }
    get e2a1(): Season { return this.items["97b6e739-44cc-ffa7-49ad-398ba502ceb0"]; }
    get e2a2(): Season { return this.items["ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff"]; }
    get e2a3(): Season { return this.items["52e9749a-429b-7060-99fe-4595426a0cf7"]; }
    get e3(): Season { return this.items["97b39124-46ce-8b55-8fd1-7cbf7ffe173f"]; }
    get e3a1(): Season { return this.items["2a27e5d2-4d30-c9e2-b15a-93b8909a442c"]; }
    get e3a2(): Season { return this.items["4cb622e1-4244-6da3-7276-8daaf1c01be2"]; }
    get e3a3(): Season { return this.items["a16955a5-4ad0-f761-5e9e-389df1c892fb"]; }
    get e4(): Season { return this.items["808202d6-4f2b-a8ff-1feb-b3a0590ad79f"]; }
    get e4a1(): Season { return this.items["573f53ac-41a5-3a7d-d9ce-d6a6298e5704"]; }
    get e4a2(): Season { return this.items["d929bc38-4ab6-7da4-94f0-ee84f8ac141e"]; }
    get e4a3(): Season { return this.items["3e47230a-463c-a301-eb7d-67bb60357d4f"]; }
    get e5(): Season { return this.items["79f9d00f-433a-85d6-dfc3-60aef115e699"]; }
    get e5a1(): Season { return this.items["67e373c7-48f7-b422-641b-079ace30b427"]; }
    get e5a2(): Season { return this.items["7a85de9a-4032-61a9-61d8-f4aa2b4a84b6"]; }
    get e5a3(): Season { return this.items["aca29595-40e4-01f5-3f35-b1b3d304c96e"]; }
    get e6(): Season { return this.items["3ec8084a-4e45-4d22-d801-f8a63e5a208b"]; }
    get e6a1(): Season { return this.items["9c91a445-4f78-1baa-a3ea-8f8aadf4914d"]; }
    get e6a2(): Season { return this.items["34093c29-4306-43de-452f-3f944bde22be"]; }
    get e6a3(): Season { return this.items["2de5423b-4aad-02ad-8d9b-c0a931958861"]; }
    get e7(): Season { return this.items["1a2fc1de-4f58-4a89-49d0-f28b720ff76f"]; }
    get e7a1(): Season { return this.items["0981a882-4e7d-371a-70c4-c3b4f46c504a"]; }
    get e7a2(): Season { return this.items["03dfd004-45d4-ebfd-ab0a-948ce780dac4"]; }
    get e7a3(): Season { return this.items["4401f9fd-4170-2e4c-4bc3-f3b4d7d150d1"]; }
    get e8(): Season { return this.items["843cc465-4f0a-7466-ccda-19a427f8e478"]; }
    get e8a1(): Season { return this.items["ec876e6c-43e8-fa63-ffc1-2e8d4db25525"]; }
    get e8a2(): Season { return this.items["22d10d66-4d2a-a340-6c54-408c7bd53807"]; }
    get e8a3(): Season { return this.items["4539cac3-47ae-90e5-3d01-b3812ca3274e"]; }
    get e9(): Season { return this.items["d1ad9e7a-4e3f-e8c6-eb1b-148162a5acf7"]; }
    get e9a1(): Season { return this.items["52ca6698-41c1-e7de-4008-8994d2221209"]; }
    get e9a2(): Season { return this.items["292f58db-4c17-89a7-b1c0-ba988f0e9d98"]; }
    get e9a3(): Season { return this.items["dcde7346-4085-de4f-c463-2489ed47983b"]; }
    get v25(): Season { return this.items["439dd42d-4a59-9e41-b50b-1ebb6810f22c"]; }
    get v25a1(): Season { return this.items["476b0893-4c2e-abd6-c5fe-708facff0772"]; }
    get v25a2(): Season { return this.items["16118998-4705-5813-86dd-0292a2439d90"]; }
    get v25a3(): Season { return this.items["aef237a0-494d-3a14-a1c8-ec8de84e309c"]; }
    get v25_1(): Season { return this.items["ac12e9b3-47e6-9599-8fa1-0bb473e5efc7"]; }
    get v25a4(): Season { return this.items["5adc33fa-4f30-2899-f131-6fba64c5dd3a"]; }
    get v25a5(): Season { return this.items["4c4b8cff-43eb-13d3-8f14-96b783c90cd2"]; }
    get v25a6(): Season { return this.items["c470d964-4bf4-1261-87aa-c484252f2d66"]; }
}
export class Sprays extends Collection<Spray> {
    constructor(json: any) {
        super(json, Spray);
    }
}
export class Weapons extends Collection<Weapon> {
    constructor(json: any) {
        super(json, Weapon);
    }

    get classic(): Weapon { return this.items["29a0cfab-485b-f5d5-779a-b59f85e204a8"]; }
    get shorty(): Weapon { return this.items["42da8ccc-40d5-affc-beec-15aa47b42eda"]; }
    get frenzy(): Weapon { return this.items["44d4e95c-4157-0037-81b2-17841bf2e8e3"]; }
    get ghost(): Weapon { return this.items["1baa85b4-4c70-1284-64bb-6481dfc3bb4e"]; }
    get sheriff(): Weapon { return this.items["e336c6b8-418d-9340-d77f-7a9e4cfe0702"]; }
    get stinger(): Weapon { return this.items["f7e1b454-4ad4-1063-ec0a-159e56b58941"]; }
    get spectre(): Weapon { return this.items["462080d1-4035-2937-7c09-27aa2a5c27a7"]; }
    get bucky(): Weapon { return this.items["910be174-449b-c412-ab22-d0873436b21b"]; }
    get judge(): Weapon { return this.items["ec845bf4-4f79-ddda-a3da-0db3774b2794"]; }
    get bulldog(): Weapon { return this.items["ae3de142-4d85-2547-dd26-4e90bed35cf7"]; }
    get guardian(): Weapon { return this.items["4ade7faa-4cf1-8376-95ef-39884480959b"]; }
    get phantom(): Weapon { return this.items["ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a"]; }
    get vandal(): Weapon { return this.items["9c82e19d-4575-0200-1a81-3eacf00cf872"]; }
    get marshal(): Weapon { return this.items["c4883e50-4494-202c-3ec3-6b8a9284f00b"]; }
    get outlaw(): Weapon { return this.items["5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c"]; }
    get operator(): Weapon { return this.items["a03b24d3-4319-996d-0f8c-94bbfba1dfc7"]; }
    get ares(): Weapon { return this.items["55d8a0f4-4274-ca67-fe2c-06ab45efdf58"]; }
    get odin(): Weapon { return this.items["63e6c2b6-4a8e-869c-3d4c-e38355226584"]; }
    get melee(): Weapon { return this.items["2f59173c-4bed-b6c3-2191-dea9b58be9c7"]; }
}

export const THEMES: Themes = new Themes(JsonThemes);
export const ROLES: Roles = new Roles(JsonRoles);
export const AGENTS: Agents = new Agents(JsonAgents);
export const BUDDIES: Buddies = new Buddies(JsonBuddies);
export const BUNDLES: Bundles = new Bundles(JsonBundles);
export const CEREMONIES: Ceremonies = new Ceremonies(JsonCeremonies);
export const COMPETITIVE_TIERS: CompetitiveTiers = new CompetitiveTiers(JsonCompetitiveTiers);
export const CONTENT_TIERS: ContentTiers = new ContentTiers(JsonContentTiers);
export const CONTRACTS: Contracts = new Contracts(JsonContracts);
export const CURRENCIES: Currencies = new Currencies(JsonCurrencies);
export const EVENTS: Events = new Events(JsonEvents);
export const FLEX: Flex = new Flex(JsonFlex);
export const GAME_MODES: GameModes = new GameModes(JsonGameModes);
export const GEARS: Gears = new Gears(JsonGears);
export const LEVEL_BORDERS: LevelBorders = new LevelBorders(JsonLevelBorders);
export const MAPS: Maps = new Maps(JsonMaps);
export const PLAYER_CARDS: PlayerCards = new PlayerCards(JsonPlayerCards);
export const PLAYER_TITLES: PlayerTitles = new PlayerTitles(JsonPlayerTitles);
export const SEASONS: Seasons = new Seasons(JsonSeasons);
export const SPRAYS: Sprays = new Sprays(JsonSprays);
export const WEAPONS: Weapons = new Weapons(JsonWeapons);

function mapToInstances<T, U>(jsonObject: { [uuid: string]: T }, constructor: new (data: T) => U): { [uuid: string]: U } {
    return Object.fromEntries(
        Object.entries(jsonObject).map(([uuid, item]) => [uuid, new constructor(item)])
    );
}