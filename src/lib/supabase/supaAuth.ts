import { supabase } from '$lib/supabase/supabaseClient';
import type { User } from '@supabase/supabase-js';

import { writable } from 'svelte/store';

export const userStore = writable<undefined | null | User>(undefined);

supabase.auth.onAuthStateChange((event, session) => {
	// TODO
	// 'SIGNED_IN'
	// 'SIGNED_OUT'

	// 'PASSWORD_RECOVERY'
	// 'TOKEN_REFRESHED'
	// 'USER_UPDATED'
	// 'USER_DELETED'

	if (event == 'SIGNED_IN') {
		console.log('user signed in', session?.user);
		userStore.set(session?.user);
	}
	if (event == 'SIGNED_OUT') {
		userStore.set(undefined);
	}
});

export const registerWithEmail = async (email: string, password: string) => {
	return await supabase.auth.signUp({ email, password });
};

export const signInWithEmail = async (email: string, password: string) => {
	return await supabase.auth.signIn({ email, password });
};
