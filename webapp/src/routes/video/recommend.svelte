<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { supabase } from '$lib/supabase/supabaseClient';

	let userRecommendation = `https://www.youtube.com/watch?v=Kizd7nN8zJM&ab_channel=ItchyBoots`;

	let videoData: any;

	$: match = userRecommendation.match(/(?<=\/|v=)([a-zA-Z0-9_-]{11})/g);

	$: match && match.length > 0 ? getYoutubeData(match[0]) : (videoData = null);

	async function getYoutubeData(id: string) {
		const { error, data, body } = await supabase.from('yt_data').select().eq('id', id);

		const g = await supabase.functions.invoke('yt-getVideoData', {
			body: JSON.stringify({ id })
		});

		videoData = g.data;

		console.log(videoData);
	}

	async function addVideo() {
		// console.log('add video...');
		// const { data, error } = await supabase
		// 	.from('video_submissions')
		// 	.insert([
		// 		{ url: 'test', user: 'eb1c9d12-8e26-4921-b115-d09ed5376ccb', lnglat: ['POINT (1 1)'] }
		// 	]);
	}
</script>

<content class="mt-32 w-full flex flex-col items-center justify-center space-y-4">
	<input class="w-1/2" bind:value={userRecommendation} />
	<Button on:click={addVideo}>add vid</Button>

	{#if videoData}
		<Card class="flex gap-16">
			<img src={videoData.snippet.thumbnails.high.url} />
			<content class="flex flex-col items-start gap-4">
				<h1 class="text-lg">{videoData.snippet.title}</h1>
				<span><strong>Channel:</strong> {videoData.snippet.channelTitle}</span>
				<p class="text-left">{videoData.snippet.description}</p>
			</content>
		</Card>
	{/if}
</content>
