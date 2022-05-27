<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import '../styles/app.css';
	import '../styles/fonts.css';
</script>

<Navigation />

<slot />

<!-- <main>
	<slot />
</main> -->
<style>
	main {
		@apply flex flex-col;
	}
</style>
