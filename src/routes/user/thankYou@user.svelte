<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	function submitLogin(e: MouseEvent) {
		e.preventDefault();
		console.log('logging in...');
	}
</script>

<h1 class="text-2xl font-bold sm:text-3xl">Almost there!</h1>
<p class="mt-4">Please check your email for confirmation</p>
<Button
	on:click={submitLogin}
	class="w-full"
	style="background-color: var(--primary-color); color: var(--background-color); justify-content:center; "
	>Sign in</Button
>

<style lang="scss">
	.login-input {
		@apply w-full p-4 pr-12 text-sm;
	}
</style>
