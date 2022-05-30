<script lang="ts">
	import { userStore } from '$lib/supabase/supaAuth';

	import { supabase } from '$lib/supabase/supabaseClient';

	import { onMount } from 'svelte';

	onMount(async () => {
		if (!$userStore?.id) return;
		let { data, error } = await supabase.from('user ').select('*').eq('id', $userStore.id);

		if (data) {
		}

		console.log(data, error);
	});
</script>
