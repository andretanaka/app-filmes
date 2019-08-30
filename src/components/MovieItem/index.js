import React from 'react'
import { Link } from "react-router-dom"

const MovieItem = () => (
    <>
        <img src="imgs/filme1.jpg" alt="Capa filme 1" />
        <div class="img-legend">
            <div class="text-legend">
                <h4>Nome do filme</h4>
                <h6>Bla bla bla</h6>
            </div>
            <div class="more-details">
                <Link to="/filme">
                    <span>+</span>
                </Link>
            </div>
        </div>
    </>
)

export default MovieItem