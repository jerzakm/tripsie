<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
</script>

<Navigation />
<main>
	<slot />
</main>

<style>
	main {
		@apply flex flex-1 flex-col;
	}
</style>
