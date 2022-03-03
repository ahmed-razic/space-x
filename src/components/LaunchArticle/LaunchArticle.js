import React from 'react';
// style
import './style.scss';

const LaunchArticle = ({ name, link, imgUrl, description }) => (
    <div className="d-flex justify-content-center">
        <a href={link} className="article" target="_blank" rel="noopener">
            <img srcSet={`${imgUrl}`} alt={name} className="article__image" />
            <div className="article__header">
                <h5 className="m-0 p-2">{name}</h5>
                <p className="m-0 p-2">{description}</p>
            </div>
        </a>
    </div>
);

export default LaunchArticle;
