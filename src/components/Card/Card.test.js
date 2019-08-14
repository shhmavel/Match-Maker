import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Card from './Card'

it('renders without crashing', () => {
    const div = document.createElement('div');
    let image = "./LoGrins.JPG"
    ReactDOM.render(
        <BrowserRouter>
            <Card image={image}/>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});