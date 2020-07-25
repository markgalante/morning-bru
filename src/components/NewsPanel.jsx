import React from 'react';

const NewsPanel = ({ title, description, urlToImage }) => {
    return (
        <div className="news-article fade">
            <h4 className="news-article-title">{title}</h4>
            <div className="news-article-description">
                <p>{description}</p>
            </div>
            <div className="news-article-image">
                <img src={urlToImage} alt={title} />
            </div>
        </div>
    )
};

export default NewsPanel; 