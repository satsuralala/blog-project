export default function Filter() {
    const [tags, setTags] = useState([]);
    const [page, setPage]=useState(1);
    const [ended, setEnded]=useState(false);
    useEffect(() => {
      loadMore();
    }, []);
  
    function loadMore(){
        fetch(`https://dev.to/api/articles?username=paul_freeman&tags`)
          .then((response) => {
            return response.json();
          })
        //   .then((newArticles) => {
        //     const updatedArticles=articles.concat(newArticles)
        //     setArticles(updatedArticles);
        //     setPage(page+1);
        //     if(newArticles.length<pageSize)
        //       setEnded(true);
        //   });
    }
    return(
        {tags.map((item) => (
            <Link  key={item.id}  href={item.url} target="blank" className="md:px-4 md:py-4 justify-center  border-[#E8E8EA] border-[1px] rounded-xl">   
                
                <div className="pt-6 px-4">
                  <div className=" badge badge-secondary badge-outline ">
                    {item.tag_list[0]}
                  </div>
                  
                  
                </div>
             
            </Link>    
        ))}
    );
}