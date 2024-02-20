import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../supabase.types";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
export const getTweets= async()=>{
    if(supabaseUrl && supabaseSecretKey){
      const supbaseServer=new SupabaseClient(supabaseUrl,supabaseSecretKey);
      return await supbaseServer.from("tweets").select(`*,
      profiles(full_name,username)
      `).returns< (Database['public']['Tables']['profiles']['Row'] & {profiles:Pick< Database['public']['Tables']['profiles']['Row'],'full_name'|'username'>;})[]>()        
    }
  }