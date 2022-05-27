<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 250;
</script>

{#key url}
	<content>
		<card>
			<div in:fly={{ duration: pageTransitionDuration, delay: pageTransitionDuration / 5, y: 50 }}>
				<slot />
			</div>
		</card>
	</content>
{/key}

<img src="/images/login_topography.svg" id="background" alt="topography vector background" defer />

<style>
	#background {
		@apply fixed top-0 left-0;
		z-index: -10;
		pointer-events: none;
	}

	content {
		@apply relative flex h-screen items-center;
	}
	card {
		@apply mx-auto text-center px-4 py-8 xl:px-16 lg:py-16;
		max-width: calc(20rem + 25vmin);
		border: solid var(--border-color) 8px;
		background-color: var(--background-color);
		box-shadow: var(--primary-color) 5px 5px;
	}
</style>
