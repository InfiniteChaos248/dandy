<script>
    export let characterDetails;
    import {calculateAbilityModifier} from "../stats.js";
</script>

<div class="initiative">
    INITIATIVE&nbsp;<span class="initiative-value"
        >&nbsp;{calculateAbilityModifier(characterDetails.abilityScores.dex)}&nbsp;</span
    >&nbsp;{characterDetails.attacksPerAttackAction}&nbsp;Attack / Attack Action
</div>

<style>
    .initiative {
		display: flex;
		flex-direction: row;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.initiative-value {
		border-style: solid;
		border-width: 1px;
        width: 25px;
	}
</style>