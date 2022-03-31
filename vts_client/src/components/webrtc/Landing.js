import React, { useState, useEffect } from 'react'
import { GetFetchQuotes } from '../../api/fetch'
import { useNavigate } from 'react-router-dom'

const Landing = ({ match, location, history }) => {
  let navigate = useNavigate()

  const joinRoom = () => {
    GetFetchQuotes({
      uri: 'http://localhost:4001/joinRoom',
      msg: 'Get Randome room ID',
    }).then((result) => {
      return navigate(`/stream/${result.data.roomId}`)
    })
  }

  return (
    <div className='landing'>
      <div>Landing component</div>
      <div>{JSON.stringify(match, null, 2)}</div>
      <div>{JSON.stringify(location, null, 2)}</div>
      <div>{JSON.stringify(history, null, 2)}</div>

      <button onClick={joinRoom}>Live Start</button>
    </div>
  )
}

export default Landing