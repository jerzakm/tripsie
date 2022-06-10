<card>
	<slot />
</card>

<style lang="scss">
	card {
		@apply mx-2 text-center px-4 py-8 xl:px-16 lg:pt-16 grow;
		max-width: calc(20rem + 25vmin);
		border: solid var(--border-color) 8px;
		background-color: var(--background-color);
		box-shadow: var(--primary-color) 5px 5px;
	}
</style>
