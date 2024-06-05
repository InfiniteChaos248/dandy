<script>
    export let characterDetails;
    import {calculateSavingThrowModifier} from '../stats.js';
</script>

<div class="saving-throws">
    SAVING THROWS
    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('str')}
            *&nbsp;
        {/if}STRENGTH&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'str')}&nbsp;</span
        >
    </div>

    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('dex')}
            *&nbsp;
        {/if}DEXTERITY&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'dex')}&nbsp;</span
        >
    </div>

    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('con')}
            *&nbsp;
        {/if}CONSTITUTION&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'con')}&nbsp;</span
        >
    </div>

    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('int')}
            *&nbsp;
        {/if}INTELLIGENCE&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'int')}&nbsp;</span
        >
    </div>

    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('wis')}
            *&nbsp;
        {/if}WISDOM&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'wis')}&nbsp;</span
        >
    </div>

    <div class="saving-throw">
        {#if characterDetails.savingThrows.includes('cha')}
            *&nbsp;
        {/if}CHARISMA&nbsp;<span class="st-value"
            >&nbsp;{calculateSavingThrowModifier(characterDetails, 'cha')}&nbsp;</span
        >
    </div>
</div>

<style>
    .saving-throws {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.saving-throw {
		margin: 2px;
		padding: 2px;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.st-value {
		border-style: solid;
		border-width: 1px;
        width: 25px;
	}
</style>