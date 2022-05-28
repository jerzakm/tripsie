<script lang="ts">
	import lottie from 'lottie-web';
	import type { AnimationItem } from 'lottie-web';
	import { onMount } from 'svelte';
	import { iconDictionary } from './iconDictionary';

	let container: HTMLElement;

	export let loop = false;
	export let autoplay = false;
	export let icon: keyof typeof iconDictionary;
	export let animation: AnimationItem | undefined = undefined;

	onMount(() => {
		animation = lottie.loadAnimation({
			container, // the dom element that will contain the animation
			renderer: 'svg',
			loop,
			autoplay,
			path: iconDictionary[icon]
		});
	});
</script>

<animatedIcon bind:this={container} />
