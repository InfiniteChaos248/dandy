<script>
	import AbilityScores from "./statComponents/AbilityScores.svelte";
	import ArmorClass from "./statComponents/ArmorClass.svelte";
	import DeathSaves from "./statComponents/DeathSaves.svelte";
	import HitPoints from "./statComponents/HitPoints.svelte";
	import Initiative from "./statComponents/Initiative.svelte";
	import ProficiencyBonus from "./statComponents/ProficiencyBonus.svelte";
	import SavingThrows from "./statComponents/SavingThrows.svelte";
	import Skills from "./statComponents/Skills.svelte";

	export let characterDetails;	

	import {calculateArmorClass} from "./stats.js";
	characterDetails.armorClass = calculateArmorClass(characterDetails);
</script>

<div class="stats">
	<AbilityScores {characterDetails} />
	<ProficiencyBonus {characterDetails} />
	<SavingThrows {characterDetails} />
	<Skills {characterDetails} />
	<Initiative {characterDetails} />
	<ArmorClass bind:characterDetails={characterDetails} />
	<HitPoints bind:characterDetails={characterDetails} />
	<DeathSaves />
</div>

<style>
	.stats {
		display: flex;
		padding: 2px;
		gap: 10px;
	}
</style>
