import React from 'react'
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import ComposeTweet from './server-component/ComposeTweet';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseServer } from '@/lib/supabase';
import { Database } from '@/lib/supabase.types';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { getTweets } from '@/lib/supabase/getTweets';

dayjs.extend(relativeTime);


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
              <div key={tweet.id} className=" border-b-[0.5px] p-4 border-gray-600 text-white space-x-4 py-4 px-6 flex">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-none"></div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex items-center space-x-1 justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="font-bold">{tweet.profiles.full_name ?? ""}</div>
                      <div className="text-gray-500">{tweet.profiles.username ?? ""}</div>
                      <div><BsDot/></div>
                      <div>{dayjs(tweet.created_at).fromNow()}</div>
                    </div>
                    <div><BsThreeDots/></div>
                  </div>
                  <div className="text-white text-base">{tweet.text}</div>
                  <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div>
                  <div className="flex items-center justify-between space-x-1 w-full">
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BsChat/></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineRetweet/></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineHeart/></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoStatsChart/></div>
                    <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoShareOutline/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent