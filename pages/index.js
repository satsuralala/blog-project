import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const pageSize=6;

export default function All() {
  const [articles, setArticles] = useState([]);
  const [page, setPage]=useState(1);
  const [ended, setEnded]=useState(false);
  useEffect(() => {
    loadMore();
  }, []);

  function loadMore(){
      fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`)
        .then((response) => {
          return response.json();
        })
        .then((newArticles) => {
          const updatedArticles=articles.concat(newArticles)
          setArticles(updatedArticles);
          setPage(page+1);
          if(newArticles.length<pageSize)
            setEnded(true);
        });
  }
  return (
    <div className=" bg-white ">
      <div className="px-20">
        <Nav></Nav>
        <h1 className="text-[#181A2A] text-2xl font-bold py-12 pl-4">All Blog Post</h1>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-5 bg-white mx-4 ">
          {articles.map((item) => (
              <Link  key={item.id}  href={item.url} target="blank" className="md:px-4 md:py-4 justify-center  border-[#E8E8EA] border-[1px] rounded-xl">   
                  <Image
                    src={item.social_image}
                    width={360}
                    height={240}
                    className=" aspect-video object-contain rounded-md"
                  ></Image>
                  <div className="pt-6 px-4">
                    <div className=" badge badge-secondary badge-outline ">
                      {item.tag_list[0]}
                    </div>
                    <div className=" text-2xl  font-semibold text-[#181A2A] pt-4">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-5">
                      <Image
                        src={item.user.profile_image_90}
                        width={36}
                        height={36}
                        className="w-[36px] h-[36px]"
                      ></Image>
                      <div className="text-[#97989F] text-base font-medium">
                        {item.user.name}
                      </div>
                      <div className="text-[#97989F] text-base font-medium">
                        {item.readable_publish_date}
                      </div>
                    </div>
                  </div>
               
              </Link>    
          ))}
        </div>
        {!ended&&(<div className="text-center" onClick={loadMore}>
          <button className="btn btn-outline text-[#696A75] my-8 ">Load more</button>
        </div>)}
       
      </div>
      {/* <div className="px-20 bg-[#F6F6F7]">
        <Footer />
      </div> */}
      <Filter></Filter>
     
      
    </div>
    
  );
}
