import React, { Component } from 'react'
import './Card.css'

export default class GamePage extends Component{
    render(){
        return(
            <div className="card">{this.props.id}</div>
        )
    }
}