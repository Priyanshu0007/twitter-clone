import React from 'react'

const ComposeTweet = () => {
    async function submitTweet(formData:FormData){
        'use server'
        console.log("formData",formData);
        
    }
  return (

      <form action={submitTweet as any} className="flex flex-col w-full h-full">
              <input type="text" name="tweet" className="w-full h-full bg-transparent outline-none border-none border-b-[0.5px] p-1 border-gray-600 text-2xl text-gray-600 placeholder:text-2xl placeholder:text-gray-600" placeholder="What's happening?"/>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button type='submit' className="w-full text-white rounded-full font-bold m-2 bg-primary px-1 py-1 text-lg text-center hover:bg-opacity-70 transition duration-200">Tweet</button>
                </div>
              </div>
            </form>

  )
}

export default ComposeTweet