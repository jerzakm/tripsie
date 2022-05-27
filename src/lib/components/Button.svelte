<script lang="ts">
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a
		{href}
		class={`button ${$$props.class}`}
		style={$$props.style}
		on:click
		on:mouseover
		on:mouseenter
		on:mouseleave
	>
		<slot />
	</a>
{:else}
	<button
		class={`button ${$$props.class}`}
		style={$$props.style}
		on:click
		on:mouseover
		on:mouseenter
		on:mouseleave
	>
		<slot />
	</button>
{/if}

<style lang="scss">
	.button {
		border: 4px inset var(--border-color);
		box-shadow: var(--primary-color) 3px 3px;

		@apply px-4 py-2 flex justify-between;
		background-color: var(--background-color);
		transform-origin: 50% 50%;
		transition: 100ms all ease-in;
		&:hover {
			background-color: var(--text-color);
			color: var(--background-color);
			box-shadow: var(--primary-color) 5px 5px;
			transform: scale(1.07);
		}

		&:active {
			transform: scale(1.03);
			box-shadow: var(--primary-color) 2px 2px;
		}
	}
</style>
