import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import Board from './components/Board'

function App() {

  return (
    <>
    <div>
      <div>
        <Square/>
        <Board/>
      </div>

      <div></div>
    </div>
      
    </>
  )
}

export default App
