<script>
    import { activePage } from '../store.js';
</script>

<header>
    <nav>
        <ul>
            <li aria-current={$activePage == 'home' ? 'page' : undefined}><a class="page"
                href="/"
                on:click={() => {
                    activePage.set('home');
                }}>Home</a></li>
            <li aria-current={$activePage == 'characters' ? 'page' : undefined}><a class="page"
                href="/characters"
                on:click={() => {
                    activePage.set('characters');
                }}>Characters</a></li>
			<li aria-current={$activePage == 'creator' ? 'page' : undefined}><a class="page"
                href="/creator"
                on:click={() => {
                    activePage.set('creator');
                }}>Character Creator</a></li>
            <li aria-current={$activePage == 'campaigns' ? 'page' : undefined}><a class="page"
                href="/campaigns"
                on:click={() => {
                    activePage.set('campaigns');
                }}>Campaigns</a></li>            
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

	li[aria-current='page'] .page {
		color: blue;
		font-size: 1rem;
	}

	.page {
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

	.page:hover {
		cursor: pointer;
		font-size: 1rem;
	}
</style>