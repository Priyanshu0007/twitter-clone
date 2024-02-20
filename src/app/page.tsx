import Image from "next/image";
import { Inter } from "next/font/google";
import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSidebar from "@/components/RightSidebar";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {cookies } from "next/headers";
import { Database } from "@/lib/supabase.types";

export const revalidate=0;

export default async function Home() {
  const cookieStore = cookies()

  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  })
  const {data,error}=await supabase.auth.getUser()

 
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar/>
        <MainComponent/>
        <RightSidebar/>
      </div>
    </div>
  );
}
