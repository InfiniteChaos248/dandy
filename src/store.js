import { writable } from 'svelte/store';

const activePage = writable('home');
const activeSheetSection = writable('stats');

const testCharacters = writable([
    {
        id: "c1",
        name: "Gandalf",
        level: "3",
        race: "Human",
        class: "Wizard"
    },
    {
        id: "c2",
        name: "Miss Stabby",
        level: "3",
        race: "Tiefling",
        class: "Rogue"
    },
    {
        id: "c2",
        name: "Nyan",
        level: "3",
        race: "Tabaxi",
        class: "Barbarian"
    }
]);

const characterMap = writable({
    "c1": {
        id: "c1",
        name: "Amelia Frost",
        level: "3",
        race: "Human",
        class: "Cleric",
        proficiencyBonus: "+2",
        armorClass: 18,
        maximumHitPoints: 24,
        temporaryHitPoints: 0,
        hitPoints: 24,
        hitDie: "d8",
        attacksPerAttackAction: 1,
        abilityScores: {
            str: 13,
            dex: 10,
            con: 14,
            int: 8,
            wis: 18,
            cha: 8
        },
        savingThrows: ["wis", "cha"],
        skillProficiencies: ["athletics", "insight", "medicine", "perception"],
        skillExpertise: ["animal handling", "sleight of hand"],
        coins: {copper: 10, silver: 10, electrum: 0, gold: 0, platinum: 20},
        armorEquipped: "Scale Mail",
        equippedArmor: {
            id: 6,
            category: "Medium Armor",
            name: "Scale Mail",
            acBase: 14,
            dexMod: true,
            dexModCap: 2,
            strength: null,
            stealthDisadvantage: true,
            weightInLb: 45,
            costInGp: 50
        },
        shieldEquipped: "Shield",
        equippedShield: {
            id: 14,
            category: "Shield",
            name: "Shield",
            acBase: 0,
            acBonus: 2,
            dexMod: false,
            dexModCap: null,
            strength: null,
            stealthDisadvantage: false,
            weightInLb: 6,
            costInGp: 10,
            donInMin: 0.1,
            doffInMin: 0.1
        },
        adventuringGear: [
            {
                id: 1,
                name: "Chain Mail",
                type: "armor",
                count: 1,
                weightInLb: 45,
                equippable: true,
                equipped: true,
                data: {
                    id: 6,
                    category: "Medium Armor",
                    name: "Scale Mail",
                    acBase: 14,
                    dexMod: true,
                    dexModCap: 2,
                    strength: null,
                    stealthDisadvantage: true,
                    weightInLb: 45,
                    costInGp: 50
                }
            },
            {
                id: 2,
                name: "Shield",
                type: "shield",
                count: 1,
                weightInLb: 6,
                equippable: true,
                equipped: true,
                data: {
                    id: 14,
                    category: "Shield",
                    name: "Shield",
                    acBase: 0,
                    acBonus: 2,
                    dexMod: false,
                    dexModCap: null,
                    strength: null,
                    stealthDisadvantage: false,
                    weightInLb: 6,
                    costInGp: 10,
                    donInMin: 0.1,
                    doffInMin: 0.1
                }
            }
        ]
    }
});

const armorList = [
    {
        id: 1,
        category: "Light Armor",
        name: "Padded",
        acBase: 11,
        dexMod: true,
        dexModCap: null,
        strength: null,
        stealthDisadvantage: true,
        weightInLb: 8,
        costInGp: 5,
        donInMin: 1,
        doffInMin: 1
    },
    {
        id: 2,
        category: "Light Armor",
        name: "Leather",
        acBase: 11,
        dexMod: true,
        dexModCap: null,
        strength: null,
        stealthDisadvantage: false,
        weightInLb: 10,
        costInGp: 10,
        donInMin: 1,
        doffInMin: 1
    },
    {
        id: 3,
        category: "Light Armor",
        name: "Studded Leather",
        acBase: 12,
        dexMod: true,
        dexModCap: null,
        strength: null,
        stealthDisadvantage: false,
        weightInLb: 13,
        costInGp: 45,
        donInMin: 1,
        doffInMin: 1
    },
    {
        id: 6,
        category: "Medium Armor",
        name: "Scale Mail",
        acBase: 14,
        dexMod: true,
        dexModCap: 2,
        strength: null,
        stealthDisadvantage: true,
        weightInLb: 45,
        costInGp: 50,
        donInMin: 5,
        doffInMin: 1
    },
    {
        id: 14,
        category: "Shield",
        name: "Shield",
        acBase: 0,
        acBonus: 2,
        dexMod: false,
        dexModCap: null,
        strength: null,
        stealthDisadvantage: false,
        weightInLb: 6,
        costInGp: 10,
        donInMin: 0.1,
        doffInMin: 0.1
    }
];

export {activePage, activeSheetSection, testCharacters, characterMap, armorList};