import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[articles , setArticles]=useState([]);
  useEffect(()=>{
    fetch("https://dev.to/api/articles?username=ben")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setArticles(data);
    })
    
  }, []);
  return(
    <div>
      {articles.map((item)=>(
        <div key={item.id} className="grid grid-cols-3">
          <div className="w-[360px] border-[#E8E8EA] border-2">
            <Link href={item.url} target="blank">
            {/* <Image src={item.cover_image} width={360} height={240}></Image> */}
            {item.title}
            </Link>
          </div>
          

        </div>
      ))}
    </div>
  )
}
