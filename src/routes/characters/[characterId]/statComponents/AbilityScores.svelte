<script>
	export let characterDetails;

    import {calculateAbilityModifier} from "../stats.js";
</script>

<div class="ability-scores">
    <div class="ability-score">
        <span class="as-name">STRENGTH</span>
        <span class="as-value">{characterDetails.abilityScores.str}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.str)}</span>
    </div>
    <div class="ability-score">
        <span class="as-name">DEXTERITY</span>
        <span class="as-value">{characterDetails.abilityScores.dex}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.dex)}</span>
    </div>
    <div class="ability-score">
        <span class="as-name">CONSTITUTION</span>
        <span class="as-value">{characterDetails.abilityScores.con}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.con)}</span>
    </div>
    <div class="ability-score">
        <span class="as-name">INTELLIGENCE</span>
        <span class="as-value">{characterDetails.abilityScores.int}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.int)}</span>
    </div>
    <div class="ability-score">
        <span class="as-name">WISDOM</span>
        <span class="as-value">{characterDetails.abilityScores.wis}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.wis)}</span>
    </div>
    <div class="ability-score">
        <span class="as-name">CHARISMA</span>
        <span class="as-value">{characterDetails.abilityScores.cha}</span>
        <span class="as-mod">{calculateAbilityModifier(characterDetails.abilityScores.cha)}</span>
    </div>
</div>

<style>
    .ability-scores {
		display: flex;
		flex-direction: column;
		width: fit-content;
        height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.ability-score {
		margin: 2px;
		padding: 2px;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}

    .as-name {
		display: flex;
		justify-content: center;
	}
	.as-value {
		display: flex;
		justify-content: center;
		font-weight: bolder;
		font-size: larger;
	}
	.as-mod {
		display: flex;
		justify-content: center;
		border-style: solid;
		border-width: 1px;
		font-weight: bold;
		font-size: large;
	}
</style>