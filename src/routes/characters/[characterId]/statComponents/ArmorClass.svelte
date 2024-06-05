<script>
    export let characterDetails;	
</script>

<div class="ac-container">
    <div class="ac-content">AC&nbsp;
		<span class="ac-value">&nbsp;{characterDetails.armorClass}&nbsp;</span>
	</div>
	<div class="ac-content">
		ARMOR&nbsp;
			{#if characterDetails.armorEquipped}
			<span class="ac-text">{characterDetails.equippedArmor.name}</span>
			{:else}
			<span class="ac-text">unequipped</span>
			{/if}
	</div>
	<div class="ac-content">
		SHIELD&nbsp;{#if characterDetails.shieldEquipped}
		<span class="ac-text">{characterDetails.equippedShield.name}</span>
		{:else}
		<span class="ac-text">unequipped</span>
		{/if}
	</div>
</div>

<style>
    .ac-container {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.ac-content {
		margin: 2px;
		padding: 2px;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.ac-value {
		border-style: solid;
		border-width: 1px;
        width: 25px;
	}

	.ac-text {
		border-style: solid;
		border-width: 1px;
		cursor: pointer;
	}
</style>