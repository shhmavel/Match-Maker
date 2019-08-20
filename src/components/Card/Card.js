import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component{
    render(){
        console.log('render', this.props.id)
        return(
            <div className = "card"
                onClick = { this.props.onClick }>
                <img alt={ this.props.id } id={ this.props.id } src={require(`${this.props.image}`)} className="front"></img> 
            </div>
        )
    }
}