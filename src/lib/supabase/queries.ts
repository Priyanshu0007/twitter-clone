"use server"
import { supabaseServer } from "../supabase";
import { Database } from "../supabase.types";
import { supbaseServer } from "./index";
export type TweetType= (Database['public']['Tables']['profiles']['Row'] & {profiles:Pick< Database['public']['Tables']['profiles']['Row'],'full_name'|'username'>;})

export const getTweets= async()=>{
      return await supbaseServer.from("tweets").select(`*,
      profiles(full_name,username)
      `).returns< TweetType[]>()        
  }

export const getLikesCount = async (tweetId:string) => {
  const res= await supabaseServer
                                .from('likes')
                                .select('id',{count:"exact"})
                                .eq('tweet_id',tweetId);
  return res;
}

export const isLiked = async ({tweetId,userId}:{tweetId:string,userId?:string})=>{
  if(!userId){return false}
  const {data,error}= await supabaseServer
                .from('likes')
                .select('id')
                .eq('tweet_id',tweetId)
                .eq('user_id',userId)
                .single()
  return Boolean(data?.id)
}

