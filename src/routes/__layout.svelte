<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
</script>

<Header />
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
