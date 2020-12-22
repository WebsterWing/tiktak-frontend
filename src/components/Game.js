import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'

export default function Game() {
  const [moves, setMoves] = useState([])
  const [xIsNext, setXIsNext] = useState(true)

  const squares = calculateSquares(moves)
  const winner = calculateWinner(squares)

  const onClick = i => {
    if (squares[i] || winner) return
    const move = {square: i, value: xIsNext ? 'X' : 'O'}
    setMoves(moves => [...moves, move])
    setXIsNext(!xIsNext)
  }

  const reset = () => {
    setMoves([])
    setXIsNext(true)
  }

  return (
    <>

    <Board 
      onClick={onClick}
      squares={squares}
    />
    <h3>
    {!winner && `${xIsNext ? 'X' : 'O'} plays now`}
    {winner && `🥳${winner} HAS WON🥳`}
    </h3>
    <button onClick={reset}>reset</button>
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