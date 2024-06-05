<script>
	import ModInt from "./statComponents/ModInt.svelte";

    export let characterDetails;

    import {calculateArmorClass} from "./stats.js";

    function equip(id) {
        let itemIndex = characterDetails.adventuringGear.findIndex(gear => gear.id == id);
        if(itemIndex >= 0) {
            characterDetails.adventuringGear[itemIndex].equipped = true;
            let item = characterDetails.adventuringGear[itemIndex];
            if(item.type == "armor") {
                characterDetails.armorEquipped = item.data.name;
                characterDetails.equippedArmor = item.data;
                characterDetails.armorClass = calculateArmorClass(characterDetails);
            }
            if(item.type == "shield") {
                characterDetails.shieldEquipped = item.data.name;
                characterDetails.equippedShield = item.data;
                characterDetails.armorClass = calculateArmorClass(characterDetails);
            }
        }
    }

    function unequip(id) {
        let itemIndex = characterDetails.adventuringGear.findIndex(gear => gear.id == id);
        if(itemIndex >= 0) {
            characterDetails.adventuringGear[itemIndex].equipped = false;
            let item = characterDetails.adventuringGear[itemIndex];
            if(item.type == "armor") {
                characterDetails.armorEquipped = false;
                characterDetails.equippedArmor = null;
                characterDetails.armorClass = calculateArmorClass(characterDetails);
            }
            if(item.type == "shield") {
                characterDetails.shieldEquipped = false;
                characterDetails.equippedShield = null;
                characterDetails.armorClass = calculateArmorClass(characterDetails);
            }
        }
    }
</script>

<div class="inv-container">
    <div class="inv-coins">COINS
        <div class="inv-coin">COPPER&nbsp;<span class="inv-coin-value"><ModInt bind:value={characterDetails.coins.copper} /></span></div>
        <div class="inv-coin">SILVER&nbsp;<span class="inv-coin-value"><ModInt bind:value={characterDetails.coins.silver} /></span></div>
        <div class="inv-coin">ELECTRUM&nbsp;<span class="inv-coin-value"><ModInt bind:value={characterDetails.coins.electrum} /></span></div>
        <div class="inv-coin">GOLD&nbsp;<span class="inv-coin-value"><ModInt bind:value={characterDetails.coins.gold} /></span></div>
        <div class="inv-coin">PLATINUM&nbsp;<span class="inv-coin-value"><ModInt bind:value={characterDetails.coins.platinum} /></span></div>
    </div>

    <div class="inv-adv-gear">
        <table>
            <tr>
                <th>ADVENTURING GEAR</th>
                <th>#</th>
                <th>lb</th>
            </tr>
            {#each characterDetails.adventuringGear as item}
                <tr>
                    <td>
                        {item.name}&nbsp;
                        {#if item.equippable}
                            {#if item.equipped}
                                <span class="equip-unequip" on:click={() => unequip(item.id)} on:keydown={() => unequip(item.id)} role="button" tabindex=0>[E]</span>
                            {:else}
                                <span class="equip-unequip" on:click={() => equip(item.id)} on:keydown={() => equip(item.id)} role="button" tabindex=0>[U]</span>
                            {/if}
                        {/if}
                    </td>
                    <td>{item.count}</td>
                    <td>{item.weightInLb}</td>
                </tr>
            {/each}
        </table>
    </div>
</div>

<style>
    .inv-container {
		display: flex;
		padding: 2px;
		gap: 10px;
	}

    .inv-coins {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.inv-coin {
		margin: 2px;
		padding: 2px;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.inv-coin-value {
		border-style: solid;
		border-width: 1px;
	}

    .inv-adv-gear {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

    th, td {
        border:1px solid black;
    }

    .equip-unequip {
        font-weight: bold;
        cursor: pointer;
    }
</style>