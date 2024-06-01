import React from "react";
import PropTypes from "prop-types";

const Card = ({ imageSource, title, text, url }) => {
    return (
        <div className="col-md-3">
        <div className="card">
            <img src={imageSource} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={url} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
        </div>
    );
};

Card.propTypes = {
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Card;
