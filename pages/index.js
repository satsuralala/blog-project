import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const[articles, setArticles]=usesState([]);

  // useEffect(()=>{
  //   fetch("")
  //   .then((response)=>{
  //     setArticles(data);
  //   });

  // },[]);
  // return (
  //   <div>
  //     {articles.map((item)=>(
  //       <div key={item.id}>
  //         <Link href={item.url} target="_blank">
  //           {item.title}
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
   
  // );
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
        <div key={item.id}>
          <Link href={item.url} target="blank">
          {item.title}
          </Link>

        </div>
      ))}
    </div>
  )
}
