import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const { fullName, companyName, email } = payload;

  if (!fullName || !companyName || !email) {
    return new Response("Missing required fields.", { status: 400 });
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("leads").insert({
    full_name: payload.fullName,
    company_name: payload.companyName,
    email: payload.email,
    phone: payload.phone || null,
    country: payload.country || null,
    industry: payload.industry || null,
    website: payload.website || null,
    product_type: payload.productType || null,
    desired_service: payload.desiredService || null,
    current_stage: payload.currentStage || null,
    message: payload.message || null,
    status: "new",
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
