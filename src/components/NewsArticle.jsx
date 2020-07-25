import React from 'react';
import { connect } from 'react-redux';
import { nextNewsArticle, prevNewsArticle } from '../redux/news/newsActions'
import "./newsArticle.styles.css";
import NewsPanel from './NewsPanel';

const NewsArticle = ({ title, description, urlToImage, nextNewsArticle, prevNewsArticle }) => {
    return (
        <div className="news-scroller">
            <div className="scroller-arrow" onClick={prevNewsArticle}>
                <span className="arrow">&lt;</span>
            </div>
            <NewsPanel title={title} description={description} urlToImage={urlToImage} />
            <div className="scroller-arrow" onClick={() => { nextNewsArticle() }}>
                <span className="arrow">&gt;</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    nextNewsArticle: () => dispatch(nextNewsArticle()),
    prevNewsArticle: () => dispatch(prevNewsArticle())
});

export default connect(null, mapDispatchToProps)(NewsArticle); 