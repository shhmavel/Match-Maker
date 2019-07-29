import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'

export default class NavLink extends Component{
    render(){
        return(
            <li className={this.props.className}>
                <Link
                    to={this.props.routeName}>
                    {this.props.linkName}
                </Link>
            </li>
        )
    }
}