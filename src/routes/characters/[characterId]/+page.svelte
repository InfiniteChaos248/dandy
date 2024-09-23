<script>
	import { onMount } from 'svelte';
	import { characterData, activePage, activeSheetSection, armorList } from '../../../store.js';
	import { page } from '$app/stores';
	import Sections from './Sections.svelte';
	import Info from './Info.svelte';
	import Stats from './Stats.svelte';
	import Spells from './Spells.svelte';
	import Inventory from './Inventory.svelte';

    activePage.set('characters');

	let characterDetails = undefined;

	let promise = new Promise(() => {});
	onMount(() => {
		promise = (() => {
			// const res = await fetch(`/tutorial/api/album`);
			// photos = await res.json();
				characterDetails = $characterData;				

				if(characterDetails.armorEquipped) {
					characterDetails.equippedArmor = $armorList.find((armor) => armor['name'] == characterDetails.armorEquipped);    
				}
				
				if(characterDetails.shieldEquipped) {
					characterDetails.equippedShield = $armorList.find((armor) => armor['name'] == characterDetails.shieldEquipped);    
				}

				characterDetails.adventuringGear.forEach(gear => {
					gear.data = $armorList.find((armor) => armor['name'] == gear.name);
				});

			return;
		})();
	});
</script>

{#await promise}
	<p>...loading</p>
{:then number}
	{#if characterDetails}
		<Sections />

		{#if $activeSheetSection == 'info'}
			<Info />
		{:else if $activeSheetSection == 'stats'}
			<Stats bind:characterDetails={characterDetails} />
		{:else if $activeSheetSection == 'spells'}
			<Spells />
		{:else if $activeSheetSection == 'inventory'}
			<Inventory bind:characterDetails={characterDetails} />
		{:else}
			<Info />
		{/if}
	{:else}
		<div>Character Not Found</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
