import React from 'react'

const GameContext = React.createContext({
    score:0,
    updateFlag: true,
    retart: false,
    setScore: () => {},
    setRestart: () => {},
})

export default GameContext