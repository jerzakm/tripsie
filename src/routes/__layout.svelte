<script context="module">
	// @ts-ignore
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	export let url = '';
	import Navigation from '$lib/components/Navigation.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
</script>

{#key url}
	<Navigation />
{/key}

<slot />

<!-- <main>
	<slot />
</main> -->
<style>
	main {
		@apply flex flex-col;
	}
</style>
