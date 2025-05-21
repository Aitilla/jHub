import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  let { data: User, error } = await supabase.from("User").select("*");
  return Response.json({ User: User?.[0]??null, error})
}
