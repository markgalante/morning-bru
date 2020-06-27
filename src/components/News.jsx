import React from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/news/newsActions";
import NewsArticle from './NewsArticle'; 


const News = ({ isFetchingNews, news, fetchNews, selectedArticle }) => {
 return isFetchingNews ? (
    <h2>Loading</h2>
  ) : news ? 
    <NewsArticle 
      description={news.articles[selectedArticle].description}
      title={news.articles[selectedArticle].title}
      urlToImage={news.articles[selectedArticle].urlToImage}
    />
   : (
    <div>
      <p>Nothing here</p>
      <button onClick={fetchNews}>Fetch news</button>
    </div>
  )
};

const mapStateToProps = state => ({
  isFetchingNews: state.news.isFetchingNews,
  news: state.news.newsFetchSuccess, 
  selectedArticle: state.news.selectedArticle
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
