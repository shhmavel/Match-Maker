import React, { Component } from 'react'

export default class ScoresPage extends Component{
    render(){
        return(
            <h3>{parseInt(this.props.id) + 1}. {this.props.name} - {this.props.num}</h3>
        )
    }
}