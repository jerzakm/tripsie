<script lang="ts">
</script>

<hero>
	<cta>
		<div>
			<h1>Explore the unknown.</h1>
			<h2>with the world's first map based video browser</h2>
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

			<button id="cta-start-btn">
				<span>Start now</span>
				<span>&gt</span>
			</button>
		</div>
	</div>
</hero>

<style lang="scss">
	#cta-start-btn {
		@apply px-4 py-2 flex justify-between absolute;
		font-size: 1.8rem;
		border: 2px solid black;
		box-shadow: #e55151 3px 3px;
		background-color: #fcf4e7;
		bottom: -120px;
		right: 0;
		width: 50%;

		@apply z-20;
	}

	hero {
		@apply flex mt-24 px-24 flex-col items-center;
		min-height: 70vh;

		cta {
			@apply flex flex-col items-center;
			div {
				min-height: 20vh;
			}
		}
		.graphics {
			@apply flex;
			position: relative;
			#resting-person {
				position: absolute;
				bottom: 0;
				transform: translate(-45%, 45%);
				@apply z-20;
			}

			#hero-vid {
				@apply flex flex-col;
				border: 3px solid black;
				border-radius: 4px;
				width: 600px;
				height: 320px;
				position: relative;

				#vid-wrapper {
					overflow: hidden;
					max-height: 100%;
					position: relative;
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
