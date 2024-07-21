import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types';
import Spinner from './spinner'
import InfiniteScroll from "react-infinite-scroll-component";

 const News = (props)=> {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [totalResults,setTotalResults] = useState(0)
<<<<<<< HEAD
  const [page,setPage] = useState(1);
=======
  const [page,setPage] = useState(1)
    
  //  document.title = `NewsMonkey - ${props.category}`
  // articles = [];
>>>>>>> 9b336058f774fe3943f4166fd62c3c5fc2010c7f

 

  const updateNews = async () =>{
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(50)
    let parsejson = await data.json();
    props.setProgress(70)
    setArticles(parsejson.articles)
    setTotalResults(parsejson.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(()=>{
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // handlePrevClick = async () => {
      // setPage(page - 1)
      // updateNews()
  // };

  // handleNextClick = async () => {
  // setPage(page + 1)
  //   updateNews()
  // };


  const fetchMoreData = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
      setPage(page + 1)
      let data = await fetch(url);
      let parsejson = await data.json();
    
      setArticles(articles.concat(parsejson.articles))
      setTotalResults(parsejson.totalResults)
  };

    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{marginTop:'90px'}}>Newsmonkey- Top {props.category} Headlines</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData} 
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title == null ? "" : element.title}
                      description={element.description == null ? "" : element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
          </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pagesize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );

}

News.propTypes = {
  country : PropTypes.string,
  pagesize : PropTypes.number,
  category : PropTypes.string
}
export default News;
