import React from 'react'

import ComposeTweet from './server-component/ComposeTweet';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseServer } from '@/lib/supabase';
import { Database } from '@/lib/supabase.types';

import { getTweets } from '@/lib/supabase/getTweets';
import Tweet from './client-component/tweet';




const MainComponent = async() => {
  const res=await getTweets();
  return (
    <main className="xl:ml-[300px] mr-6 xl:mr-1 flex w-full xl:max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold text-white p-6 backdrop-blur bg-black/10 sticky top-0 w-full">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full mt-3 flex-none"></div>
            <ComposeTweet/>
          </div>
          <div className="flex flex-col">
            {res?.error && <div>Something wrong with the server</div>}
            {res?.data && res.data.map((tweet)=>(
              <Tweet key={tweet.id} tweet={tweet}/>
            ))}
          </div>
        </main>
  )
}

export default MainComponent