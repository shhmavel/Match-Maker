import React, { Component } from 'react'
import './NavBar.css'
import NavLink from '../NavLink/NavLink'

export default class NavBar extends Component{
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
      render(){
          return(
              <div>
                <nav className='app-nav'>
                    <ul className="nav-list">
                      {Object.keys(this.props.navLinks)
                        .map(key => {
                          return (
                            <NavLink
                              className="nav-item"
                              key={key}
                              id={key}
                              linkName={this.props.navLinks[key].link}
                              routeName={this.props.navLinks[key].route}></NavLink>
                          )
                        })}
                    </ul>
                </nav>
              </div>
          )
      }
    }