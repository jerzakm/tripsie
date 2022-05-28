<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from '$lib/components/Button.svelte';
	import { registerWithEmail } from '$lib/supabase/supaAuth';

	let email: string | undefined;
	let password: string | undefined;

	async function submitLogin(e: MouseEvent) {
		e.preventDefault();
		if (!email || !password) return;
		const res = await registerWithEmail(email, password);
		if (!res.error) {
			await goto('/user/thank-you');
		}
	}
</script>

<h1 class="text-2xl font-bold sm:text-3xl">Greetings explorer!</h1>
<p class="mt-4">
	Register to join the Tripsie community, explore the world map, watch videos, comment & share.
</p>
<form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
	<div>
		<label for="email" class="sr-only">Email</label>
		<div class="relative">
			<input type="email" class="login-input" placeholder="Enter email" bind:value={email} />

			<span class="absolute inset-y-0 inline-flex items-center right-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
					/>
				</svg>
			</span>
		</div>
	</div>

	<div>
		<label for="password" class="sr-only">Password</label>
		<div class="relative">
			<input
				type="password"
				class="login-input"
				placeholder="Enter password"
				bind:value={password}
			/>

			<span class="absolute inset-y-0 inline-flex items-center right-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
					/>
				</svg>
			</span>
		</div>
	</div>

	<div class="flex items-center w-full">
		<Button
			on:click={submitLogin}
			class="w-full"
			style="background-color: var(--primary-color); color: var(--background-color); justify-content:center; "
			>Create an account</Button
		>
	</div>
	<p class="text-sm ">
		You already have an account?
		<a class="underline font-bold" href="/user/sign-in">Sign in</a>
	</p>
</form>

<style lang="scss">
	.login-input {
		@apply w-full p-4 pr-12;
	}
</style>
