<script lang="ts">
	import { submitNewVideo } from '$lib/api/video';

	import Button from '$lib/components/Button.svelte';
	import { supabase } from '$lib/supabase/supabaseClient';

	let userRecommendation = `https://www.youtube.com/watch?v=swLyst02ZK4&ab_channel=TomScott`;

	let match = userRecommendation.match(/(?<=\/|v=)([a-zA-Z0-9_-]{11})/g);

	$: match && match.length > 0 ? getYoutubeData(match[0]) : '';

	async function getYoutubeData(id: string) {
		const { error, data, body } = await supabase.from('yt_data').select().eq('id', id);

		const g = await supabase.functions.invoke('yt-getVideoData', {
			body: JSON.stringify({ id })
		});
		console.log(g?.data);
	}

	async function addVideo() {
		// console.log('add video...');
		// const { data, error } = await supabase
		// 	.from('video_submissions')
		// 	.insert([
		// 		{ url: 'test', user: 'eb1c9d12-8e26-4921-b115-d09ed5376ccb', lnglat: ['POINT (1 1)'] }
		// 	]);
		// console.log(data, error);
		// const res = await submitNewVideo();
		// const g = await supabase.functions.invoke('yt-check', {
		// 	body: JSON.stringify({ url: 'https://www.youtube.com/watch?v=ZVSx-7MDFrs&ab_channel=FXMAG' })
		// });
		// console.log(g?.data);
	}
</script>

<content class="mt-32 w-full flex flex-col items-center justify-center space-y-4">
	<input class="w-1/2" bind:value={userRecommendation} />
	{match}
	<Button on:click={addVideo}>add vid</Button>
</content>
