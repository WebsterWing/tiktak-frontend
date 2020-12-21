import React from 'react'

export default function Square({value, onClick}) {
  const className = `square ${value ? value : ''}`
  return (
    <button className={className} onClick={onClick}>{value}</button>
  )
}
