<script>    
    import { onMount } from 'svelte';
    import { activePage, testCharacters } from '../../store.js';
    import { goto } from '$app/navigation';

	activePage.set('characters');

    

function routeToPage(route, replaceState) {
   goto(`/${route}`, { replaceState }) 
}

let characters = [];

onMount(async () => {
    // const res = await fetch(`/tutorial/api/album`);
    // photos = await res.json();
    characters = $testCharacters;
});

function characterIsClicked(characterId) {
    goto(`/characters/${characterId}`, false);
}

function plusIsClicked() {
    goto('/creator', false);
    activePage.set('creator');
}
</script>

<div class="characters">
    {#each characters as character}
    <div class="character" on:click={() => {
        characterIsClicked(character.id)
    }} on:keydown={() => {
        characterIsClicked(character.id)
    }} role="button" tabindex=0>
        <img src="/favicon.png" alt="character icon"/>
        <div class="character-details">
            <h3>{character.name}</h3>
            <h4>level {character.level}</h4>
            <h5>{character.race} {character.class}</h5>
        </div>        
    </div>
	{:else}
		<p>loading...</p>
	{/each}

    <div class="character" style="width: 10rem;" on:click={() => {
        plusIsClicked()
    }} on:keydown={() => {
        plusIsClicked()
    }} role="button" tabindex=0>
        <div class="character-details">
            <h1>+</h1>
        </div>
    </div>
</div>

<style>
    .characters {
        display: flex;        
    }

    .character {
        border-style: solid;
        border-width: 1px;
        border-color: blue;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  cursor: pointer;
}

.character:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.character-details {
  padding: 2px 16px;
}
</style>