import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[articles , setArticles]=useState([]);
  useEffect(()=>{
    fetch("https://dev.to/api/articles?username=paul_freeman")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setArticles(data);
    })
    
  }, []);
  return(
    <div className=" bg-white">
      
      <h1 className="text-black">All Blog Post</h1>
      <div className="grid grid-cols-3 grid-row-4 py-12 mx-auto gap-5 bg-white flex-wrap">
          {articles.map((item)=>(
            <div key={item.id}>
              
              <Link href={item.url} target="blank">
                <div className="px-4 py-4 border-[#E8E8EA] border-[1px] rounded-xl">
                  <Image src={item.social_image} width={360} height={240} className="w-[360px] h-[240px] rounded-md"></Image>
                  <div className="pt-6">
                    <div className=" badge badge-secondary badge-outline ">{item.tag_list[0]}</div>
                    <div className=" text-2xl  font-semibold text-[#181A2A] pt-4">{item.title}</div>
                    <div className="flex items-center gap-5">
                      <Image src={item.user.profile_image_90} width={36} height={36} className="w-[36px] h-[36px]"></Image>
                      <div className="text-[#97989F] text-base font-medium">{item.user.name}</div>
                      <div className="text-[#97989F] text-base font-medium">{item.readable_publish_date}</div>

                    </div>
                   
                  </div>
                 
                </div>
              </Link>

                
            </div>
      ))}

      </div>
      <h1 className="text-black">All Blog Post</h1>
     
    </div>
  )
}
