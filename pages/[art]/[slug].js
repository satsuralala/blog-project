import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from 'next/router'

export default function Page() {
    const [article, setArticle] = useState();
    const [loading, setLoading]=useState(false);
    const router = useRouter()
    const {art, slug}=router.query;
   
    useEffect(() => {
        if(router.isReady){
            getArticle();
        }
     
    }, [router.isReady]);
  
    function getArticle(){
      setLoading(true);
        fetch(`https://dev.to/api/articles/${art}/${slug}`)
          .then((response) => {
            return response.json();
          })
          .then((detail) => {
           setArticle(detail);
           setLoading(false);
          });
      
  
    }
    if(!article){
      return(<div>loadng</div>)
    }
    return(
        <div className="flex flex-col items-center">
            <div>{article.title}</div>
            <div className="prose flex flex-col justify-center">{parse(article.body_html)}</div>
        </div>
    )
}