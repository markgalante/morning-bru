import React from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/news/newsActions";

const News = ({ isFetchingNews, fetchNews }) => {
  return isFetchingNews ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <h2>Latest News Articles</h2>
      <p>Read Here</p>
      <button onClick={fetchNews}>Next news article</button>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetchingNews: state.news.isFetchingNews,
  article: state.news.newsFetchSuccess
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
