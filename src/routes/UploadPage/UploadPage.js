import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default class UploadPage extends Component{
    state = { 
        navLinks: [
            {
                link:"Home", 
                route:"/"
            },
            {
                link:"Game",
                route:"/game"
            }
        ]
    }
    static defaultProps = {
        history: {
          push: () => {},
        },
      }
      
    render(){
        return(
            <div>
                <NavBar className="navbar" navLinks={this.state.navLinks}></NavBar>
                Upload page
            </div>
        )
    }
}