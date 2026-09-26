import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmjvompjqdqtdfeongyb.supabase.co";
const supabaseKey = "sb_publishable_CRx9gAMA_1-oG68l1MQYWA_EplhlFWu";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
