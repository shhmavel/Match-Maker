import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HighScores from './HighScores'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <HighScores>
            </HighScores>
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});