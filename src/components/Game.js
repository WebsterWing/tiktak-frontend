import React, { useState, useEffect } from 'react'
import Board from './Board'
import socket from '../socket'
import API from '../API'

export default function Game() {
  const [moves, setMoves] = useState([])
  const squares = calculateSquares(moves)
  const [side, setSide] = useState('X')
  const [winner, setWinner] = useState(null)

  const onClick = i => {
    API.move(side, i, moves.length)
  }

  const changeSide = () => {
    if (side === 'X') {
      setSide('O')
    } else {
      setSide('X')
    }
  }

  useEffect(() => {
    console.log('setting up listener')
    // Listener must be declared seperately so that it can be cleaned up
    const listener = (newMoves, newWinner) => {
      setMoves(newMoves)
      setWinner(newWinner)
    }
    socket.on('game-update', listener)
    return () => socket.off('game-update', listener)
  }, [])

  return (
    <>
    <button className={`sideToggle ${side}`} onClick={changeSide}>
      You are on side {side} (click to change)
    </button>
    <button className="resetBtn" onClick={API.reset}>RESET</button>
    <Board 
      onClick={onClick}
      squares={squares}
    />
    <h3>    
    { /*
    {!winner && `${xIsNext ? 'X' : 'O'} plays now`}
    <button onClick={reset}>reset</button>
    */ }    
    {winner && `🥳${winner} HAS WON🥳`}
    </h3>
    

    </>
  )
}

function calculateSquares(moves) {
  var squares = Array(9).fill(null);
  for (let move of moves) {
    const {square, value} = move
    squares[square] = value
  }
  return squares
}