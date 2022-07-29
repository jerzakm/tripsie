<script lang="ts">
	import 'mapbox-gl/dist/mapbox-gl.css';

	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';

	let mapEl: any;

	export let lngLat: [number, number] = [-90, -90];

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiamVyemFrbSIsImEiOiJjangxaHF4MGcwN3ZqNGJubzl2Zzdva3N5In0.DRchXs3ESLUuoH9Kh_N-ow';

		const map = new mapboxgl.Map({
			container: mapEl, // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9 // starting zoom
		});
		map.on('style.load', () => {
			map.setFog({}); // Set the default atmosphere style
		});

		const marker = new mapboxgl.Marker({ draggable: true }).setLngLat(lngLat).addTo(map);

		map.on('click', (e) => {
			lngLat = [e.lngLat.lng, e.lngLat.lat];
			marker.setLngLat(lngLat);
		});
	});
</script>

<map bind:this={mapEl} class="w-full h-full" />
