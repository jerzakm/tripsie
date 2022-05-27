import { supabase } from '$lib/supabase/supabaseClient';

export const registerWithEmail = async (email: string, password: string) => {
	return await supabase.auth.signUp({ email, password });
};
