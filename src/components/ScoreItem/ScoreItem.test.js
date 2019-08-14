import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ScoreItem from './ScoreItem'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ScoreItem>
            </ScoreItem>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});