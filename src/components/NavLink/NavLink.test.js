import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavLink from './NavLink'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NavLink routeName="Home">
            </NavLink>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});