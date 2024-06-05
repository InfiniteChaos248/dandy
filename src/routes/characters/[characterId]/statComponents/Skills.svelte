<script>
    export let characterDetails;

    import {calculateSkillModifier} from "../stats.js";
</script>

<div class="skills">
    SKILLS
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('acrobatics')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('acrobatics')}
        **
        {/if}&nbsp;ACROBATICS (DEX)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'acrobatics', 'dex')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('animal handling')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('animal handling')}
        **
        {/if}&nbsp;ANIMAL HANDLING (WIS)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'animal handling', 'wis')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('arcana')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('arcana')}
        **
        {/if}&nbsp;ARCANA (INT)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'arcana', 'int')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('athletics')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('athletics')}
        **
        {/if}&nbsp;ATHLETICS (STR)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'athletics', 'str')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('deception')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('deception')}
        **
        {/if}&nbsp;DECEPTION (CHA)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'deception', 'cha')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('history')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('history')}
        **
        {/if}&nbsp;HISTORY (INT)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'history', 'int')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('insight')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('insight')}
        **
        {/if}&nbsp;INSIGHT (WIS)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'insight', 'wis')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('intimidation')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('intimidation')}
        **
        {/if}&nbsp;INTIMIDATION (CHA)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'intimidation', 'cha')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('investigation')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('investigation')}
        **
        {/if}&nbsp;INVESTIGATION (INT)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'investigation', 'int')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('medicine')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('medicine')}
        **
        {/if}&nbsp;MEDICINE (WIS)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'medicine', 'wis')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('nature')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('nature')}
        **
        {/if}&nbsp;NATURE (INT)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'nature', 'int')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('perception')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('perception')}
        **
        {/if}&nbsp;PERCEPTION (WIS)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'perception', 'wis')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('performance')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('performance')}
        **
        {/if}&nbsp;PERFORMANCE (CHA)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'performance', 'cha')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('persuasion')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('persuasion')}
        **
        {/if}&nbsp;PERSUASION (CHA)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'persuasion', 'cha')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('religion')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('religion')}
        **
        {/if}&nbsp;RELIGION (INT)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'religion', 'int')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('sleight of hand')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('sleight of hand')}
        **
        {/if}&nbsp;SLEIGHT OF HAND (DEX)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'sleight of hand', 'dex')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('stealth')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('stealth')}
        **
        {/if}&nbsp;STEALTH (DEX)&nbsp;{#if characterDetails.equippedArmor && characterDetails.equippedArmor.stealthDisadvantage}[D]{/if}<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'stealth', 'dex')}&nbsp;</span
        >
    </div>
    <div class="skill">
        {#if characterDetails.skillProficiencies.includes('survival')}
            *
        {/if}
        {#if characterDetails.skillExpertise.includes('survival')}
            **
        {/if}&nbsp;SURVIVAL (WIS)&nbsp;<span class="sk-value"
            >&nbsp;{calculateSkillModifier(characterDetails, 'survival', 'wis')}&nbsp;</span
        >
    </div>
    &nbsp;&nbsp;passive = 10 + modifier
</div>

<style>
    .skills {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.skill {
		margin: 2px;
		padding: 2px;
		border-style: solid;
		border-width: 1px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}

	.sk-value {
		border-style: solid;
		border-width: 1px;
        width: 25px;
	}
</style>