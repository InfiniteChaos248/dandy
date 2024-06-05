<script>
    export let characterDetails;
</script>

<div class="prof-bonus">
    PROFICIENCY BONUS&nbsp;<span class="pb-value"
        >&nbsp;{characterDetails.proficiencyBonus}&nbsp;</span
    >
</div>

<style>
    .prof-bonus {
		display: flex;
		flex-direction: row;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.pb-value {
		border-style: solid;
		border-width: 1px;
        width: 25px;
	}
</style>