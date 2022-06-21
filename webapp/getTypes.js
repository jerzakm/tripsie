import fs from 'fs';
import openapiTS from 'openapi-typescript';
import 'dotenv/config';

async function getTypes() {
	const url = `${process.env.VITE_SUPABASE_URL}/rest/v1/?apikey=${process.env.VITE_SUPABASE_ANON_KEY}`;

	const output = await openapiTS(url);

	fs.writeFileSync('src/supabaseTypes.d.ts', output);
}

getTypes();
