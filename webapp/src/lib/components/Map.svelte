<script lang="ts">
	import 'mapbox-gl/dist/mapbox-gl.css';
	import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
	import { onMount } from 'svelte';

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiamVyemFrbSIsImEiOiJjangxaHF4MGcwN3ZqNGJubzl2Zzdva3N5In0.DRchXs3ESLUuoH9Kh_N-ow';
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/jerzakm/cl3njkens000614s1xutw0naf', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9 // starting zoom
		});
	});
</script>

<map id="map" />

<style>
	map {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
	}
</style>
