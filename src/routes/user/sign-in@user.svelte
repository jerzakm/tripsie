<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import LottieAnimation from '$lib/components/LottieAnimation/index.svelte';
	import { signInWithEmail } from '$lib/supabase/supaAuth';
	import { Stretch } from 'svelte-loading-spinners';
	import { createEventDispatcher, onMount } from 'svelte';
	import anime from 'animejs';

	let email: string | undefined = '';
	let password: string | undefined = '';

	let status: 'SIGN_IN' | 'SIGNING_IN' | 'SIGNED_IN' = 'SIGN_IN';

	let errorMessage: string | undefined;
	let errorMessageEl: HTMLElement | undefined;

	export let err = 'testing';

	let errorElement: any;

	$: errorAnimation =
		errorElement &&
		anime({
			targets: errorElement,
			translateX: [-10, 10, -10, 10],
			loop: 2,
			autoplay: false,
			duration: 180,
			easing: 'easeOutSine'
		});

	$: errorMessage && errorAnimation?.play();

	onMount(() => {
		errorElement = errorMessageEl?.parentElement?.parentElement?.parentElement;
	});

	async function submitLogin(e: MouseEvent) {
		e.preventDefault();

		const start = new Date().getTime() * 1;

		status = 'SIGNING_IN';

		if (!email || !password) {
			status = 'SIGN_IN';
			return;
		}
		const { error, session, user } = await signInWithEmail(email, password);

		// SUCCESS
		if (!error && session) {
			const end = new Date().getTime() + 1;

			const delay = 1000 - (end - start);

			setTimeout(() => (status = 'SIGNED_IN'), delay);
		}

		// ERROR
		if (error) {
			errorMessage = undefined;
			status = 'SIGN_IN';
			errorMessage = error.message;
		}

		console.log({ error, session, user });
	}
</script>

<h1 class="text-2xl font-bold sm:text-3xl">Welcome!</h1>
<p class="mt-4">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa
	culpa autem, at itaque nostrum!
</p>

<div
	class="logging-in-field"
	style={`transform: scale${status != 'SIGN_IN' ? '(1.05)' : '(0.0)'};`}
>
	{#if status == 'SIGNING_IN'}
		<h2 class="text-2xl">Signing in..</h2>
		<Stretch size="30" color="var(--primary-color)" unit="%" duration="2s" />
	{:else if status == 'SIGNED_IN'}
		<h2 class="text-2xl">Yay! You're in!</h2>
		<div class="h-64">
			<LottieAnimation icon="confetti" autoplay />
		</div>
		<Button href="/" class="w-full">Let's go!</Button>
	{/if}
</div>

<form
	action=""
	class={`max-w-md mx-auto mt-8 mb-0 space-y-4 relative ${
		status == 'SIGNED_IN' ? 'opacity-0' : ''
	}`}
>
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
			>Sign in</Button
		>
	</div>
	<p class="h-8 w-full mt-16 login-error-message" bind:this={errorMessageEl}>
		{errorMessage || ''}
	</p>
	<p class="text-sm">
		No account?
		<a class="underline font-bold" href="/user/sign-up">Sign up</a>
	</p>
</form>

<style lang="scss">
	.login-input {
		@apply w-full p-4 pr-12;
	}
	.logging-in-field {
		@apply absolute w-full h-full flex flex-col items-center justify-around top-0 left-0;
		background-color: var(--background-color);
		z-index: 50;
		transform-origin: 50% 50%;
		transition: 0.05s ease-in all;
		h2 {
			@apply font-bold mt-4 mb-4;
		}
	}
	.login-error-message {
		color: var(--error-color);
	}
</style>
