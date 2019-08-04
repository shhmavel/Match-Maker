import React, { Component } from 'react'
import './Card.css'

export default class GamePage extends Component{
    render(){
        return(
            <div className = "card"
                onClick = { this.props.onClick }>
                <img  id={ this.props.id } src={require(`${this.props.image}`)} className="front"></img> 
            </div>
        )
    }
}