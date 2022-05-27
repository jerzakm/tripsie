<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
</script>

<!-- <Header /> -->
<Navigation />
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
