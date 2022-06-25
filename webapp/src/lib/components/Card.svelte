<card class={$$props.class}>
	<slot />
</card>

<style lang="scss">
	card {
		@apply text-center px-4 py-8 xl:px-16 lg:pt-16 grow;
		// max-width: calc(20rem + 25vmin);
		border: solid var(--border-color) 8px;
		background-color: var(--surface-background-color);
		box-shadow: var(--primary-color) 5px 5px;
	}
</style>
