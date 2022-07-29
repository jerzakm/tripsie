<script lang="ts">
	import 'mapbox-gl/dist/mapbox-gl.css';

	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';

	let mapEl: any;

	export let lngLat: [number, number] | undefined;

	let map: mapboxgl.Map;

	let marker: mapboxgl.Marker | undefined;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiamVyemFrbSIsImEiOiJjangxaHF4MGcwN3ZqNGJubzl2Zzdva3N5In0.DRchXs3ESLUuoH9Kh_N-ow';

		map = new mapboxgl.Map({
			container: mapEl,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-74.5, 40],
			zoom: 0
		});

		map.on('click', (e) => {
			lngLat = [e.lngLat.lng, e.lngLat.lat];
		});
	});

	$: lngLat && map && updateMarker();

	function updateMarker() {
		if (!lngLat) return;
		if (!marker) {
			marker = new mapboxgl.Marker({ draggable: true }).setLngLat(lngLat).addTo(map);
			marker.on('dragend', (e) => {
				lngLat = [marker.getLngLat().lng, marker.getLngLat().lat];
			});
		}
		marker.setLngLat(lngLat);
		map.flyTo({
			zoom: 4,
			center: lngLat,
			essential: true // this animation is considered essential with respect to prefers-reduced-motion,
		});
	}
</script>

<map bind:this={mapEl} class="w-full h-full" />
