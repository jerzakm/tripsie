<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { userStore } from '$lib/supabase/supaAuth';

	import { supabase } from '$lib/supabase/supabaseClient';

	import { onMount } from 'svelte';

	let user: any;

	let name = user?.name || 'Anonymous';

	const updateUserData = async () => {
		if (!$userStore?.id) return undefined;
		let { data, error } = await supabase.from('user ').select('*').eq('id', $userStore.id);
		return data && data.length > 0 ? data[0] : undefined;
	};

	onMount(async () => {
		user = await updateUserData();
	});

	async function changeName() {
		console.log('changing name..');
		if (!$userStore?.id) return;

		const { data, error } = await supabase.from('user').update({ name }).eq('id', $userStore.id);

		if (data) {
			user = data[0];
		}
	}
</script>

<h1>Hello {user?.name || 'explorer'}</h1>

<div class="flex flex-col mt-8">
	<div class="grid grid-cols-2">
		{#if user}
			<span>Account created</span><span>{new Date(user?.created_at).toLocaleDateString()}</span>
			<span>Name </span>
			<input type="text" class="login-input" placeholder="Enter password" bind:value={name} />
		{/if}
	</div>
	<Button on:click={changeName}>Save</Button>
</div>
