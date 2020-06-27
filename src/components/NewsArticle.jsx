import React from 'react';
import { connect } from 'react-redux'; 
import { nextNewsArticle, prevNewsArticle } from '../redux/news/newsActions'
import "./newsArticle.styles.css"

const NewsArticle = ({ title, description, urlToImage, nextNewsArticle, prevNewsArticle }) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <img src={urlToImage} alt={title} /><br/>
            <button onClick={prevNewsArticle}>Previous</button> <button onClick={nextNewsArticle}>Next</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    nextNewsArticle: () => dispatch(nextNewsArticle()),
    prevNewsArticle: () => dispatch(prevNewsArticle())
}); 

export default connect(null, mapDispatchToProps)( NewsArticle); 