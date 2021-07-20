import  { useState,useEffect } from "react";
function Main (){

    const [articles, setArticles] = useState([]);
    const [search ,setSearch] =useState("");
    useEffect(()=>{
        let url ='https://newsapi.org/v2/everything?q=microsoft&apiKey=1683c013575e4777b156c46df8503b9a';
        //call the url
        fetch(url)
        .then((response)=>response.json()) //resolve data in jason {promise}
        .then((news)=>{
            // console.log(news)
            setArticles(news.articles);
    })
    },[])

    function readValue(value){
        setSearch(value);
    }

    function searchNews()
    {
        let url =`https://newsapi.org/v2/everything?q=${search}&apiKey=1683c013575e4777b156c46df8503b9a`;
        //call the url
        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
    })
    }


    return(
        <div className='container'>
           <div className="padd">
               <div  className='filter'>
                   <input type="search" onChange={(event)=>readValue(event.target.value)} placeholder="Search Here "/>
                   <button className="btn" onClick={searchNews}>Search for News </button>
                </div>
                   <h1 >All News</h1>
                   {
                       articles.length == 0?(<h2>Type something</h2>) :
                        articles.map((articles, index)=>(
                        <div key={index} className="articles">
                            <div className="padd-article">
                                <div className="news-img">
                                    <img src={articles.urlToImage} /> 
                                </div>
                                <div className="news-detail">
                                    <h2>{articles.title}</h2>
                                    <p>{articles.author}</p>
                                    <p className="description">{articles.description}</p>
                                    <p>
                                        <a href={articles.url} target="_blank">
                                            <button className='btn'>  Click here to watch more</button>
                                        </a>
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                   
                   ))
                }
           </div>
        </div>
    );
}
export default Main