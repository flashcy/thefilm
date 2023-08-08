import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

function Movie({id, coverImg, title}) {
    return (
        <div>
            <img src={coverImg} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Movie;
