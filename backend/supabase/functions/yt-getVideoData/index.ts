import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.3';

console.log(`Function "browser-with-cors" up and running!`);

serve(async (req) => {
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey'
	};

	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	try {
		const { id } = await req.json();

		const ytRes = await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=recordingDetails&id=${id}&key=${Deno.env.get(
				'YT_DATA_API_KEY'
			)}`
		);
		const ytData = await ytRes.json();

		let data = null;

		if (ytData && ytData.items?.length > 0) {
			data = ytData.items[0];

			const supabaseClient = createClient(
				// Supabase API URL - env var exported by default when deployed.
				Deno.env.get('SUPABASE_URL') ?? '',
				// Supabase API ANON KEY - env var exported by default when deployed.
				Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
			);

			await supabaseClient.from('yt_data').insert([
				{
					id,
					data
				}
			]);
		}

		return new Response(JSON.stringify(data), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			status: 200
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			status: 400
		});
	}
});
