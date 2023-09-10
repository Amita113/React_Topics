import React from 'react'

export default function One(props) {
  return (
    <div>
      <h1 style={{color:"orange"}}> This is a new component</h1>
      <h1> Today we are at {props.x} </h1>
    </div>
  )
}

