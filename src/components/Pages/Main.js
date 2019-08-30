import React from 'react'
//import logo from '../../imgs/logo.svg';
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import MovieItem from '../MovieItem'

const Main = ({ movie }) => (
    <>
        <Menu />
        <Header />
        <div class="gallery-container">
            <MovieItem  movie={movie} />
        </div>
        
    </>
)   

export default Main