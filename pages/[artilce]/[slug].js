import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from 'next/router'

export default function Page() {
    const [article, setArticle] = useState();
    const [loading, setLoading]=useState(false);
    const router = useRouter()
   
    useEffect(() => {
        if(router.isReady){
            getArticle();
        }
     
    }, [router.isReady]);
  
    function getArticle(){
      setLoading(true);
        fetch(`https://dev.to/api/articles/${article}/${slug}`)
          .then((response) => {
            return response.json();
          })
          .then((detail) => {
           setArticle(detail);
           setLoading(false);
          });
  
    }
    return(
        <div>
            <div>{article.title}</div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>
    )
}