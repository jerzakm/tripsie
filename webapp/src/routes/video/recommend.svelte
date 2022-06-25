<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import { supabase } from '$lib/supabase/supabaseClient';

	let url = `https://www.youtube.com/watch?v=QtWOegmwQP4&ab_channel=ItchyBoots`;

	let videoData: any;

	$: match = url.match(/(?<=\/|v=)([a-zA-Z0-9_-]{11})/g);

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
		const user = supabase.auth.user()?.id;

		let lnglat: string[] | undefined;
		if (videoData.recordingDetails.location) {
			lnglat = [
				`POINT (${videoData.recordingDetails.location.longitude} ${videoData.recordingDetails.location.latitude})`
			];
		}

		if (match) {
			const { data, error } = await supabase
				.from('video_submissions')
				.insert([{ youtubeId: match[0], user, lnglat }]);
		}
	}
</script>

<content class="mt-32 w-full flex flex-col items-center justify-center space-y-4">
	<input class="w-1/2" bind:value={url} />

	{#if videoData}
		<Card class="flex gap-16 flex-col lg:flex-row">
			<img src={videoData.snippet.thumbnails.high.url} />
			<content class="flex flex-col items-start gap-4">
				<h1 class="text-lg">{videoData.snippet.title}</h1>
				<span><strong>Channel:</strong> {videoData.snippet.channelTitle}</span>
				<p class="text-left">{videoData.snippet.description}</p>
				{#if videoData.recordingDetails.location}
					<div class="flex flex-col items-start">
						<span><strong>{videoData.recordingDetails.locationDescription}</strong></span>
						<span><strong>Latitude</strong> {videoData.recordingDetails.location.latitude}</span>
						<span><strong>Longitude</strong> {videoData.recordingDetails.location.longitude}</span>
					</div>
				{/if}
			</content>
		</Card>
		<Button on:click={addVideo}>Submit the video</Button>
	{/if}
</content>
