import React from 'react';
import PropTypes from 'prop-types';
import '../css/Movie.css';
import { Link } from 'react-router-dom';

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link to={{
                pathname: '/movie_detail', 
                state: {year, title, summary, poster, genres},
            }}>
                <img src={poster} alt={title}/>
                <div className="movie_data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="mavie__summary">{summary.slice(0,180)}</p>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => {
                            return <li key={index} className="movie__genre">{genres}</li>;
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
};

export default Movie;