import { createClient } from "@supabase/supabase-js";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cXZ1eXNhbGprdHR4bm93aWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ1MjE3ODIsImV4cCI6MTk3MDA5Nzc4Mn0.HvY7sv6OcwDk7N1BnrTBjGKjeWvV1tnwkE5LZLL58ws";
export default ({ app }, inject) => {
  const supabaseUrl = "https://qxqvuysaljkttxnowidk.supabase.co";
  const supabaseKey = SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  inject("supabase", supabase);
};
