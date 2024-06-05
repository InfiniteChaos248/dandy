<script>
	import { activeSheetSection } from '../../../store.js';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$activeSheetSection == 'info' ? 'page' : undefined}>
				<span
					class="section"
					role="button"
					tabindex="0"
					on:click={() => {
						activeSheetSection.set('info');
					}}
					on:keydown={() => {
						activeSheetSection.set('info');
					}}>Info</span
				>
			</li>
			<li aria-current={$activeSheetSection == 'stats' ? 'page' : undefined}>
				<span
					class="section"
					role="button"
					tabindex="0"
					on:click={() => {
						activeSheetSection.set('stats');
					}}
					on:keydown={() => {
						activeSheetSection.set('stats');
					}}>Stats</span
				>
			</li>
			<li aria-current={$activeSheetSection == 'spells' ? 'page' : undefined}>
				<span
					class="section"
					role="button"
					tabindex="0"
					on:click={() => {
						activeSheetSection.set('spells');
					}}
					on:keydown={() => {
						activeSheetSection.set('spells');
					}}>Spells</span
				>
			</li>
			<li aria-current={$activeSheetSection == 'inventory' ? 'page' : undefined}>
				<span
					class="section"
					role="button"
					tabindex="0"
					on:click={() => {
						activeSheetSection.set('inventory');
					}}
					on:keydown={() => {
						activeSheetSection.set('inventory');
					}}>Inventory</span
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] .section {
		color: blue;
		font-size: 1rem;
	}

	.section {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.section:hover {
		cursor: pointer;
		font-size: 1rem;
	}
</style>
