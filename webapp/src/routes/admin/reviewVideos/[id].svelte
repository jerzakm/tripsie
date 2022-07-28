<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params }) {
		return {
			props: {
				id: params.id
			}
		};
	}
</script>

<script lang="ts">
	import { supabase } from '$lib/supabase/supabaseClient';

	import { onMount } from 'svelte';

	import SuggestLocationMap from '$lib/components/Maps/SuggestLocationMap.svelte';

	export let id: any;
	let videoData: any;

	onMount(async () => {
		let { data, error } = await supabase
			.from('video_submissions')
			.select('id, created_at, youtubeId, lnglat, yt_data(data)')
			.eq('id', id);

		if (data && data.length > 0) {
			videoData = data[0];
		}
	});
</script>

<content class="flex flex-col p-2">
	<h1 class="text-lg">Submission review</h1>
	<span>Id: {id}</span>

	{#if videoData}
		{@const snippet = videoData.yt_data.data.snippet}
		<h2 class="text-base">{snippet.title}</h2>
		<div class="w-64 h-64 flex">
			<SuggestLocationMap />
		</div>
	{/if}
</content>

<style>
	content {
		background-color: var(--surface-background-color);
	}
</style>
