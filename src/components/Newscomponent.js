import React, { useState,useEffect } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const Newscomponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let resolveData = await data.json();
    props.setProgress(70);

    // console.log(resolveData);
    setArticles(resolveData.articles);
    settotalResults(resolveData.totalResults);
    setloading(false);
    props.setProgress(100);


  }

  useEffect(() => {
    
  document.title = `${capitalizeString(props.category)} - NewsPiece`;
    updateNews();
    // eslint-disable-next-line
  }, []);



  // const handlePrevPage =  () => { 
  //    setpage(page - 1);
  //    updateNews();
  // }

  // const handleNextPage = async () => {
  //   if (!( page + 1 > Math.ceil( totalResults /  props.pageSize))) {
  //     setpage(page  + 1);
  //      updateNews();
  //   }
  // }

  const fetchMoreData = async () => {
   

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    let resolveData = await data.json();

    setArticles(articles.concat(resolveData.articles));
    settotalResults(resolveData.totalResults);
    setloading(false);
   

  };



  return (
    <>
      <div>
        <h1 className='text-center my-5'>NewsPiece - Top {capitalizeString(props.category)}  Headings</h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className='container my-3'>
            <div className="row" >
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <Newsitem tittle={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.id} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll >
      </div>
    </>
  )

}

Newscomponent.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
}

Newscomponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,

}

export default Newscomponent;
