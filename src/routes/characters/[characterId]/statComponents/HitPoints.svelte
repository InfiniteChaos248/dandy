<script>
	import ModInt from "./ModInt.svelte";

    export let characterDetails;	
</script>

<div class="hp-box">
    <div class="hp-box-content">MAXIMUM&nbsp;<span class="hp-box-value">&nbsp;{characterDetails.maximumHitPoints}&nbsp;</span></div>
    <div class="hp-box-content">HIT DICE&nbsp;<span class="hp-box-value">&nbsp;{characterDetails.level + characterDetails.hitDie}&nbsp;</span></div>
    <div class="hp-box-content">TEMPORARY&nbsp;<span class="hp-box-value"><ModInt bind:value={characterDetails.temporaryHitPoints} /></span></div>    
	<div class="hp-box-content">CURRENT HIT POINTS&nbsp;<span class="hp-box-value"><ModInt bind:value={characterDetails.hitPoints} /></span></div>			
</div>

<style>
    .hp-box {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.hp-box-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-style: solid;
		border-width: 1px;
		padding: 1px;
	}

	.hp-box-value {
		border-style: solid;
		border-width: 1px;
        width: 64px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}	
</style>