"use client"
import { likeTweet, unlikeTweet } from '@/lib/supabase/mutation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useState, useTransition } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { toast } from 'sonner'
type LikeButtonProps={
    tweetId:string
    likesCount:number | null
    isUserHasLiked:boolean
}
const LikeButton = ({tweetId,likesCount,isUserHasLiked}:LikeButtonProps) => {
    const [supabase]=useState(()=>createClientComponentClient());
    let [isLikePending,startTransition]=useTransition();
  return (
    <button disabled={isLikePending} onClick={()=>{
        supabase.auth.getUser().then((res)=>{
          if(res.data && res.data.user){const user=res.data.user; startTransition(()=>isUserHasLiked ? unlikeTweet({tweetId,userId:user.id}) : likeTweet({tweetId,userId:user.id}))}
          else{toast("Please login to like a tweet")}
        }).catch(()=>toast.error("Authentication failed"));                      
      }} className="rounded-full flex items-center gap-2 space-x-2 text-white hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
        {isUserHasLiked? <AiFillHeart className='w-5 h-5 text-pink-600'/>:<AiOutlineHeart className='w-5 h-5 hover:text-pink-600'/>}
        {likesCount ?? 0}
    </button>
  )
}

export default LikeButton