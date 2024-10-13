import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/Footer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const inter = Inter({ subsets: ["latin"] });
const pageSize = 6;

export default function All() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMore();
  }, []);

  async function loadMore() {
    setLoading(true);

    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`
    );
    const newArticles = await response.json();

    const updatedArticles = articles.concat(newArticles);
    setArticles(updatedArticles);

    setPage(page + 1);
    if (newArticles.length < pageSize) {
      setEnded(true);
    }
    setLoading(false);
  }

return (
  <div className=" bg-white ">
    <div className="px-20">
      <Nav></Nav>

          <div className="md:carousel w-full aspect-[5/3] rounded-xl hidden">
             
              {articles.map((item,index) => (
                
                <div id={`slide${index}`} className="carousel-item relative w-full  ease-out transition duration-300">
                      <Link
                        key={item.id}
                        href={item.path}
                         className="w-full"
                      >
                        <Image
                          src={item.social_image}
                          width={1200}
                          height={600}
                          className=" aspect-video object-cover bg-gray-300 rounded-md  w-full transition duration-150 ease-out "
                        />
                        <div className="bg-[#FFFFFF] bg-opacity-85  absolute left-3 bottom-[10%] rounded-md drop-shadow-lg">
                          <div className="py-10 px-10 ">
                            <div className=" badge badge-secondary badge-outline ">
                              {item.tag_list[0]}
                            </div>
                            <div className=" text-2xl  font-semibold text-[#181A2A] pt-4">
                              {item.title}
                            </div>
                            <div className="text-[#97989F] text-base font-medium pt-6">
                              {dayjs(item.published_at).fromNow()}
                            </div>
                          </div>

                        </div>
                        </Link>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a href={`#slide${index - 1}`} className="btn btn-circle animate-pulse">❮</a>
                          <a href={`#slide${index+ 1}`} className="btn btn-circle animate-pulse">❯</a>
                        </div>
                        
                    
                </div>
              ))}
              
          </div>
  

      <h1 className="text-[#181A2A] text-2xl font-bold py-12 pl-4">
        All Blog Post
      </h1>

      <div>
        {articles.map(
          (item, index) =>
            index < 5 && (
              <Link key={item.id} href={item.path}>
                <div className="hidden md:flex text-black ">
                  {item.tag_list[0]}
                </div>
              </Link>
            )
        )}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1  gap-5 bg-white mx-4 ">
        {articles.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className=" md:py-4 md:px-4 md:flex md:flex-col md:items-center md:mx-auto border-[#E8E8EA] border-[1px] rounded-xl"
          >
            <Image
              src={item.social_image}
              width={360}
              height={240}
              className=" aspect-video object-cover bg-gray-300 rounded-md"
            ></Image>
            <div className="pt-6 px-4 md:flex-1">
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
                  {dayjs(item.published_at).fromNow()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {!ended && (
        <div className="text-center" onClick={loadMore}>
          <button disabled={loading} className="btn  my-8 ">
            {loading && <span className="loading loading-spinner "></span>}
            loading
          </button>
        </div>
      )}
    </div>
    <div className="px-20 bg-[#F6F6F7]">
      <Footer />
    </div>
    {/* <filter></Filter>
     */}
  </div>
)
};
