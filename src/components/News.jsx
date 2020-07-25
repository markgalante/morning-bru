import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/news/newsActions";
import NewsArticle from './NewsArticle';
import Spinner from './Spinners/Spinner';


const News = ({ isFetchingNews, news, fetchNews, selectedArticle }) => {

  useEffect(() => {
    fetchNews()
  }, [selectedArticle, fetchNews]);

  return isFetchingNews ? (
    <div className="news-container"> <Spinner /> </div>
  ) : news ?
      <div className="news-container">
        <NewsArticle
          description={news.articles[selectedArticle].description}
          title={news.articles[selectedArticle].title}
          urlToImage={news.articles[selectedArticle].urlToImage}
        />
      </div>
      : (
        <div>
          <p>Nothing here</p>
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
