import React from 'react'
import ItemMenu from '../ItemMenu/ItemMenu'
import './Menu.css'
import logo from '../../imgs/logo-sciensa-pb2.png'

class Menu extends React.Component {

    render(){
        return (
            <div class="fixed-menu">
            <div class="logo-content">
                <a href=""><img src={logo} alt="Logo Sciensa uma empresa legal" /></a>
            </div>
            <div class="menu-box">
                <ItemMenu linque="" texto="Filmes"/>
                <ItemMenu linque='' texto='Atores' />
                <ItemMenu linque='../public/generos.html' texto='Gêneros' />
            </div>
            <div class="menu-content">
                <button>Adicionar filme</button>
            </div>
        </div>
        )
    }
}

export default Menu