import React from 'react'
import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="sticky top-4 overflow-scroll scrollbar-hide flex w-[275px] flex-col items-stretch h-screen ml-7 mt-5 right-0">
          <div>
            <div className="relative w-full h-full text-white group">
              <input id="searchBox" type="text" placeholder="Search Twitter" className="outline-none bg-neutral-900/90 w-full h-full rounded-2xl py-4 pl-14 focus:border-primary focus:border "/>
              <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center p-4 justify-center text-gray-500 peer-focus:text-primary">
                <BsSearch className=" w-5 h-5 text-gray-500"/>
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4 text-white">
            <h3 className="font-bold text-2xl p-4 py-4">What's Happening</h3>
            <div>
              {Array.from({length:5}).map((_,i)=>(
                <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-400">
                    <div className="font-bold text-lg">#trending {i+1}</div>
                    <div className="text-xs text-neutral-400">35.4k</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4 text-white"> 
            <h3 className="font-bold text-2xl p-4 py-4">Who to follow</h3>
            <div>
              {Array.from({length:5}).map((_,i)=>(
                <div key={i} className="hover:bg-white/10 space-x-2 p-4 last:rounded-b-xl flex items-center transition duration-400">
                  <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                  <div className="flex flex-col ">
                    <div className="font-bold text-white text-sm">Other User</div>
                    <div className="text-gray-500 text-xs">@otheruser1232</div>
                  </div>
                  <div className=" w-full">
                    <button className="rounded-full px-4 py-2 bg-white text-neutral-950">Follow</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default RightSidebar