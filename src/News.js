import React, {useEffect, useState, useCallback} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css"




const News = (props)=>{
 const [articles,setArticles] = useState([]);
 const [loading,setLoading] = useState(false);
 const [page,setPage] = useState(1);

 const [totalResults,setTotalResults] = useState(0);

const capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const updateNews= useCallback( async ()=> {
  props.updateProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apikey=2f6e5d2c1f9a447fa0c57f1a88558a05&page=${page}&pagesize=${props.pageSize}`;
  let data = await fetch(url);
  props.updateProgress(30);
  let parsedData= await data.json();
  props.updateProgress(70);
  console.log(parsedData);
  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
   setLoading(false)
 
  props.updateProgress(100);
} ,[props,articles,page])    
  

  
  useEffect(()=>{
   
   updateNews();
    
  
  },[])
 
  // const handlePrevClick = async ()=>{

    // let url = `https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apikey=2f6e5d2c1f9a447fa0c57f1a88558a05&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,page: this.state.page-1, loading: false})
    // this.setState({page: this.state.page-1})
    // this.updateNews();

  // }
  // const handleNextClick = async ()=>{

    // let url = `https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apikey=2f6e5d2c1f9a447fa0c57f1a88558a05&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles,page: this.state.page +1, loading: false})
    // this.setState({page: this.state.page+1})
    // this.updateNews();


  // }
  const fetchMoreData = async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apikey=2f6e5d2c1f9a447fa0c57f1a88558a05&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
   
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    setTimeout(()=>{setArticles(articles.concat(parsedData.articles));setTotalResults(parsedData.totalResults);
     }, 1500)
  
  
  }
  
    // console.log("render")
    return (
      
      <>
        <h1 className='text-center' style={{margin: "35px 0px"}}> NewsMonkey - Top {`${capitalizeFirstLetter(props.category)}`} Headlines </h1>
        <div className="text-center">
        {loading && <Spinner />}
        </div>
        {console.log(totalResults)}
        {console.log(articles)}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row my-3">
        {articles.map((element)=> {
         return  <div className="col-md-4 my-3 " key={element.url} >
                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://www.deccanherald.com/sites/dh/files/articleimages/2022/11/08/youtube-shorts-on-smart-tv-1160438-1667904341.jpg"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>

            </div>
          
        }) }
        </div>
        
        </div>
        </InfiniteScroll>
        
      </>
      
    )
  
}
News.defaultProps = {
  country: "in",
  pageSize: "8",
  category: 'general'

}
News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string
}

export default News
