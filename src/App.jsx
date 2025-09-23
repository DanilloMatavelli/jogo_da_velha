import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import Board from './components/Board'
import Game from './components/Game'

function App() {

  return (
    <>
    <div>
      <div>
        <Square/>
        <Board/>
      </div>

      <div>
        <Game/>
      </div>
    </div>
      
    </>
  )
}

export default App
