import React from 'react'

const GameContext = React.createContext({
    score:0,
    updateFlag: true,
    setScore: () => {},
})

export default GameContext