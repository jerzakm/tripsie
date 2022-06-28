<script lang="ts">
	import { supabase } from '$lib/supabase/supabaseClient';
	import { onMount } from 'svelte';

	let videos: any[] = [];

	onMount(async () => {
		let { data, error } = await supabase
			.from('video_submissions')
			.select('id, created_at, youtubeId, lnglat, yt_data(data)');

		videos = data || [];
		console.log(videos);
	});
</script>

<div class="relative overflow-x-auto shadow-md">
	<table class="w-full text-sm text-left ">
		<thead class="text-xs uppercase bg-gray-50 ">
			<tr>
				<th scope="col" class="px-6 py-3"> Recommended at </th>
				<th scope="col" class="px-6 py-3" style="min-width: 300px;"> Link / Thumbnail </th>
				<th scope="col" class="px-6 py-3"> Info </th>
				<th scope="col" class="px-6 py-3"> Lnglat </th>
				<th scope="col" class="px-6 py-3">
					<span class="sr-only">Accept</span>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each videos as video, i}
				<tr class="bg-white border-b ">
					<th scope="row" class="px-6 py-4 font-medium text-gray-900 "> {video.created_at} </th>
					<td class="px-6 py-4">
						<img src={video.yt_data.data.snippet.thumbnails.standard.url} />
					</td>
					<td class="px-6 py-4">
						<h1 class="text-base">{video.yt_data.data.snippet.title}</h1>
						<p>{video.yt_data.data.snippet.description}</p>
					</td>
					<td class="px-6 py-4">
						{#if video.lnglat && video.lnglat.length > 0}
							{#each video.lnglat as lnglat}
								<span class="w-full">{lnglat.coordinates}</span>
							{/each}
						{/if}
					</td>
					<td class="px-6 py-4 text-right">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
