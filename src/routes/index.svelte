<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<hero>
	<cta>
		<div>
			<h1 class="text-3xl">Explore the unknown.</h1>
			<h2 class="text-xl">with the world's first map based video browser</h2>
		</div>
	</cta>

	<div class="graphics">
		<img src="images/resting_person.svg" id="resting-person" />
		<div id="hero-vid">
			<img src="images/world_map_marked.svg" />
			<div id="vid-wrapper">
				<video autoplay loop muted>
					<source src="videos/sanfran.mp4" type="video/mp4" />
					Your browser does not support the video tag.
					<track kind="captions" />
				</video>
			</div>
		</div>
	</div>
	<Button class="z-20 mt-8">
		<span>Start now</span>
		<span>&gt</span>
	</Button>
</hero>

<style lang="scss">
	hero {
		@apply flex mt-24 px-10 md:px-24 flex-col items-center;
		min-height: 70vh;

		cta {
			@apply flex flex-col items-center;
			@apply mb-12 lg:mb-20;
		}
		.graphics {
			@apply flex;
			position: relative;
			#resting-person {
				position: absolute;
				bottom: 0;
				transform: translate(calc(-30vmin + 30px), calc(50px + 25vmin));
				@apply z-20;
			}
			background-color: var(--border-color);

			#hero-vid {
				@apply flex flex-col;
				border: 5px solid black;
				border-radius: 4px;
				min-width: 200px;
				// width: 600px;
				width: calc(200px + 35vmin);
				height: calc(100px + 19vmin);
				position: relative;

				#vid-wrapper {
					overflow: hidden;
					position: relative;
					width: 100%;
					height: 100%;

					@apply flex;
					video {
						width: 110%;
						height: 110%;
						object-fit: cover;
						object-position: 50% 100%;
					}
				}

				img {
					position: absolute;
					height: 25%;
					bottom: -2px;
					right: -2px;
					@apply z-20;
				}
				box-shadow: #000000 3px -3px;
			}
		}
	}
</style>
