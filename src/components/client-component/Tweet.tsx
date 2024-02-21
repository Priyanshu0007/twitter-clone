"use server"
import { TweetType, getLikesCount, isLiked } from '@/lib/supabase/queries'
import React from 'react'
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import LikeButton from './LikeButton';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
dayjs.extend(relativeTime);
type TweetProps={tweet:TweetType,currentUserId?:string}
const Tweet = async({tweet,currentUserId}:TweetProps) => {
  const getTweetLikesCount=await getLikesCount(tweet.id)
  const isUserHasLiked=await isLiked({tweetId:tweet.id,userId:currentUserId})  
  return (
  <div key={tweet.id} className=" border-b-[0.5px] p-4 border-gray-600 text-white space-x-4 py-4 px-6 flex">
    <div className="w-10 h-10 bg-slate-200 rounded-full flex-none"></div>
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-center space-x-1 justify-between">
          <div className="flex items-center space-x-1">
            <div className="font-bold">{tweet.profiles.full_name ?? ""}</div>
            <div className="text-gray-500">@{tweet.profiles.username ?? ""}</div>
            <div><BsDot/></div>
            <div>{dayjs(tweet?.created_at).fromNow()}</div>
          </div>
          <div><BsThreeDots/></div>
        </div>
        <div className="text-white text-base">{tweet?.text}</div>
        <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl"></div>
        <div className="flex items-center justify-between space-x-1 w-full">
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BsChat/></div>
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineRetweet/></div>
          <LikeButton tweetId={tweet.id} likesCount={getTweetLikesCount.count} isUserHasLiked={isUserHasLiked}/>
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoStatsChart/></div>
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoShareOutline/></div>
        </div>
      </div>
    </div>
  )
}

export default Tweet