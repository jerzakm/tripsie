import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@1.35.3";

console.log(`Function "browser-with-cors" up and running!`);

serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { id } = await req.json();

    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default when deployed.
      Deno.env.get("SUPABASE_URL") ?? "",
      // Supabase API ANON KEY - env var exported by default when deployed.
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    supabaseClient.auth.setAuth(
      req.headers.get("Authorization")!.replace("Bearer ", "")
    );

    const videoSubmission = await supabaseClient
      .from("video_submissions")
      .select("*")
      .eq("id", id);

    if (
      videoSubmission &&
      videoSubmission.data &&
      videoSubmission.data.length > 0
    ) {
      const submission = videoSubmission.data[0];

      // check if exists
      const existingVid = await supabaseClient
        .from("video")
        .select("youtubeId")
        .eq("youtubeId", submission.youtubeId);

      if (existingVid.data) {
        return new Response(JSON.stringify({ existingVid }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }

      const insert = await supabaseClient.from("videos").insert([
        {
          youtubeId: submission.youtubeId,
          lnglat: submission.lnglat,
        },
      ]);

      await supabaseClient.from("video_submissions").delete().eq("id", id);

      return new Response(
        JSON.stringify({ videoSubmission, existingVid, insert }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    return new Response(JSON.stringify(videoSubmission), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
