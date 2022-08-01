<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { supabase } from '$lib/supabase/supabaseClient';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let videos: any[] = [];

	async function updateVideosToReview() {
		let { data, error } = await supabase
			.from('video_submissions')
			.select('id, created_at, youtubeId, lnglat, yt_data(data)');

		videos = data || [];
	}

	onMount(async () => {
		await updateVideosToReview();
	});

<<<<<<< HEAD:webapp/src/routes/admin/reviewVideos.svelte
	async function acceptVideo({ id }: any) {
		const g = await supabase.functions.invoke('reviewVideo', {
			body: JSON.stringify({ id, accept: true })
		});

		console.log(g);
=======
	async function acceptVideo({ lnglat, youtubeId, id }: any) {
		try {
			await supabase.from('videos').insert({
				youtubeId,
				lnglat
			});
			console.log(id);
			await updateVideosToReview();
		} catch (e) {
			console.log('failed to add video..', e);
		}
>>>>>>> 1185c769bc481b08916ea0c940807b669dcedc5f:webapp/src/routes/admin/reviewVideos/index.svelte
	}

	async function rejectVideo({ id }: any) {
		const g = await supabase.functions.invoke('reviewVideo', {
			body: JSON.stringify({ id, accept: false })
		});
	}
</script>

<div class="relative overflow-x-auto shadow-md">
	<table class="w-full text-sm text-left ">
		<thead class="text-xs uppercase bg-gray-50 ">
			<tr>
				<th scope="col" class="px-4 py-3"> Recommended at </th>
				<th scope="col" class="px-4 py-3" style="min-width: 300px;"> Link / Thumbnail </th>
				<th scope="col" class="px-4 py-3"> Info </th>
				<th scope="col" class="px-4 py-3"> Lnglat </th>
				<th scope="col" class="px-4 py-3">
					<span class="sr-only">Accept</span>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each videos as video, i}
				<tr class="bg-white border-b ">
					<th scope="row" class="px-4 py-4 font-medium text-gray-900 "> {video.created_at} </th>
					<td class="px-4 py-4">
						<img src={video.yt_data.data.snippet.thumbnails.standard.url} />
					</td>
					<td class="px-4 py-4">
						<h1 class="text-base">{video.yt_data.data.snippet.title}</h1>
						<p>{video.yt_data.data.snippet.description}</p>
					</td>
					<td class="px-4 py-4">
						{#if video.lnglat && video.lnglat.length > 0}
							{#each video.lnglat as lnglat}
								<span class="w-full">{lnglat.coordinates}</span>
							{/each}
						{/if}
					</td>
					<td class="px-4 py-4 flex flex-col gap-4 items-center justify-center">
						<Button
							on:click={() => {
								acceptVideo(video);
							}}>Accept</Button
						>

						<Button
							on:click={() => {
								rejectVideo(video);
							}}>Reject</Button
						>
						<a href={`/admin/reviewVideos/${video.id}`}>Review</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
