function calculateAbilityModifier(abilityScore) {
    let mod = Math.floor((abilityScore - 10) / 2);
    return mod < 0 ? mod : '+' + mod;
}

function calculateSkillModifier(characterDetails, skillName, abilityScoreName) {
    let profBonus = 0;
    if (characterDetails.skillProficiencies.includes(skillName)) {
        profBonus = Number(characterDetails.proficiencyBonus);
    } else if (characterDetails.skillExpertise.includes(skillName)) {
        profBonus = Number(characterDetails.proficiencyBonus) * 2;
    }
    let abilityScoreValue = characterDetails.abilityScores[abilityScoreName];
    let mod = Number(calculateAbilityModifier(abilityScoreValue));
    mod = profBonus + mod;
    return mod < 0 ? mod : '+' + mod;
}

function calculateSavingThrowModifier(characterDetails, abilityScoreName) {
    let abilityScoreValue = characterDetails.abilityScores[abilityScoreName];
    let mod = Number(calculateAbilityModifier(abilityScoreValue));
    if (characterDetails.savingThrows.includes(abilityScoreName)) {
        mod = mod + Number(characterDetails.proficiencyBonus);
    }
    return mod < 0 ? mod : '+' + mod;
}

function calculateArmorClass(characterDetails) {
    let base = 10;
    let dex = 0;
    let shield = 0;
    if(characterDetails.equippedArmor) {       
        let armor = characterDetails.equippedArmor;
        base = armor.acBase;
        if(armor.dexMod) {
            dex = calculateAbilityModifier(characterDetails.abilityScores.dex);
            if(armor.dexModCap && dex > armor.dexModCap) {
                dex = armor.dexModCap;
            }
        }
    }
    if(characterDetails.equippedShield) {
        shield = characterDetails.equippedShield.acBonus;
    }
    let ac = Number(base) + Number(dex) + Number(shield);    
    return ac;
}

export {calculateAbilityModifier, calculateSkillModifier, calculateSavingThrowModifier, calculateArmorClass};