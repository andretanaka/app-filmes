import React from 'react'
import './ItemMenu.css'

class ItemMenu extends React.Component {
    render(){
        return (
            <div class='menu-options'>
                <h3><a href={this.props.linque}>{this.props.texto}</a></h3>
            </div>
        )
    }
}

export default ItemMenu