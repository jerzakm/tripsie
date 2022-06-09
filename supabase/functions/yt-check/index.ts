import { serve } from 'https://deno.land/std@0.131.0/http/server.ts';

console.log(`Function "browser-with-cors" up and running!`);

serve(async (req) => {
	const corsHeaders = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey'
	};

	// This is needed if you're planning to invoke your function from a browser.
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	// (?<=\/|v=)([a-zA-Z0-9_-]{11})($|[^a-zA-Z0-9_-])

	try {
		const { url } = await req.json();
		const data = {
			message: `Hello ${url}!`,
			match: url.match(/(?<=\/|v=)([a-zA-Z0-9_-]{11})($|[^a-zA-Z0-9_-])/g)
		};

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
