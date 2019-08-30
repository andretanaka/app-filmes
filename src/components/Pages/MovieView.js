import React, { useState, useEffect } from "react"
import { movies } from '../../Mock'

const MovieView = ({ match }) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const filtered = movies.filter(movie => movie.id === parseInt(match.params.id)
        )[0];
        setMovie(filtered);
    }, [match.params.id]);

    console.log(movie)
    return (
        <>
        </>
    );
};

export default MovieView