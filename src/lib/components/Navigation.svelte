<script>
	import Button from '$lib/components/Button.svelte';
	import { signOut, userStore } from '$lib/supabase/supaAuth';
</script>

<nav>
	<input type="checkbox" id="nav" />
	<label for="nav">
		<span />
		<span />
		<span />
	</label>
	<menu class="menu">
		<a href="/"><img src="/tripsie.svg" alt="Tripsie website logo" class="h-12 inline logo" /></a>
		<ul>
			<li><a href="/"><span>Places</span></a></li>
			<li><a href="/">Creators</a></li>
			<li><a href="/">Deals</a></li>
			<li><a href="/">Community</a></li>
			<li><a href="/">About</a></li>
		</ul>
		<div class="items-center justify-end space-x-4 font-bold flex">
			{#if $userStore}
				<span class="text-xs font-normal">{$userStore.email}</span>
				<Button
					on:click={async () => {
						await signOut();
					}}>Sign out</Button
				>
			{:else}
				<Button class="w-full" href="/user/signin">Sign in</Button>
			{/if}
		</div>
	</menu>
</nav>

<style lang="scss">
	nav {
		@apply fixed top-0 p-5 w-full;
		@apply flex justify-between items-center;
		z-index: 9999;
		background: var(--background-color);
		label {
			@apply absolute hidden top-0 right-0 cursor-pointer;
			height: 70px;
			width: 70px;
			background: var(--primary-color);
			z-index: 9999;
			span {
				display: block;
				margin: 4px auto;
				height: 4px;
				width: 25px;
				border-radius: 1px;
				background: var(--text-color);
				transition: 0.5s;
			}
			span:nth-child(1) {
				margin-top: 25px;
			}
		}
	}

	.menu {
		position: relative;
		@apply flex justify-between w-full;
		@apply text-base font-bold;
		transition: top 0.25s cubic-bezier(0.175, 0.885, 0.32, 1);
		ul {
			@apply flex space-x-1 sm:space-x-2 lg:space-x-4;
		}
		li {
			@apply flex mr-4 cursor-pointer flex-col justify-center;
		}
	}

	a {
		// transition: 200ms all;
		@apply px-2 py-1;
		position: relative;
		&:hover {
			color: var(--primary-color);
		}
		&:before {
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 5px;
			bottom: -2px;
			left: 0;
			background-color: #000;
			transform-origin: 69% 0%;
			transform: scaleX(0);
			transition: transform 0.09s ease-in-out;
		}
		&:hover::before {
			transform: scaleX(1) rotateZ(-1deg);
		}
	}

	input[type='checkbox'] {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	input[type='checkbox']:checked ~ .menu {
		top: 0;
	}

	input[type='checkbox']:checked ~ label span {
		background: var(--background-color);
	}

	input[type='checkbox']:checked ~ label span:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}

	input[type='checkbox']:checked ~ label span:nth-child(2) {
		opacity: 0;
	}

	input[type='checkbox']:checked ~ label span:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	@media (max-width: 768px) {
		.menu {
			@apply flex flex-col-reverse items-center;
			@apply absolute py-16 m-0;
			margin: 0;
			top: -100vh;
			left: 0;
			height: 100vh;
			width: 100%;
			background: var(--primary-color);
			ul {
				@apply flex flex-col;
			}
			li {
				margin: 20px;
				font-size: 1.5em;
				color: var(--background-color);
				a {
					&:hover {
						color: var(--text-color);
					}
				}
			}
		}

		nav {
			label {
				display: block;
			}
		}

		p {
			margin: 35px 50px;
		}
	}
</style>
