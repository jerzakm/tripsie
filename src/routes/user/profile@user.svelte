<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { userStore } from '$lib/supabase/supaAuth';

	import { supabase } from '$lib/supabase/supabaseClient';

	import { onMount } from 'svelte';

	let user: any;

	let name = 'Anonymous';

	onMount(async () => {
		if (!$userStore?.id) return;
		let { data, error } = await supabase.from('user ').select('*').eq('id', $userStore.id);

		user = data ? (user = data[0]) : undefined;
		if (user?.name) name = user.name;

		// console.log(data[0], error);
	});

	async function changeName() {
		console.log('changing name..');
		if (!$userStore?.id) return;

		const { data, error } = await supabase.from('user').update({ name }).eq('id', $userStore.id);

		console.log(data, error);
	}
</script>

<h1>Hello {user?.name || 'explorer'}</h1>

<div class="flex flex-col mt-8">
	<div class="grid grid-cols-2">
		<span>Account created</span><span>{new Date(user?.created_at).toLocaleDateString()}</span>
		<span>Email</span><span>{user?.email}</span>
		<span>Name </span><input
			type="text"
			class="login-input"
			placeholder="Enter password"
			bind:value={name}
		/>
	</div>
	<Button on:click={changeName}>Save</Button>
</div>
