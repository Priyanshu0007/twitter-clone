import React from 'react'
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
const MainComponent = () => {
  return (
    <main className="ml-[300px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold text-white p-6 backdrop-blur bg-black/10 sticky top-0 w-full">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input type="text" className="w-full h-full bg-transparent outline-none border-none border-b-[0.5px] p-1 border-gray-600 text-2xl text-gray-600 placeholder:text-2xl placeholder:text-gray-600" placeholder="What's happening?"/>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="w-full text-white rounded-full font-bold m-2 bg-primary px-1 py-1 text-lg text-center hover:bg-opacity-70 transition duration-200">Tweet</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({length:5}).map((_,i)=>(
              <div key={i} className=" border-b-[0.5px] p-4 border-gray-600 text-white space-x-4 py-4 px-6 flex">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-none"></div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-1 justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="font-bold">Priyanshu Gupta</div>
                      <div className="text-gray-500">@priyanshu0007</div>
                      <div><BsDot/></div>
                      <div>1 hour ago</div>
                    </div>
                    <div><BsThreeDots/></div>
                  </div>
                  <div className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis voluptate sequi et maiores, eos perspiciatis laborum ipsum. Voluptatum minus dolores, animi nisi quas magni veniam. Rem error repudiandae temporibus quaerat voluptatum. Architecto nisi maxime vel necessitatibus fugiat odit quod atque. Aut vero quibusdam laboriosam beatae repudiandae deleniti pariatur nobis?</div>
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