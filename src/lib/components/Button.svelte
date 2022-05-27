<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {href} class={`button ${$$props.class}`} style={$$props.style}>
		<slot />
	</a>
{:else}
	<button class={`button ${$$props.class}`} style={$$props.style}>
		<slot />
	</button>
{/if}

<style>
	.button {
		border: 2px solid var(--border-color);
		box-shadow: var(--primary-color) 3px 3px;
		@apply px-4 py-2 flex justify-between absolute font-normal;
		font-size: 1.8rem;
		background-color: var(--background-color);
	}
</style>
