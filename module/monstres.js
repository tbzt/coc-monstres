import {MonstresActorSheet} from "./actor/actor-sheet.js";
import {MonstresNpcSheet} from "./actor/npc-sheet.js";
import {MonstresEncounterSheet} from "./actor/encounter-sheet.js";
import {MonstresItemSheet} from "./items/item-sheet.js";

Hooks.once("init", async () => {
    console.debug("Monstres - Initialization...");

    Actors.registerSheet("coc-monstres", MonstresActorSheet, {types: ["character"], makeDefault: true, label: "MONSTRES.sheet.actor"});
    Actors.registerSheet("coc-monstre", MonstresNpcSheet, {types: ["npc"], makeDefault: true, label: "MONSTRES.sheet.npc"});
    Actors.registerSheet("coc-monstre", MonstresEncounterSheet, {types: ["encounter"], makeDefault: true, label: "MONSTRES.sheet.encounter"});
    // Register item sheets
    Items.registerSheet("coc-monstre", MonstresItemSheet, {types: ["item", "trait", "capacity", "profile", "path", "encounterWeapon"], makeDefault: true, label: "MONSTRES.sheet.item"});

});
