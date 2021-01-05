import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Board from './Board'
import socket from '../socket'

export default function Game() {
  const [moves, setMoves] = useState([])
  const squares = calculateSquares(moves)
  const [side, setSide] = useState('X')
  const [winner, setWinner] = useState(null)

  const onClick = i => {
    axios.post('/move', 
      {
        move: {value: side, square: i, sequence_num: moves.length},
        id: "placeholder-uuid",
      }
    ).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const changeSide = () => {
    if (side === 'X') {
      setSide('O')
    } else {
      setSide('X')
    }
  }

  const reset = () => {
    axios.get('/reset').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
    <button onClick={reset}>RESET</button>
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