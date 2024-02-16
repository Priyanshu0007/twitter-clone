import React from 'react'
import { BiHomeCircle,BiUser } from "react-icons/bi";
import { BsBell,BsBookmark, BsTwitter, BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import Link from "next/link";

const NAVIGATION_ITEMS=[
    {
      title:"Home",
      icon:BiHomeCircle
    },{
      title:"Explore",
      icon:HiOutlineHashtag,
    },{
      title:"Notification",
      icon:BsBell
    },{
      title:"Messages",
      icon:BsEnvelope
    },{
      title:"Bookmarks",
      icon:BsBookmark
    },{
      title:"Profile",
      icon:BiUser
    }
  ]
const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col h-screen text-white items-stretch">
    <div className=" flex flex-col items-stretch h-full text-white space-y-4 mt-4">
    <Link href={"/"} className="my-4 py-2 px-6 text-2xl">
      <BsTwitter/>
    </Link>
    {NAVIGATION_ITEMS.map((item)=>(
      <Link className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-6 rounded-3xl py-2 px-6" href={`/${item.title.toLowerCase()}`} key={item.title}>
        <div><item.icon/></div>
        <div>{item.title}</div>
      </Link>
    ))}
    <button className="w-full rounded-full m-4 bg-primary px-4 py-3 text-2xl text-center hover:bg-opacity-70 transition duration-200">
      Tweet
    </button>
    </div>
    <button className="w-full flex justify-between items-center space-x-2 rounded-full m-4 bg-transparent p-4  text-center hover:bg-white/10 transition duration-200">
      <div className="flex item-center space-x-2">
        <div className=" rounded-full bg-slate-400 w-12 h-12"></div>
        <div className="text-sm">
          <div className="font-semibold">Priyanshu Gupta</div>
          <div>@priyanshu0007</div>
        </div>
      </div>
      <div><BsThreeDots/></div>
    </button>
  </section>
  )
}

export default LeftSidebar