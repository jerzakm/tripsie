<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	function submitLogin(e: MouseEvent) {
		e.preventDefault();
		console.log('logging in...');
	}
</script>

<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<!-- <img
	src="/images/login_topography.svg"
	class="fixed top-0 left-0"
	alt="topography vector background"
/> -->

<content>
	<card>
		<h1 class="text-2xl font-bold sm:text-3xl">Welcome!</h1>
		<p class="mt-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
			ipsa culpa autem, at itaque nostrum!
		</p>
		<form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
			<div>
				<label for="email" class="sr-only">Email</label>
				<div class="relative">
					<input type="email" class="login-input" placeholder="Enter email" />

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
					<input type="password" class="login-input" placeholder="Enter password" />

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
			<p class="text-sm ">
				No account?
				<a class="underline font-bold" href="/user/signup">Sign up</a>
			</p>
		</form>
	</card>
</content>

<style lang="scss">
	content {
		@apply relative flex h-screen items-center overflow-hidden;
	}
	card {
		@apply mx-auto text-center px-4 py-8 xl:px-16 lg:py-16;
		max-width: calc(20rem + 25vmin);
		border: solid var(--border-color) 8px;
		background-color: var(--background-color);
		box-shadow: var(--primary-color) 5px 5px;
	}

	.login-input {
		@apply w-full p-4 pr-12 text-sm;
	}
</style>
